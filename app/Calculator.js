window.onload = function () {
    var calc = new Calculator();
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var result = document.getElementById('result');
    document.getElementById('Add').onclick = function () {
        result.innerHTML = calc.add(parseInt(num1.value), parseInt(num2.value)).toString();
    };
    document.getElementById('Subtract').onclick = function () {
        result.innerHTML = calc.subtract(parseInt(num1.value), parseInt(num2.value)).toString();
    };
};
var Calculator = (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.subtract = function (x, y) {
        return x - y;
    };
    return Calculator;
}());
var cal = new Calculator();
//# sourceMappingURL=Calculator.js.map