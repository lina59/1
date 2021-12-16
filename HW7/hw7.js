/*1. Что выведет следующий код?
let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // ?

4

2. Напишите функцию sumInput(), которая:

    Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
    Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
    Подсчитывает и возвращает сумму элементов массива.

P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
*/
function sumInput(){
    let numbers=[];
    
    while (true){
        let value=prompt ("Введите число");
        if (value === "" || value === null|| !isFinite(value)) break;
        numbers.push(+value);    
    }
    let sum=0;
    for(let number of numbers) {
        sum += number;
      }
      return sum;
    }
    
    alert( sumInput() ); 









/*3. У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.*/


/*let users = [
    { name: "Вика"},
    { name: "Оля"},
    { name: "Дима"},
    { name: "Вася" },
  ];
   

let names = users.map(item => item.name);

console.log( names );*/
 