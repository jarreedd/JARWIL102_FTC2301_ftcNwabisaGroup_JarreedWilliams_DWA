import { State } from "./store.js";
import { Action } from "./actions.js"

/**
 * @param {State} state
 * @param {Action} action
 * @returns {State}
 */
export const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE': {
            return {
                ...state,
                count: state.count + action.stepAmount
            };
        }

        case 'DECREASE': {
            return {
                ...state,
                count: state.count - action.stepAmount
            };
        }

        case 'RESET': {
            return {
                ...state,
                count: action.startAmount
            };
        }
    
        default:
            return state;
    }
}