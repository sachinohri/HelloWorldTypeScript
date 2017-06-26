window.onload = function () {
    var calc = new Calculator();
    var num1  = <HTMLInputElement>document.getElementById('num1');
    var num2 = <HTMLInputElement>document.getElementById('num2');
    var result = <HTMLSpanElement>document.getElementById('result');
    document.getElementById('Add').onclick = function() {
        result.innerHTML = calc.add(parseInt(num1.value),parseInt(num2.value)).toString();
    };
    document.getElementById('Subtract').onclick = function() {
        result.innerHTML = calc.subtract(parseInt(num1.value),parseInt(num2.value)).toString();
    };
};


class Calculator{

    add(x:number, y:number):number{
        if(isNaN(x) || isNaN(y)){ return 0;}
        return x + y;
    }

    subtract(x:number, y:number):number{
        if(isNaN(x) || isNaN(y)){ return 0;}
        return x - y;
    }

    multiple(x:number, y:number):number{
        if(isNaN(x) || isNaN(y)){ return 0;}
        return x * y;
    }
}

