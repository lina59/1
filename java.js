//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }




/*Напишите функцию pow(x,n), которая возвращает x 
в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.*/
function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
   