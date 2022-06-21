const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let length = 12;

let pass1 = document.getElementById("box1");
let pass2 = document.getElementById("box2");
let randomPassword = "";
let randomPassword2 = "";
let customlength = document.getElementById("quantity");
let value = 0;
let toggle = document.getElementById("check").checked;
let count = 0;
let randomChar = "";
if (toggle === true) {
  randomChar = Math.floor(Math.random() * characters.length);
}
if (toggle === false) {
  randomChar = Math.floor(Math.random() * (characters.length - 29));
}
function submit() {
  value = customlength.value;
}
function generatepassword() {
  randomPassword = "";
  if (toggle === true) {
    let randomChar = Math.floor(Math.random() * characters.length);
  } else {
    let randomChar = Math.floor(Math.random() * (characters.length - 29));
  }
  if (value > 0 && toggle === false) {
    for (let i = 0; i < value; i++) {
      randomPassword += characters[randomChar];
      randomChar = Math.floor(Math.random() * (characters.length - 29));
    }
  } else if (value > 0 && toggle === true) {
    for (let i = 0; i < value; i++) {
      randomPassword += characters[randomChar];
      randomChar = Math.floor(Math.random() * characters.length);
    }
  } else if (value === 0 && toggle === true) {
    for (let i = 0; i < length; i++) {
      randomPassword += characters[randomChar];
      randomChar = Math.floor(Math.random() * characters.length);
    }
  } else if (value === 0 && toggle === false) {
    for (let i = 0; i < length; i++) {
      randomPassword += characters[randomChar];
      randomChar = Math.floor(Math.random() * (characters.length - 29));
    }
  } else {
    for (let i = 0; i < length; i++) {
      randomPassword += characters[randomChar];
      randomChar = Math.floor(Math.random() * (characters.length - 29));
    }
  }
  pass1.textContent = randomPassword;
  randomPassword2 = "";
  if (toggle === true) {
    randomChar = Math.floor(Math.random() * characters.length);
  } else {
    randomChar = Math.floor(Math.random() * (characters.length - 29));
  }
  if (value > 0 && toggle === true) {
    for (let i = 0; i < value; i++) {
      randomPassword2 += characters[randomChar];
      randomChar = Math.floor(Math.random() * characters.length);
    }
  } else if (value > 0 && toggle === false) {
    for (let i = 0; i < value; i++) {
      randomPassword2 += characters[randomChar];
      randomChar = Math.floor(Math.random() * (characters.length - 29));
    }
  } else if (value === 0 && toggle === false) {
    for (let i = 0; i < length; i++) {
      randomPassword2 += characters[randomChar];
      randomChar = Math.floor(Math.random() * (characters.length - 29));
    }
  } else if (value === 0 && toggle === true) {
    for (let i = 0; i < length; i++) {
      randomPassword2 += characters[randomChar];
      randomChar = Math.floor(Math.random() * characters.length);
    }
  } else {
    for (let i = 0; i < length; i++) {
      randomPassword2 += characters[randomChar];
      randomChar = Math.floor(Math.random() * characters.length);
    }
  }
  pass2.textContent = randomPassword2;
}
function copy1() {
  navigator.clipboard.writeText(pass1.textContent);
  alert("You copied: " + randomPassword);
}
function copy2() {
  navigator.clipboard.writeText(pass2.textContent);
  alert("You copied: " + randomPassword2);
}
function check() {
  count += 1;
  if (count % 2 === 1) {
    toggle = false;
  } else {
    toggle = true;
  }
}
