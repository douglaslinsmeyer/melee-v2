
import Bot from '../models/bot';

export class ActionEffect 
{
    constructor(name, duration, actor, target, callback) {
        if (typeof name !== 'string') {
            throw new TypeError(`Expected a string, got a ${typeof name}.`);
        }

        if (typeof duration !== 'number') {
            throw new TypeError(`Expected a number, got a ${typeof duration}. `);
        }

        if (typeof callback !== 'function') {
            throw new TypeError(`Expected a function, got a ${typeof callback}`);
        }

        if (false === actor instanceof Bot) {
            throw new TypeError('Invalid input, Actor argument must be an instance of Bot.');
        }

        if (false === target instanceof Bot) {
            throw new TypeError('Invalid input, Target argument must be an instance of Bot.');
        }

        this.name = name;
        this.duration = duration;
        this.actor = actor;
        this.target = target;
        this.callback = callback;
    }
}

export class EffectFactory 
{
    static make(name, duration, actor, target, callback) {
        return new ActionEffect(name, duration, actor, target, callback);
    }
}