import { BasePermitter } from "./basePermitter";

export class BotPermitter extends BasePermitter {

    constructor(ac) {
        super('bot', ac);
    }

    isOwn(obj, user) {
        return (obj.owner.id === user.id);
    }
}