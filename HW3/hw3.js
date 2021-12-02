/*1. Напишите код, выполнив задание из каждого пункта отдельной строкой:
    Создайте пустой объект user.
    Добавьте свойство name со значением John.
    Добавьте свойство surname со значением Smith.
    Измените значение свойства name на Pete.
    Удалите свойство name из объекта.*/

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//2. Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

let obj={}
function isEmpty(obj) {
    for (let key in obj) {
       return false;
    }
    return true;
  }

//3. Объекты, объявленные через const - действительно ли они неизменяемые?
/*Можно, будет сохронена ссылка на объект, а свойства можно будет изменять.
/*4. У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.*/
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum);
