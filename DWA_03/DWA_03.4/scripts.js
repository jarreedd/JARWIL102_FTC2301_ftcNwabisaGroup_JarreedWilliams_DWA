//@ts-check

//Leo Musvaire details

/**
 * a person's firstname
 * @type {string} 
 */
const leoName = 'Leo'

/**
 * a person's lastname
 * @type {string} 
 */
const leoSurname = 'Musvaire'

/**
 * a person's balance
 * @type {number | string}
 */
const leoBalance = '-10'

/**
 * a person's street number
 * @type {number | string}
 */
const leoNumber = '2'

/**
 * a person's street name
 * @type {string}
 */
const leoStreet = 'Church St.'

/**
 * a person's city postal code
 * @type {number | string}
 */
const leoPostal = '3105'


// Sarah Kleinhans details

/**
 * a person's firstname
 * @type {string} 
 */
const sarahName = 'Sarah'

/**
 * a person's lastname
 * @type {string} 
 */
const sarahSurname = 'Kleinhans'

/**
 * a person's balance
 * @type {number | string}
 */
const sarahBalance = '-4582.21'

/**
 * a person's street number
 * @type {number | string}
 */
const sarahNumber = '13'

/**
 * a person's street name
 * @type {string}
 */
const sarahStreet = 'William Close'

/**
 * a person's city postal code
 * @type {number | string}
 */
const sarahPostal = '0310'


/**
 * A Person
 * @typedef {Object} Person
 * @property {number|string} accessId - person access ID
 * @property {string} name - person name
 * @property {number|string} balance - person balance
 * @property {number} [age] - person age (optional)
 * @property {{number: number|string, street: string, postalCode: number | string}} address - person adress
 */


/**
 * person one
 * @type {Person}
 */

const leo = {
    accessId : '47afb389-8014-4d0b-aff3-e40203d2107f',
    name : `${leoName} ${leoSurname}`,
    balance : leoBalance,
    age : 24,
    address : {
        number : leoNumber,
        street : leoStreet,
        postalCode : leoPostal
    }
}

/**
 * person two
 * @type {Person}
 */

const sarah = {
    accessId : '6b279ae5-5657-4240-80e9-23f6b635f7a8',
    name : `${sarahName} ${sarahSurname}`,
    balance : sarahBalance,
    age : 62,
    address : {
        number : sarahNumber,
        street : sarahStreet,
        postalCode : sarahPostal
    }
}

console.log(leo, leo['address']['postalCode'])
console.log(sarah, sarah['address']['postalCode'])
