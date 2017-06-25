window.onload = function () {
    var calc = new Calculator();
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    document.getElementById('Add').onclick = function () {
        alert(calc.add(parseInt(num1.value), parseInt(num2.value)));
    };
    document.getElementById('Subtract').onclick = function () {
        alert(calc.subtract(parseInt(num1.value), parseInt(num2.value)));
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