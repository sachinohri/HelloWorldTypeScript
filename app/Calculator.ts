window.onload = function () {
    var calc = new Calculator();
    var num1  = <HTMLInputElement>document.getElementById('num1');
    var num2 = <HTMLInputElement>document.getElementById('num2');
    document.getElementById('Add').onclick = function() {
        alert(calc.add(parseInt(num1.value),parseInt(num2.value)));
    };
    document.getElementById('Subtract').onclick = function() {
        alert(calc.subtract(parseInt(num1.value),parseInt(num2.value)));
    };
};


class Calculator{

    add(x:number, y:number):number{
        return x + y;
    }

    subtract(x:number, y:number):number{
        return x - y;
    }
}

let cal = new Calculator();
