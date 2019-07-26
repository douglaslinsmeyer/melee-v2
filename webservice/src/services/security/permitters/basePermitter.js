import logger from '../../../logger';

export class BasePermitter {

    constructor(key, ac) {
        this.key = key;
        this.ac = ac;
    }

    isOwn(obj, user) {
        return true;
    }

    canCreate(obj, user) {
        for(let i=0; i < user.roles.length; i++) {
            let role = user.roles[i];
            let permission = (this.isOwn(obj, user)) ? this.ac.can(role).createOwn(this.key) : this.ac.can(role).createAny(this.key);
            logger.log('info', `[SECURITY]: Checking permission for [${user.name}] to create [${ (this.isOwn(obj, user)) ? 'own' : 'not own' }] [${this.key}] with role [${role}]...`);
            if (permission.granted) {
                logger.log('info', `[SECURITY]: Permission to create [${this.key}] granted by role [${role}] for [${user.name}].`);
                return true;
            } else {
                logger.log('info', `[SECURITY]: Permission to create [${this.key}] with role [${role}] denied for [${user.name}].`);
            }
        }

        logger.log('info', `[SECURITY]: Permission to create [${this.key}] denied for [${user.name}].`);
        return false;
    }

    canRead(obj, user) {
        for(let i=0; i < user.roles.length; i++) {
            let role = user.roles[i];
            let permission = (this.isOwn(obj, user)) ? this.ac.can(role).readOwn(this.key) : this.ac.can(role).readAny(this.key);
            logger.log('info', `[SECURITY]: Checking permission for [${user.name}] to read [${ (this.isOwn(obj, user)) ? 'own' : 'not own' }] [${this.key}] with role [${role}]...`);
            if (permission.granted) {
                return true;
            } else {
                logger.log('info', `[SECURITY]: Permission to read [${this.key}] with role [${role}] denied for [${user.name}].`);
            }
        }

        logger.log('info', `[SECURITY]: Permission to read [${this.key}] denied for [${user.name}].`);
        return false;
    }

    canUpdate(obj, user) {
        for(let i=0; i < user.roles.length; i++) {
            let role = user.roles[i];
            let permission = (this.isOwn(obj, user)) ? this.ac.can(role).updateOwn(this.key) : this.ac.can(role).updateAny(this.key);
            logger.log('info', `[SECURITY]: Checking permission for [${user.name}] to update [${ (this.isOwn(obj, user)) ? 'own' : 'not own' }] [${this.key}] with role [${role}]...`);
            if (permission.granted) {
                return true;
            } else {
                logger.log('info', `[SECURITY]: Permission to update [${this.key}] with role [${role}] denied for [${user.name}].`);
            }
        }

        logger.log('info', `[SECURITY]: Permission to update [${this.key}] denied for [${user.name}].`);
        return false;
    }

    canDelete(obj, user) {
        for(let i=0; i < user.roles.length; i++) {
            let role = user.roles[i];
            let permission = (this.isOwn(obj, user)) ? this.ac.can(role).deleteOwn(this.key) : this.ac.can(role).deleteAny(this.key);
            logger.log('info', `[SECURITY]: Checking permission for [${user.name}] to delete [${ (this.isOwn(obj, user)) ? 'own' : 'not own' }] [${this.key}] with role [${role}]...`);
            if (permission.granted) {
                return true;
            } else {
                logger.log('info', `[SECURITY]: Permission to delete [${this.key}] with role [${role}] denied for [${user.name}].`);
            }
        }

        logger.log('info', `[SECURITY]: Permission to delete [${this.key}] denied for [${user.name}].`);
        return false;
    }
}
