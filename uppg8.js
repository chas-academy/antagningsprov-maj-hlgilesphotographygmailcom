function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument

const people = [
    { name: "Hannah", age: 26 },
    { name: "Karen", age: 39 },
    { name: "Pia", age: 41 },
    { name: "Jonas", age: 22 },
    { name: "Samuel", age: 48 }
];

function logOverThirty(array) {
    array.forEach(person => {
        if (person.age > 30) {
            console.log(person.name);
        }
    });
}

logOverThirty(people);
}
module.exports = { uppg8 };