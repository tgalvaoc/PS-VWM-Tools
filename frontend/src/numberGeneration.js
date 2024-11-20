function setBool() {
  let flag = Math.random();
  return flag < 0.6 ? true : false;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function genNumber() {
  const n = getRandomInt(10000, 99999);
  const arrayOfDigits = Array.from(String(n), Number);
  const change = getRandomInt(0, 4);

  if (setBool()) {
    arrayOfDigits[change] = getRandomInt(0, 9);
  }

  return String(n).concat(
    "‎ ‎ ‎ ‎ ‎".concat(
      arrayOfDigits.reduce((accum, digit) => accum * 10 + digit, 0)
    )
  );
}
