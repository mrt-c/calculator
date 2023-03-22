let a = document.querySelector("#num1");
let b = document.querySelector("#num2");
let c = document.querySelector("#result");
function add() {
  c.value = +a.value + +b.value;
}
function subtract() {
    c.value = +a.value - +b.value;
  }
  function multiply() {
    c.value = +a.value * +b.value;
  }
  function divide() {
    c.value = +a.value / +b.value;
  }
