// @ts-check
/**
 * @type {Array<string>}
 */
const provinces = [
    'Western Cape',
    'Gauteng',
    'Northern Cape',
    'Eastern Cape', 
    'KwaZulu-Natal', 
    'Free State'
];

/**
 * @type {Array<string>}
 */
const names = [
    'Ashwin',
    'Sibongile',
    'Jan-Hendrik',
    'Sifso',
    'Shailen',
    'Frikkie'
];

// Use forEach to console log each name to the console.
names.forEach(name => console.log(name))

// Use forEach to console log each name with a matching province.
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`))

// Using map loop over all province names and turn the string to all uppercase. Log the new array to the console.
const uppercaseProvince = provinces.map(province => province.toUpperCase())
console.log(uppercaseProvince);

// Create a new array with map that has the amount of characters in each name. The result should be: [6, 9, 11, 5, 8, 7, 7]
const charactersAmount = names.map(name => name.length);
console.log(charactersAmount);

// Using toSorted to sort all provinces alphabetically.
// const rearrangedProvinces = provinces.toSorted()
const rearrangedProvinces = provinces.sort()
console.log(rearrangedProvinces);

// Use filter to remove all provinces that have the word Cape in them. After filtering the array, return the amount of provinces left. The final value should be 3
const filterHandler = (province) => {
    return !province.includes('Cape')
};
console.log(provinces.filter(filterHandler).length);

// Create a boolean array by using map and some to determine whether a name contains an S character. The result should be [true, true, false, true, false, true, false]
const containsCharacterS = names.map(name => name.split('').some(char => char.toLowerCase() === 's'));
console.log(containsCharacterS);

// Using only reduce, turn the above into an object that indicates the province of an individual.

console.log(
    names.reduce((obj, name, index) => {
        obj[name] = provinces[index];
        return obj;
    }, {})
);

/**
 * @typedef {object} Product
 * @prop {string} product
 * @prop {number | string | null} price
 */

/**
 * @type {Array<Product>}
 */
const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]


// Use forEach to console.log each product name to the console.
products.forEach((item) => console.log(item.product));

// Use filter to filter out products that have a name longer than 5 characters.
console.log(products.filter((item) => item.product.length <= 5));

// Using both filter and map. Convert all prices that are strings to numbers, and remove all products from the array that do not have prices. 
//After this has been done then use reduce to calculate the combined price of all remaining products.
const totalPrice = products
  .filter(item => item.price !== '' && !isNaN(item.price))
  .map(item => ({ ...item, price: Number(item.price) }))
  .reduce((total, item) => total + item.price, 0);

console.log(totalPrice);

// Use reduce to concatenate all product names to create the following string: banana, mango, potato, avocado, coffee and tea.
console.log(
    products.reduce((acc, item, index) => {
        if (index === products.length - 1) {
            return acc + item.product;
        } else {
            return acc + item.product + ', ';
        }
    }, '')
)
// Use reduce to calculate both the highest and lowest-priced items. 
// The names should be returned as the following string: Highest: coffee. Lowest: banana.

// Using only Object.entries and reduce recreate the object with the exact same values. 
// However, the following object keys should be changed in the new array:
// - product should be changed to name
// - price should be changed to cost