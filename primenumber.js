/* You will get a numbern (>= 0) and your task is to find the next prime number.
Make sure to optimize your code: there will numbers tested up to about 10^12. */

const nextPrime = (n) => {
  let num = n + 1;

  const primeTest = (prime) => {
    if (prime === 2 || prime === 3)
      return true;
    if (prime <= 1 || prime % 2 === 0 || prime % 3 === 0)
      return false;
    for (let i = 5; i * i <= prime; i += 6)
      if (prime % i === 0 || prime % (i + 2) === 0)
        return false;
    return true;
  };

  while (!primeTest(num)) {
    num++;
  }
  return num;
};

////

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

const nextPrimeRefactor = (n) => isPrime(n + 1) ? n + 1 : nextPrime(n + 1);
