
'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  
    let current = { ...state };
    let result = [];
    for (const action of actions) {
        switch (action.type) {
            case 'clear':
                current = {};
                break;
            case 'addProperties':
                current = { ...current, ...action.extraData };
                break;
            case 'removeProperties':
                current = Object.fromEntries(
                    Object.entries(current).filter(([key]) => !action.keysToRemove.includes(key))
                );
                break;
        }
        result.push({ ...current });
    }
    return result;
}

module.exports = transformStateWithClones;
