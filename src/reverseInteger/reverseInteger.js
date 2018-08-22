export const reverseInteger = function(x) {
  let reversed = String(x).split('').reverse();
  let firstNum = reversed[0];
  
  while (firstNum === '0') {
    if (firstNum === '0') {
      reversed.splice(0, 1);
      firstNum = reversed[0];
    }
  }

  if (reversed[reversed.length - 1] === '-') {
    reversed.splice(reversed.length - 1, 1);
    reversed = Number(reversed.join('')) * -1;
  } else {
    reversed = Number(reversed.join(''));
  }

  if (reversed <= 2147483647 && reversed >= -2147483647) {
    return reversed;
  } else {
    return 0;
  }
};