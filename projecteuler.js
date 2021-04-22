function multiplesOf3and5(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 5 === 0 || i % 3 === 0) sum += i;
  }
  return sum;
}

// console.log(multiplesOf3and5(1000));

function fiboEvenSum(n) {
  const lastTwo = [1, 2];
  let counter = 3;
  let sum = 2;
  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    if (nextFib % 2 === 0 && nextFib <= n) {
      sum += nextFib;
    }
    counter++;
  }
  return sum;
}

// console.log(fiboEvenSum(10));

function largestPrimeFactor(number) {
  // If the number is even, only even prime number is two
  if (number % 2 === 0) {
    return 2;
  }

  let i = 3;
  const primeNums = [];

  while (number !== 1) {
    if (number % i === 0) {
      number /= i;
      primeNums.push(i);
    } else {
      i += 2;
    }
  }
  return primeNums[primeNums.length - 1];
}

console.log(largestPrimeFactor(9));
