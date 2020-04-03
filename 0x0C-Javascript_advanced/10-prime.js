const countPrimeNumbers = () => {
  const primes = []
  for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) primes.push(i);
  }
  console.log(primes.length);
}
  
const isPrime = (num) => {
  for (let i = 2; i < num / 2; i++) (num % i === 0) ? false : true;
}
  
const t0 = performance.now();
for (let i = 0; i < 100; i++) countPrimeNumbers();
const t1 = performance.now();
console.log('Execution time of calculating prime numbers 100 times was ' + (t1 - t0) + ' milliseconds.');