// Object destructuring
// const person = {
//     name: 'Jared',
//     age: 230,
//     location: {
//         city: 'Frisco',
//         temp: 88
//     }
// }

// const { name: firstName = 'Anonymous', age } = person
// console.log(`${firstName} is ${age}`)

// const { city, temp: temperature } = person.location
// if ( city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
        
//     }
// }

// const { name: publisherName = 'self published' } = book.publisher
// if (publisherName) {
//     console.log(publisherName)
// }

// Array destructuring

// const address = ['1299 S juniper Street', 'Cali', '19147']

// const [,, state = 'New'] = address

// console.log(`You are in ${state} `)

const item =['Coffee (hot)', '$2.00', '$250', '$2.75']
const [coffee, small, medium, large] = item
console.log(`A medium ${coffee} cost ${medium}`)

