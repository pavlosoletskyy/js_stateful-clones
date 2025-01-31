'use strict';

function transformStateWithClones(state, actions) {
    let currentState = { ...state };
    let result = [];
    for (const action of actions) {
        switch (action.type) {
            case 'clear':
                currentState = {};
                break;
            case 'addProperties':
                currentState = { ...currentState, ...action.extraData };
                break;
            case 'removeProperties':
                currentState = Object.fromEntries(
                    Object.entries(currentState).filter(([key]) => !action.keysToRemove.includes(key))
                );
                break;
        }
        result.push({ ...currentState });
    }
    return result;
}
