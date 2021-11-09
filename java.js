//При помощи цикла for вывести четные числа от 2 до 10
for(let i = 2; i<11;i++){    
    if(i%2==0){
        console.log(i);
    }
}

 

/*switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}*/

if(browser=='Edge'){
    alert( "You've got the Edge!" );
} else if (browser=='Chrome'|| browser=='Firefox'||browser=='Safari'||browser=='Opera'){
    alert( 'Okay we support these browsers too' );
} else{
    alert( 'We hope that this page looks ok!' ); 
}

/*const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}*/

const number = +prompt('Введите число между 0 и 3', '');
switch(number){
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3 ');
        break;
}


//Бесконечный цикл - повторять ввод, пока он неверен.
let num;


   
 while (num <= 15 && num){
  num = prompt("Введите число больше 15?", 0);

 }

//Какое последнее значение выведет этот код и почему?
let i = 0;

while(i){
    console.log(i--);
}
// Ничего не выведет, т.к. когда i будет равно 0, условие станет ложным, и цикл остановится, а i изначально =0.

//Почему выводы отличаются?

let i = 0;
while (++i < 5) console.log( i );

// вывод от 1 до 4

let i = 0;
while (i++ < 5) alert( i );

/* вывод от 1 до 5
т.к операция ++i сначала увеличит i, а потом уже произойдёт сравнение. а i++ наоборот */
 





 

