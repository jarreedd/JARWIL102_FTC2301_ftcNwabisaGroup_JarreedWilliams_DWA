
const dog = (breed, age) => {
    const sound = 'woof'

    return {
        bark : () => console.log(sound),
        breed: breed,
        age: age
    };
}

const mufasa = dog('Rottwieler', 5)
const gudjo = dog('Pitbull Tarrior', 4)
console.log(mufasa, gudjo);
gudjo.bark()

class Cat {
    sound = 'meow'
    constructor(catName, colour, age,) {
        this.name = catName
        this.colour = colour
        this.age = age


        this.talk = (sound) => {
            console.log(sound);
        }
    }

    
}

const garfield = new Cat()
const tom = new Cat()
tom.talk()

console.log(tom);