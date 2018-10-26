// const person = {
//   name: 'Vince',
//   age: 48,
//   location: {
//     city: 'Irvine',
//     temp: 75
//   }
// }

// const { name, age } = person;

// console.log(`${name} is ${age}.`);

const book = {
  title: 'White Noise',
  author: 'Don Delillo',
  publisher: {
    name: 'Penguin'
  }
}

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName); // Penguin, Self-Published