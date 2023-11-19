let length;
do {
  length = +prompt("Введіть довжину масиву");
} while (isNaN(length) != false);

let arr = [];
let arrNum = [];
let arrStr = [];
let count = 0;

for (let i = 0; i < length; i++) {
  count++;
  let element = prompt(`Ввведіть ${count}-й елемент масиву з ${length}`);
  arr.push(element);
  if (isNaN(element) == false) {
    element = Number(element);
    arrNum.push(element);
  } else {
    arrStr.push(element);
  }
}

console.log("Створений масив: " + arr);
arr = [...arrNum, ...arrStr];

for (let i = 0; i < arr.length;) {
  (arr[i] > arr[i + 1]) ?
    ([arr[i], arr[i + 1]] = [arr[i + 1], arr[i]],
      i = 0) :
    i++;
}

console.log("Відсортований масив (числа завжди попереду): " + arr);
arr.splice(1, 3);
console.log("Масив після видалення елементів з 2 по 4 включно: " + arr);