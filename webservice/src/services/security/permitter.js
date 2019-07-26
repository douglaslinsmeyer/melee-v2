import AccessControl from 'accesscontrol';
import { BasePermitter } from './permitters/basePermitter';
import { BotPermitter } from './permitters/botPermitter';
import { UserPermitter } from './permitters/userPermitter';
import logger from '../../logger';

const permissions = {
    admin: {
        bot: {
            'create:any': ['*',],
            'read:any': ['*',],
            'update:any': ['*',],
            'delete:any': ['*',],
        },
        user: {
            'create:any': ['*',],
            'read:any': ['*',],
            'update:any': ['*',],
            'delete:any': ['*',],
        },
    },
    user: {
        bot: {
            'create:own': ['*',],
            'read:own': ['*',],
            'update:own': ['*', '!id',],
            'delete:own': ['*',],
            'create:any': [],
            'read:any': ['*',],
            'update:any': [],
            'delete:any': [],
        },
        user: {
            'create:own': ['*',],
            'read:own': ['*',],
            'update:own': ['*', '!id',],
            'delete:own': [],
            'create:any': [],
            'read:any': ['*',],
            'update:any': [],
            'delete:any': [],
        },
    },
};

class Permitter {
    constructor() {
        this.permitters = [];
    }

    register(permitter) {
        if (false === permitter instanceof BasePermitter) {
            return;
        }

        this.permitters.push(permitter);
    }

    getPermitter(modelName) {
        for (let i=0; i < this.permitters.length; i++) {
            if (this.permitters[i].key === modelName) {
                return this.permitters[i];
            }
        }

        logger.log('info', `There is no permitter for "${modelName}".`);
    }
}

const ac = new AccessControl(permissions);
const permitter = new Permitter();
permitter.register(new BotPermitter(ac));
permitter.register(new UserPermitter(ac));

export default permitter;
