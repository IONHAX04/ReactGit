import React from 'react'

const ReturningFunction = () => {
    const higherOrder = n => {
        const doSomething = m => {
          const doWhatEver = t => {
            return 2 * n + 3 * m + t
          }
          return doWhatEver
        }
        return doSomething
      }
      console.log("Function Return", higherOrder(2)(3)(10))
}

export default ReturningFunction
