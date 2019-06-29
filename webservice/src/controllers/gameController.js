import CombatManager from '../combat/combatManager';






let combatManager = new CombatManager();
combatManager.registerVictoryCondition('Last Man Standing', matchObject => {
    const remainingCombatants = matchObject.combatants.filter(combatant => {
        return combatant.health > 0;
    });

    if (remainingCombatants.length === 1) {
        return remainingCombatants[0];
    }

    return false;
});

let controller = {};
controller.start = (req, res) => {   
    
};

export default controller;