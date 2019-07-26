import logger from '../../../logger';

const permissionCheckingMessage = (action, userName, own, object, role) => {
    return `[SECURITY]: Checking permission of [${userName}] to ${action} [${ (own) ? 'own' : 'not own' }] [${object}] with role [${role}]...`;
};

const permissionGrantedByRoleMessage = (action, userName, own, object, role) => {
    return `[SECURITY]: Permission to ${action} [${ (own) ? 'own' : 'not own' }] [${object}] granted to [${userName}] by role [${role}].`;
};

const permissionDeniedByRoleMessage = (action, userName, own, object, role) => {
    return `[SECURITY]: Permission to ${action} [${ (own) ? 'own' : 'not own' }] [${object}] denied to [${userName}] by role [${role}].`;
};

const permissionDeniedMessage = (action, userName, own) => {
    return `[SECURITY]: Permission to ${action} [${ (own) ? 'own' : 'not own' }] [${this.key}] denied for [${userName}].`;
};

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
            logger.log('info', permissionCheckingMessage('create', user.name, this.isOwn(obj, user), this.key, role));
            if (permission.granted) {
                logger.log('info', permissionGrantedByRoleMessage('create', user.name, this.isOwn(obj, user), this.key, role));
                return true;
            } else {
                logger.log('info', permissionDeniedByRoleMessage('create', user.name, this.isOwn(obj, user), this.key, role));
            }
        }

        logger.log('info', permissionDeniedMessage('create', user.name, this.isOwn(obj, user), this.key));
        return false;
    }

    canRead(obj, user) {
        for(let i=0; i < user.roles.length; i++) {
            let role = user.roles[i];
            let permission = (this.isOwn(obj, user)) ? this.ac.can(role).readOwn(this.key) : this.ac.can(role).readAny(this.key);
            logger.log('info', permissionCheckingMessage('read', user.name, this.isOwn(obj, user), this.key, role));
            if (permission.granted) {
                logger.log('info', permissionGrantedByRoleMessage('read', user.name, this.isOwn(obj, user), this.key, role));
                return true;
            } else {
                logger.log('info', permissionDeniedByRoleMessage('read', user.name, this.isOwn(obj, user), this.key, role));
            }
        }

        logger.log('info', permissionDeniedMessage('read', user.name, this.isOwn(obj, user), this.key));
        return false;
    }

    canUpdate(obj, user) {
        for(let i=0; i < user.roles.length; i++) {
            let role = user.roles[i];
            let permission = (this.isOwn(obj, user)) ? this.ac.can(role).updateOwn(this.key) : this.ac.can(role).updateAny(this.key);
            logger.log('info', permissionCheckingMessage('update', user.name, this.isOwn(obj, user), this.key, role));
            if (permission.granted) {
                logger.log('info', permissionGrantedByRoleMessage('update', user.name, this.isOwn(obj, user), this.key, role));
                return true;
            } else {
                logger.log('info', permissionDeniedByRoleMessage('update', user.name, this.isOwn(obj, user), this.key, role));
            }
        }

        logger.log('info', permissionDeniedMessage('update', user.name, this.isOwn(obj, user), this.key));
        return false;
    }

    canDelete(obj, user) {
        for(let i=0; i < user.roles.length; i++) {
            let role = user.roles[i];
            let permission = (this.isOwn(obj, user)) ? this.ac.can(role).deleteOwn(this.key) : this.ac.can(role).deleteAny(this.key);
            logger.log('info', permissionCheckingMessage('delete', user.name, this.isOwn(obj, user), this.key, role));
            if (permission.granted) {
                logger.log('info', permissionGrantedByRoleMessage('delete', user.name, this.isOwn(obj, user), this.key, role));
                return true;
            } else {
                logger.log('info', permissionDeniedByRoleMessage('delete', user.name, this.isOwn(obj, user), this.key, role));
            }
        }

        logger.log('info', permissionDeniedMessage('delete', user.name, this.isOwn(obj, user), this.key));
        return false;
    }
}
