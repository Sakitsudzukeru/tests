let log = console.log;
function HelloWorld() {
  log(`Работа с DOM, задача 1: Hello world!`);
}

function AddText() {
  let input = document.getElementById("input");
  input.value = "Работа с DOM, задача 2: test@email.ru";
}

function MessangeText() {
  let input2 = document.getElementById("input2");
  log(`Работа с DOM, задача 3: Вы ввели текст '${input2.value}'`);
}

function ChangeText() {
  let input3 = document.getElementById("input3");
  let input4 = document.getElementById("input4");
  let inputValue1 = input3.value;
  let inputValue2 = input4.value;
  input3.value = inputValue2;
  input4.value = inputValue1;
}

function DisableTextTrue() {
  let input5 = document.getElementById("input5");

  input5.disabled = true;
}

function DisableTextFalse() {
  let input5 = document.getElementById("input5");

  input5.disabled = false;
}
