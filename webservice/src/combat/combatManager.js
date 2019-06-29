export default class combatManager {

    constructor() {
        this._victoryConditions = [];
        this._validActions = [];
    }

    registerVictoryCondition(name, callback) {
        for (let i = 0; i < this._victoryConditions.length; i++) {
            if (this._victoryConditions[i].name === name) {
                throw `Unable to register victory condition [${name}], a condition with that name has already been registered.`;
            }
        }

        this._victoryConditions.push({
            name: name,
            callback: callback,
        });
    }

    registerValidAction(action) {
        if (this._validActions.includes(action)) {
            return;
        }

        this._validActions.push(action);
    }

}