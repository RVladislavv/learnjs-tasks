function sum(a) {
  let currentSum = a;

  function addNumber(b) {
    currentSum += b;
    return addNumber;
  }

  addNumber.toString = function () {
    return currentSum;
  }

  return addNumber;
}