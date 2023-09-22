
HIGHER ORDER FUNCTIONS RETURN FUNCTIONS AS VALUES

higherOrder is a higher-order function that returns another function, which in turn returns yet another function

// Higher order function returning an other function
console.log(higherOrder(2)(3)(10))

const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }
  return doSomething
}




console.log(sumArray(numbers))

const numbers = [1, 2, 3, 4]
​
const sumArray = arr => {
  let sum = 0
  arr.forEach(function(element) {
    sum += element
  })
  return sum
}