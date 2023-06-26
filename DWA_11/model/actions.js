/**
 * @typedef {object} Increase
 * @prop {'INCREASE'} type
 * @prop {number} stepAmount
 */

/**
 * @typedef {object} Decrease
 * @prop {'DECREASE'} type
 * @prop {number} stepAmount
 */

/**
 * @typedef {object} Reset
 * @prop {'RESET'} type
 * @prop {number} startAmount
 */

/**
 * @typedef {Increase | Decrease | Reset} Action
 */
export const Action = {}

/**
 * @returns {Increase}
 */
export const increase = () => {
    return {
        type: "INCREASE",
        stepAmount: 1
    }
}

/**
 * @returns {Decrease}
 */
export const decrease = () => {
    return {
        type: "DECREASE",
        stepAmount: 1
    }
}

/**
 * @returns {Reset}
 */
export const reset = () => {
    return {
        type: "RESET",
        startAmount: 0
    }
}

