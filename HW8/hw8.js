/*1. Переведите текст вида border-left-width в borderLeftWidth
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».*/

/*function camelize(str) {
    return str
      .split('-')  
      .map(
        function(word, index) {
          if (index == 0) {
            return word;
          } else {
            return word[0].toUpperCase() + word.slice(1);
          }
        }
      )
    
      .join('');
     
  }

  alert(camelize('my-short-string'));

/*2. Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
Функция должна возвращать новый массив и не изменять исходный.

function filterRange(arr, a, b) {
   return arr.filter(item => (a <= item && item <= b));
}

let arr = [2, 3, 6, 1, 7];

let newarr = filterRange(arr, 1, 3);

console.log( newarr ); 

console.log( arr );

/*3. Отсортировать массив чисел в порядке убывания.

 let arr = [2, 3, 6, 1, 7];

arr.sort(function (a, b) {
    return b - a;
});
console.log(arr);

/*4.Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
let users = [            
  {name: "Миша",age: 16},
  {name: "Вася",age: 20},
  {name: "Рома",age: 23},
  {name: "Маша",age: 30},
   
];
users.sort(( a, b ) => a.age - b.age);
console.log( users );


/*5. Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
Многократные прогоны через shuffle могут привести к разным последовательностям элементов. 
*/
/*function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  let arr = [1, 2, 3];
  shuffle(arr);
  console.log(arr);

/*6. Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.*/
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
let arr = [            
    {name: "Миша",age: 16},
    {name: "Вася",age: 30},
    {name: "Рома",age: 29},
]

console.log( getAverageAge(arr) );

//7. Пусть arr – массив строк.
//Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы 
function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
  let strings = ["Апельсин", "Виктория", "Яблоко", "Вишня","Апельсин",
  "Виктория","Яблоко","Виктория","Апельсин",
  ];
  
  console.log( unique(strings) );