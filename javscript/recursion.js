function recursiveFib(n){
  if(n<2) return n

  return recursiveFib(n-1) + recursiveFib(n-2)
}

console.log(recursiveFib(6))


function recursiveFac(n){
  if(n==0) return 1

return recursiveFac(n-1)* n
}

console.log(recursiveFac(5))

