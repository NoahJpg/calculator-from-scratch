// Business Logic - we got this!
function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function mult(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

// User Interface Logic
function handleCalculation(event) {
  event.preventDefault();
  const number1 = parseInt(document.querySelector("input#num1").value);
  const number2 = parseInt(document.querySelector("input#num2").value);
  const operator = document.querySelector("input[name='operator']:checked").value;
  console.log("number1 " + number1)//leave in for checking in Devtool
  console.log("number2 " + number2)//leave in for checking in Devtool
  console.log("operator:", operator);//leave in for checking in Devtool

  let result;
    if (operator === "add") {
      result = add (number1, number2); // don't forget to use commas instead of math symbols
    } else if (operator === "subtract") {
      result = subtract (number1, number2);
    } else if (operator === "mult") {
      result = mult (number1, number2);
    } else if (operator === "divide") {
      result = divide (number1, number2);
    } 

  document.getElementById("output").innerText = (result);
}

window.addEventListener ("load", function() {
  const form = document.getElementById("calculator");//match id from calculator at top of HTML
  form.addEventListener("submit", handleCalculation);
});