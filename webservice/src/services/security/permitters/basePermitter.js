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
            if (permission.granted) {
                return true;
            }
        }

        return false;
    }

    canRead(obj, user) {
        for(let i=0; i < user.roles.length; i++) {
            let role = user.roles[i];
            let permission = (this.isOwn(obj, user)) ? this.ac.can(role).readOwn(this.key) : this.ac.can(role).readAny(this.key);
            if (permission.granted) {
                return true;
            }
        }

        return false;
    }

    canUpdate(obj, user) {
        for(let i=0; i < user.roles.length; i++) {
            let role = user.roles[i];
            let permission = (this.isOwn(obj, user)) ? this.ac.can(role).updateOwn(this.key) : this.ac.can(role).updateAny(this.key);
            if (permission.granted) {
                return true;
            }
        }

        return false;
    }

    canDelete(obj, user) {
        for(let i=0; i < user.roles.length; i++) {
            let role = user.roles[i];
            let permission = (this.isOwn(obj, user)) ? this.ac.can(role).deleteOwn(this.key) : this.ac.can(role).deleteAny(this.key);
            if (permission.granted) {
                return true;
            }
        }

        return false;
    }
}