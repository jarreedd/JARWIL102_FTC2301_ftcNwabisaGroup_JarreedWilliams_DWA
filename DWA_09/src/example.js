const dog = (breed, age) => {
    const sound = 'woof'

    return {
        bark : () => console.log(sound),
        breed: breed,
        age: age
    };
}

const junior = dog('Rottwieler', 5)
console.log(junior);
junior.bark()