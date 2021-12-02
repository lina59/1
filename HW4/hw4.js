/*1. Лестница
У нас есть объект лестница, у нее есть свойство step (ступенька, на которой мы находимся) и методы up(), down(), showStep()
реализуйте такую лестницу.*/

let ladder = {
    step: 0,
    up() {
      this.step++;
    },
    down() {
      this.step--;
    },
    showStep: function() { 
      alert( this.step );
    }
  };

  ladder.down();
  ladder.up();
  ladder.up();
  ladder.down();
  ladder.up();
  ladder.up();
  ladder.up();
  ladder.showStep();



/*2. Калькулятор
Создать функцию-конструктор калькулятор, который создает объект с тремя методами - ввод, умножение и сложение*/
function Calculator() {

    this.read = function() {
      this.a = +prompt('Введите число a ');
      this.b = +prompt('Введите число b');
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.multip = function() {
      return this.a * this.b;
    };
  }
  
  let calculator = new Calculator();
  calculator.read();
  
  alert( 'Сумма =' + calculator.sum() );
  alert('Произведение =' + calculator.multip() );