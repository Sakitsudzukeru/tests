//TODO: Принцип ООП заключается в том, чтобы составлять систему из объектов, решающих простые задачи,
//которые вместе составляют сложную программу. Объект состоит из приватных изменяемых состояний и функций (методов),
//которые работают с этими состояниями. У объектов есть определение себя (self, this) и поведение,
//наследуемое от чертежа, т.е. класса (классовое наследование) или других объектов (прототипное наследование).

//Наследование — способ сказать, что эти объекты похожи на другие за исключением некоторых деталей.
//Наследование позволяет ускорить разработку за счёт повторного использования кода.

//При помощи ключевого слова class мы создаём класс Person.
// class Person {
//   //Значения свойств задаются в конструкторе.
//   constructor(firstName, lastName) {
//     //Cвойства firstName и lastName хранятся в this.
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   // Доступ к ним осуществляется в методе getFullName().
//   getFullName() {
//     return this.firstName + "" + this.lastName;
//   }
// }
//Мы создаём экземпляр класса Person с именем person с помощью ключевого слова new:
// let person = new Person("Dan", "Nedan");
// person.getFullName();
// person.firstName;
// person.lastName;
//Объекты, созданные с помощью ключевого слова new, изменяемы. Другими словами,
//изменения в классе повлияют на все объекты, являющиеся экземплярами этого класса,
//а также на дочерние классы, которые его расширяют (extends).

//Для расширения класса мы можем создать другой класс. Расширим класс Person с помощью класса User. User — это Person с почтой и паролем:
//Ключевое слово extends используется в  объявлении класса или в  выражениях класса для создания дочернего класса.
// class User extends Person {
//   constructor(firstName, lastName, email, password) {
//     super(firstName, lastName); //Ключевое слово super используется для доступа и вызова функций родителя объекта
//     this.email = email;
//     this.password = password;
//   }
//   getEmail() {
//     return this.email;
//   }

//   getPassword() {
//     return this.password;
//   }
// }

// мы создали класс User, расширяющий возможности Person путём добавления свойств email и password и функций доступа к ним.
//В функции App() ниже мы создаём объект нового класса user:
// function App() {
//   let user = new User("Dan", "Nedan", "dan.com", "1111");
//   user.getFullName();
//   user.getEmail;
//   user.getPassword;
//   user.firstName;
//   user.lastName;
//   user.email;
//   user.password;
// }

//Классовое наследование построено на создании связей через зависимости.
// На основе базовых классов (или суперклассов) создаются производные классы.
//Классовое наследование хорошо подходит для небольших и простых приложений,
//которые редко меняются и у которых не более одного уровня наследования
//(неглубокие деревья наследования позволяют избежать проблемы хрупкого базового класса)
//или совершенно разные сценарии использования. Однако по мере расширения иерархии такое наследование со временем будет невозможно поддерживать.

//TODO: Прототипное наследование
//В прототипном наследовании классы не используются совсем. Вместо этого объекты создаются из других объектов.
//Мы начинаем с обобщённого объекта — прототипа. Прототип можно использовать для создания других объектов путём его клонирования
// или расширять его разными функциями.

//TODO: Предположим, что мы хотим расширить прототип Array новым методом partition(),
//который делит массив на два новых в зависимости от предиката.
//Например, [1,2,3,4,5,6] становится [[1,2,3], [4,5,6]], если предикат — «меньше либо равно 3». Вот как это можно реализовать
// Array.prototype.partition = function (pred) {
//   let passed = [];
//   let failed = [];
//   for (let i = 0; i < this.length; i++) {
//     if (pred(this[i])) {
//       passed.push(this[i]);
//     } else {
//       failed.push(this[i]);
//     }
//   }
//   return [passed, failed];
// };

// console.log([1, 2, 3, 4, 5, 6].partition((e) => e <= 3));
//[1,2,3,4,5,6] называется литералом. Литерал — один из способов создания объекта.

//Фабричная функция — это функция, которая принимает несколько аргументов и возвращает новый объект,
//состоящий из этих аргументов. В JavaScript любая функция может возвращать объект.
//Если она делает это без ключевого слова new, то её можно назвать фабричной. Такие функции всегда были привлекательны,
//так как они дают возможность легко создавать новые объекты, не вникая в сложности классов и ключевого слова new.
// [1, 2, 3, 4, 5];
// Array(1, 2, 3, 4, 5);
// let arr = Object.create(Array.prototype);
// console.log(arr.push(1));
// console.log(arr.push(2));

// arr.hello = () => "hello";
// console.log(arr.partition((e) => e < 3));
// console.log(arr.hello());
// // let foo = [1, 2, 3];
// // console.log(foo.hello());
// Array.prototype.bye = () => "bye";
// console.log(arr.bye());
// // console.log(foo.bye());

//Cоздадим Person и User с помощью прототипного наследования

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.prototype.getFullName = function () {
  return "User Name:" + this.firstName + " " + this.lastName;
};

let person = new Person("Dan", "Nedan");
console.log(person);
console.log(person.getFullName());

//Для User нам всего лишь нужно расширить класс Person:

function User(firstName, lastName, email, password) {
  //Метод call()вызывает функцию с заданным this значением и аргументами, предоставленными индивидуально.
  //Позволяет назначать call()функцию/метод, принадлежащий одному объекту, и вызывать его для другого объекта.

  Person.call(this, firstName, lastName);
  this.email = email;
  this.password = password;
}
User.prototype = Object.create(Person.prototype);
User.prototype.setEmail = function (email) {
  this.email = email;
};
User.prototype.getEmail = function () {
  return this.email;
};
let user = new User("", "", "", "iLuvES6");
user.setEmail("dan@abramov.com");
console.log(user);
