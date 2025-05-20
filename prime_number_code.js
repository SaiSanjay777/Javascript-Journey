for (let n = 2; n <= 50; n++) {  // Step 1: check every number from 2 to 50
  let isPrime = true;             // Assume number is prime initially

  for (let i = 2; i < n; i++) {  // Step 2: try dividing by every number less than n
    if (n % i === 0) {           // Step 3: if divisible, not prime
      isPrime = false;
      break;                     // No need to check more, break early
    }
  }

  if (isPrime) {                 // Step 4: if still true, print the prime number
    console.log(n);
  }
}
