

function fibionannci (n){
  const fib = [0,1]
  for(let i=2;i<n ;i++){
        fib[i]= fib[i-1]+fib[i-2]
  }
  return fib
}

// console.log(fibionannci(5))

function factorial(n){
  let result=1
  for (let i=2 ; i<=n; i++){
    result= result*i
  }
  return result
}

function fac (n){
  if (n==0) return 1
  return fac(n-1)*n
}
// console.log(fac(5))

function isPrime(n){
  if(n <2){
    return false
  }
  for (let i =2; i< n;i++){
    if(n%i==0){
      return false
    }
  }
  return true
}

// console.log(isPrime(5))


function isPowerOfTwo(n){
  if(n<1){
    return false
  }
  while(n>1){
    if(n % 2 !== 0){
      return false
    }
    n = n/2
  }
  return true
}

// console.log(isPowerOfTwo(5))

function isPowerOfTwoBitWise(n){
  if(n<1){
    return false
  }
  return (n&(n-1))===0
}
console.log(isPowerOfTwoBitWise(5))
