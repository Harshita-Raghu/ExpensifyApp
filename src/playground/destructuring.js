




// const person={
//     name:'Harshita',
//     age:21,
//     location:{
//         city:'Bangalore',
//         temp:78
//     }
// }

// const {name :firstname='Harshee',age}=person;
// const{city,temp:temperature}=person.location;

// console.log(`${firstname} is ${age} years old`);
// if(temperature &&city ){
// // console.log(`It is ${temperature}C in ${city} `)}

// const book={
//     title:'Game of thrones',
//     author:'J.R.R Martin',
//     publisher:{
//         //name:'Penguin'
//     }
// }

// const {title,author}=book

// const {name="Self published"}=book.publisher

// console.log(`${title} is written by the famous author ${author}`);
// console.log(`It is published by ${name}`);

// const address=[]

// const [,,state='New york',]=address;

// console.log(`yOU ARE IN ${state}`);

const item=['Coffee(ice)','$2.00','$2.55','$2.75']

const [drink,,medium,]=item;
console.log(`A medium ${drink} costs ${medium}`);
