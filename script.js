function getValues() {
  let number1 = parseFloat(document.getElementById("num1").value);
  let number2 = parseFloat(document.getElementById("num2").value);
  return { number1, number2 };
}

function addNumbers() {
  let values = getValues();
  let sum = values.number1 + values.number2;
  document.getElementById("result").innerText = "Result: " + sum;
}

function subtractNumbers() {
  let values = getValues();
  let difference = values.number1 - values.number2;
  document.getElementById("result").innerText = "Result: " + difference;
}

function multiplyNumbers() {
  let values = getValues();
  let product = values.number1 * values.number2;
  document.getElementById("result").innerText = "Result: " + product;
}

function divideNumbers() {
  let values = getValues();

  if (values.number2 === 0) {
    document.getElementById("result").innerText = "Result: Cannot divide by zero";
  } else {
    let quotient = values.number1 / values.number2;
    document.getElementById("result").innerText = "Result: " + quotient;
  }
}