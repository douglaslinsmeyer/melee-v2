import { BasePermitter } from "./basePermitter";

export class UserPermitter extends BasePermitter {

    constructor(ac) {
        super('user', ac);
    }

    isOwn(obj, user) {
        return (obj.id === user.id);
    }
}