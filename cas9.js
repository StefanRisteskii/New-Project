// const student = {
//   name: "Ana",
//   age: 22,
//   city: "Skopje"
// };

// const { name, age } = student;
// console.log(name, age);

// const { name, age, grad } = student;
// console.log(name, age, grad);  // Ana 22 undefined

// const { name, age, city } = student;
// console.log(name, age, city);  // Ana 22 Skopje

// Zadacha 1
// Dokolku godinite se 18 ili nad 18, ispechatete gi imeto i gradot
// Vo sprotivno pokazhete no data

// if (age >= 18) {
//     console.log(`Name: ${name}, City: ${city}`);
// } else {
//     console.log("No data");
// }

// const student = {
//   name: "Ana",
//   age: 22,
//   city: "Skopje",
//   state: "Utah"
// };

// const { name, age, city, state } = student;


// console.log(name, age, city, state);
// const stateString = state !== undefined ? `, State: ${state}` : "";

// if (age >= 18) {
//     console.log(`Name: ${name}, age: ${age}, city: ${city}${stateString}.`);
// }
// else {
//     console.log("No data");
// }


// const product = {
//   name: "Laptop",
//   price: 1200,
// }

// const { name: otherName, category = "Other" } = product;// go bara kluchot name, i ja zachuvva vrednosta vo promenlivata posle : (otherName)
// console.log(otherName, category);

// const { name, category = "Other" } = product;  // dokolku category ne postoi kako kluch vo product, "Other" kje se zadade kako default vrednost na category
// console.log(name, category);

// const cities = ["Skopje", "Bitola", "Ohrid"];

// const [first, second, third] = cities;

// console.log(first, second, third); // Skopje Bitola Ohrid

// const [first, second] = cities;
// console.log(first, second); // Skopje Bitola

// const [,,third] = cities;
// console.log(third);  // Ohrid


// const student = {
//   name: "Ana",
//   age: 22,
//   city: "Skopje"
// };

// function printStudent(obj) {
//   console.log(obj.name + " - " + obj.age);
//   const name = "John";  // mozmeme da definirame konstanta so ime name
// }

// function printStudent({ name, age }) {
//   console.log(name + " - " + age);
//   // const name = "John"; dokolku sakame da definirame konstanta so ime name, kje frli greshka
// }

// printStudent(student);

// const games = ["Minecraft", "GTA V"];
// console.log(games);
// console.log(...games);

// const updatedGames = [...games, "Counter-Strike 2", ...games];
// console.log(updatedGames);  // se printa updatedGames kako lista
// console.log(...updatedGames);  // gi printa eden po eden element

// const student = {
//   id: 1,
//   name: "Ana",
//   age: 22
// };

// const updatedStudent = {
//     ...student,
//     age: 23
// };

// console.log(updatedStudent);  // {id: 1, name: 'Ana', age: 23}
// // console.log(...updatedStudent);  // Uncaught TypeError: Spread syntax requires

// const updatedStudent = {
//     age: 23,
//     ...student,
// };

// console.log(updatedStudent);  // {age: 22, id: 1, name: 'Ana'} ...student kje ja prepokrie vrednost 23 za age



// const student = {
//   name: "Ana",
//   address: { city: "Skopje", street: "Centar 2" }
// };

// console.log(student);

// const copy = {...student};
// // console.log(copy);

// copy.address.city = "Bitola";
// console.log(student);  // city: Bitola
// console.log(copy);  // city: Bitola

// const game = {
//   id: 1,
//   name: "Minecraft",
//   rating: 9.5,
//   completed: false
// };

// const games = ["Minecraft", "GTA V"];

// // Извлечи name и rating со destructuring
// const { name, rating } = game;
// console.log(name, rating);

// // Креирај нов game object со completed: true.
// const newObject = {
//     ...games,
//     completed: true
// };

// console.log(newObject);

// // Потврди дека оригиналниот object не е сменет.
// console.log(game);


// // Со spread додади „FIFA 26“ во нов array.
// const newArr = [...games, "FIFA 26"]
// console.log(newArr);

// const games = [
//     "Minecraft",
//     "GTA V"
// ];

// console.log("games", games);
// console.log("...games" ...games);

// const updatedGames = [
//     ...games,
//     "Counter-Strike 2"
// ];

// console.log("update games", updatedGames);
// console.log("original games", games);

// const updatedGames = games;

// updatedGames.push("Counter-Strike 2");
// console.log("update games", updatedGames);
// console.log("original games", games);

// const student = {
//     name: "Ana",
//     address: { opshtina: { city: "Skopje", opshtina: "Karposh" }, street: "Kliment Ohridski" }
// };

// const deepCopy = {
//     ...student,
//     address: {
//         ...student.address,
//         city: "Ohrid"
//     }
// }

// console.log("student", student);
// console.log("deepCopy", deepCopy);

// function sum(...values) {
//     let total = 0;
//     // values.forEach( n => total += n);
//     values.forEach( n => total = total + n);
//     return total;
// }
// console.log(sum(10, 20, 30)); // 60

// function double(number) {
//     return number * 2;
// }

const double = (number) => {
    return number * 2;
};

const doubleShort = number => number * 2;

// console.log(double(2));
// console.log(doubleShort(2));

// const makeStudent = name => ({
//     name: name;
//     active: true
// });

// console.log(makeStudent("Stefan"));