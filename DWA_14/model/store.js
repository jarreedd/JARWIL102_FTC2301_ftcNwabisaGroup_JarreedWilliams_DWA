import { Action } from "./actions.js";
import { reducer } from "./reducers.js";

/**
 * @typedef {object} State
 * @prop {number} count
 */
export const State = {};


/**
 * @callback Subscription
 * @param {State} prev
 * @param {State} next
 */

/**
 * @callback EmptyFn
 */

/**
 * @type {Array<Subscription>}
 */

let subscribers = [];

/**
 * @type {Array<State>}
 */
export const states = [
    {
        count: 0
    }
];

/**
 * @returns {State}
 */
export const getState = () => {
    return Object.freeze({...states[0]});
};

/**
 * @param {Action} action
 */
export const dispatch = (action) => {
    const prev = getState();
    const next = reducer(prev, action);

    subscribers.forEach((item) => item(prev, next))

    states.unshift(next)
}

/**
 * @param {Subscription} subscription
 * @returns {EmptyFn}
 */
export const subscribe = (subscription) => {
    subscribers.push(subscription);
    const handler = (item) => item !== subscription;

    const unsubscribe = () => {
        const newSubscribers = subscribers.filter(handler)
        subscribers = newSubscribers;
    };

    return unsubscribe
}