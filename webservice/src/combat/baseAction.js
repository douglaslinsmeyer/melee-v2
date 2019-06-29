class BaseAction {
    constructor(actionName) {
        this.name = actionName;
        this.actions = [];
    }

    getName() {
        return this.name;
    }

    getEffects() {
        return this.actions;
    }
}