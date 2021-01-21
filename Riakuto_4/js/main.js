"use strict";
// {
//   const obj = { name: "Kanae", age: 24 };
//   const { name, age } = obj;
//   console.log(name, age);
// }

// p84
// const response = {
//   data: [
//     {
//       id: 1,
//       name: "Patty Rabbit",
//       email: "patty@maple.town",
//     },
//     {
//       id: 2,
//       name: "Rolley Cocker",
//       email: "rolley@palm.town",
//     },
//     {
//       id: 3,
//       name: "Bobby Bear",
//       email: "bobby@maple.town",
//     },
//   ],
// };

// const { data: users = [] } = response;
// console.log(users);

//[
// {id:1,name:'PattyRabbit',email:'patty@maple.town'},
// {id:2,name:'RolleyCocker',email:'rolley@palm.town'},
// {id:3,name:'BobbyBear',email:'bobby@maple.town'}
//]

// p85 スプレッド構文
// const arr1 = ["A", "B", "C"];
// const arr2 = [...arr1, "D", "E"];
// console.log(arr2);
// // [ 'A', 'B', 'C', 'D', 'E' ]

// const obj1 = { a: 1, b: 2, c: 3, d: 4 };
// const obj2 = { ...obj1, d: 99, e: 5 };
// console.log(obj2);
//{a:1, b:2, c:4, d:99, e:5}

// // p86
// const user = { id: 1, name: "Patty Rabbit", email: "patty@maple.town", age: 8 };
// const { id, ...userWithoutId } = user;
// console.log(id, userWithoutId);
// // 1 { name: 'Patty Rabbit', email: 'patty@maple.town', age: 8 }

// p87
// const original = { a: 1, b: 2, c: 3 };
// const copy = Object.assign({}, original);

// console.log(copy);
//  // { a: 1, b: 2, c: 3 }

// console.log(copy === original);
//  // false → プロパティが同じでもアドレスを共有しない別オブジェクト

// const assigned = Object.assign(original, { c: 10, d: 50 }, { d: 100 });

// console.log(assigned); // { a: 1, b: 2, c: 10, d: 100 }
// console.log(original); // { a: 1, b: 2, c: 10, d: 100 }
// Object.assign が破壊的メソッドであることの例。

// p87
// オブジェクトのコピー用途にスプレッド構文を使う。

// constoriginal = { a: 1, b: 2, c: 3 };
// const copy = { ...original };
// console.log(copy);
//  // { a: 1, b: 2, c: 3 } console.log(copy === original); // false

// const assigned = { ...original, ...{ c: 10, d: 50 }, d: 100 };
// console.log(assigned); // { a: 1, b: 2, c: 10, d: 100 }
// console.log(original); // { a: 1, b: 2, c: 3 }

// p88
// プロパティの値がさらに配列やオブジェクトだった場合に、
// それらの値までコピーしてくれるものではないことの例。

// const patty = {
//   name: "Patty Rabbit",
//   email: "patty@maple.town",
//   address: { town: "Maple Town" },
// };

// const rolley = { ...patty, name: "Rolley Cocker" };
// rolley.email = "rolley@palm.town";
// rolley.address.town = "Palm Town";
// console.log(patty);
//{
// name:'PattyRabbit',
// email:'patty@maple.town',
// address:{town:'PalmTown'}
//}

// 裏技
// const patty = {
//   name: "Patty Rabbit",
//   email: "patty@maple.town",
//   address: { town: "Maple Town" },
// };
// const rolley = JSON.parse(JSON.stringify(patty));
// rolley.name = "Rolley Cocker";
// rolley.email = "rolley@palm.town";
// rolley.address.town = "Palm Town";
// console.log(patty);
// console.log(rolley);
//{
// name:'PattyRabbit',
// email:'patty@maple.town',
// address:{town:'MapleTown'} //}

// p91
const users = [
  {
    name: "Patty Rabbit",
    address: {
      town: "Maple Town",
    },
  },
  {
    name: "Rolley Cocker",
    address: {},
  },
  null,
];

for (u of users) {
  const user = u ?? { name: "(Somebody)" };
  const town = user?.address?.town ?? "(Somewhere)";
  console.log(`${user.name} lives in ${town}`);
}
