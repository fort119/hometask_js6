// first loop
console.log("Первый цикл");
let num1 = "";

for (let i = 20; i <= 30; i++) {
  num1 += i + " ";
  num1 += i + 0.5 + " ";
}

console.log(num1);

// second loop
console.log("Второй цикл");
let dol = "";

for (let i = 10; i <= 100; i++) {
  if (i % 10 === 0) {
    dol = 27 * i;
    console.log(`при курсе 27 ${i} долларов будут стоить: ${dol}`);
  }
}

//third loop
console.log("Третий цикл");
let numN = prompt("Введите целое число (для 3го цикла)");

for (let i = 1; i <= 100; i++) {
  if (numN > i ** 2) {
    console.log(i);
  }
}

//fourth loop
console.log("Четвертый цикл");
let num2 = prompt("Введите целое число (для 4го цикла)");

function checkIfPrime(num2) {
  if (num2 > 1) {
    for (let i = 2; i < num2; i++) {
      if (num2 % i === 0) {
        return `${num2} является составным числом`;
      }
    }
    return `${num2} является простым числом`;
  } else {
    return "Введите число больше 1";
  }
}

console.log(checkIfPrime(num2));

//fifth loop
console.log("Пятый цикл");
let num3 = prompt("Введите число (для 5го цикла)");

while (num3 % 3 == 0) {
  num3 /= 3;
}
if (num3 == 1) {
  console.log("число можно получить");
} else {
  console.log("число нельзя получить");
}

