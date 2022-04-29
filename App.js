const log = console.log;
//Задача 1
let s = prompt("Ваше имя?");
log(`Задача 1: ${s} `);

//Задача 2
let num = "12345";
let numres = num[0] * num[1] * num[2] * num[3] * num[4];
log(`Задача 2: ${numres}`);

//Задача 3
let a = ["Hello", "world", "!"];
log(`Задача 3: ${a[0]},${a[1]} ${a[2]}`);

//Задача 4
let arr = [2, 5, 3, 9];
let res;
res = arr[0] * arr[1] + arr[2] * arr[3];
log(`Задача 4: ${res}`);

//Задача 5
let obj = { a: 1, b: 2, c: 3 };
log(`Задача 5: ${obj.b} `);

//Задача 6
let objs = {
  Коля: "1000",
  Петя: "500",
  Вася: "200",
};
log(`Задача 6: Зп Коли ${objs.Коля} и Васи ${objs.Вася} `);

//Задача 7
let c = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
log(`Задача 7: ${c[1][0]} `);

//Задача 8
let ob = {
  js: ["JQuery", "abdhhhd"],
  php: "hello",
  css: "style",
};
log(`Задача 8: ${ob.js[0]}`);

// Задача 9
let days = {
  ru: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница"],
  en: ["Monday", "Tuesday", "Wendnesday", "Thursday", "Friday"],
  nm: [1, 2, 3, 4, 5],
};
log(`Задача 9: ${days.ru[0]}, ${days.en[2]}`);

//Задача 10
let d = 4;
if (d > 0 && d < 5) {
  log(`Задача 10: Верно`);
} else {
  log(`Задача 10: Не верно`);
}

//Задача 11
let b = 3;
switch (b) {
  case 1:
    log(`Задача 11: Зима`);
    break;
  case 2:
    log(`Задача 11: Весна`);
    break;
  case 3:
    log(`Задача 11: Лето`);
    break;
  case 4:
    log(`Задача 11: Осень`);
    break;
  default:
    log(`Задача 11: Значение не верно`);
}

//Задача 12
let month = 5;
if (month <= 3) {
  log(`Задача 12: Весна`);
}
if (month > 3 && month < 6) {
  log(`Задача 12: Лето`);
}
if (month > 6 && month < 9) {
  log(`Задача 12: Осень`);
}
if (month > 9 && month <= 12) {
  log(`Задача 12: Зима`);
}

//Задача 13
var obj1 = {
  Минск: "Беларусь",
  Москва: "Россия",
  Киев: "Украина",
};

for (var key in obj1) {
  log(`Задача 13: ${key} - это ${obj1[key]}.`);
}

//Задача 14
let ob1 = {
  g: "зеленый",
  r: "красный",
  b: "голубой",
};
for (let k in ob1) {
  log(`Задача 14: ${k}- это ${ob1[k]}`);
}

//Задача 15
let mass = [2, 5, 9, 15, 0, 4];
for (let i = 0; i < mass.length; i++) {
  if (mass[i] > 3 && mass[i] < 10) {
    log(`Задача 15: ${mass[i]}`);
  }
}

//Задача 16
let v = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11];
let re = "";
for (let c = 0; c < v.length; c++) {
  re += v[c] + "-";
}
log(`Задача 16: -${re}`);

//Задача 17
let arm = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

for (let ii = 0; ii < arm.length; ii++) {
  if (ii == 5 || ii == 6) {
    console.group(`Задача 17: ${arm[ii]}`);
    console.groupEnd();
  } else {
    log(`Задача 17: ${arm[ii]}`);
  }
}

//Задача 18
let n = 1000;

for (nu = 0; n >= 50; nu++, n /= 2);
log(`Задача 18: Итераций=${nu} Остаток=${n}`);

//Задача 19
let dat = "2025-12-31";
let da = dat.split("-");
log(`Задача 19: ${da[2]}.${da[1]}.${da[0]}`);

//Задача 20
let mas = ["Я", "учу", "javascript", "!"];
log(`Задача 20: ${mas.join("+")}`);

//Задача 21
let a1 = [1, 2, 3];
let b1 = [4, 5, 6];
let c1 = a1.concat(b1);
log(`Задача 21: ${c1}`);

//Задача 22
log(`Задача 22: ${a1.reverse()}`);

//Задача 23
a1.push("4", "5", "6");
log(`Задача 23: ${a1}`);

//Задача 24
b1.unshift("1", "2", "3");
log(`Задача 24: ${b1}`);

//Задача 25
let k = ["js", "ccs", "jq"];
let elem = k.shift();
let ele = k.pop();
log(`Задача 25: ${elem} - первый элемент массива`);
log(`Задача 25: ${ele} - последний элемент массива`);

//Задача 26
let m = [1, 2, 3, 4, 5];
let mm = m.slice(0, 3);
log(`Задача 26: ${mm}`);

//Задача 27
let n1 = {
  j: "test",
  q: "hello",
  ss: "world",
};
log(`Задача 27: ${Object.keys(n1)}`);

//Задача 28
j = "hello";
log(`Задача 28: ${j[0].toUpperCase() + j.substr(1)}`);

//Задача 29
str = "http://testic.com";
if (str.substr(0, 7)) {
  log(`Задача 29: строка начинается на ${str.substr(0, 7)}`);
} else {
  log(`Задача 29: ошибочка вышла :с`);
}

//Задача 30
function kubic(kk = 5) {
  return kk * kk;
}
log(`Задача 30: ${kubic()}`);

//Задача 31
let l = 56;
function pp() {
  if (l > 0) {
    return log(`Задача 31: true`);
  } else {
    return log(`Задача 31: false`);
  }
}
pp();

//Задача 32
let re1 = "";
for (let c1 = 0; c1 < 5; c1++) {
  log(`Задача 32: ${(re1 += "x")}`);
}

//Задача 33
let q = [];
for (w = 0; w < 10; w++) {
  q.push("x");
  log(`Задача 33: ${q}`);
}

//Задача 34
let q1 = [];
for (w1 = 0; w1 < 10; w1++) {
  q1.push(w1);
  log(`Задача 34: ${q1}`);
}

//Задача 35
let y = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
sum = 0;
for (let y1 = 0; y1 < y.length; y1++) {
  sum += y[y1];
  if (sum > 10) {
    break;
  }
  let t = y1 + 1;
  log(`Задача 35: ${t}`);
}

//Задача 36
let mmas = [[1, 2, 3], [4, 5], [6]];
let msum = 0;
for (let u = 0; u < mmas.length; u++) {
  for (let o = 0; o < mmas[u].length; o++) {
    msum += mmas[u][o];
  }
}
log(`Задача 36: ${msum}`);

//Задача 37
let r = [
  [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ],
];
let rsum = 0;
for (let i1 = 0; i1 < r.length; i1++) {
  for (let j1 = 0; j1 < r[i1].length; j1++) {
    for (let u1 = 0; u1 < r[i1][j1].length; u1++) {
      rsum += r[i1][j1][u1];
    }
  }
}
log(`Задача 37: ${rsum}`);

//Задача 38
let isnum = 7;
function isNumberlnRange() {
  if (isnum > 0 && isnum < 10) {
    log(`Задача 38: true`);
  } else {
    log(`Задача 38: false`);
  }
}
isNumberlnRange();

//Задача 39
let ismass = [1, 4, 9, 11, 35, 8, 34];
let isnewmass = [];

function isMassRange() {
  for (i = 0; i < ismass.length; i++) {
    if (ismass[i] > 0 && ismass[i] < 10) {
      isnewmass = ismass[i];

      log(`Задача 39: ${isnewmass}`);
    }
  }
}
isMassRange();

//Задача 40
function ucfirst(st) {
  let ar = st.split();
  let newar = [];
  for (i = 0; i < ar.length; i++) {
    newar.push(ar[i][0].toUpperCase() + ar[i].slice(1));
  }
  return newar.join("");
}
log(`Задача 40: ${ucfirst("text is text")}`);

//Задача 41
function isLast(ts) {
  let ra = ts.split("_");
  let newra = [];
  let newts = " ";
  for (i = 0; i < ra.length; i++) {
    newra.push(ra[i][0].toUpperCase() + ra[i].slice(1));
  }
  newts = ra[0] + newra.join("");
  return newts;
}
log(`Задача 41: ${isLast("var_text_hello")}`);

//Задача 42
