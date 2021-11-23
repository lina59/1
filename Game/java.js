var prNum, tempOut;
prNum = Math.floor((Math.random() * 100) +1);
console.log(prNum);
 
 
function f1(){
    var num, out;
 
    num = document.getElementById('mynumber').value;
    out = document.getElementById('out');
 
    if (num == prNum) {
        out.innerHTML = 'Вы угадали';
    }
    else if (num > prNum){
        out.innerHTML = 'Много';
    }
    else {
        out.innerHTML = 'Мало';
    }
 
}

