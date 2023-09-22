

CALL BACK FUNCTION
------------------

A callback is a function which can be passed as parameter to other function.

💀️ console.log(cubeOfNumber(callBack, 3));

💀️ function cubeOfNumber(callBack, number){
        return callBack(number) * number;
    }

💀️ const callBack = (number) => {
        return number ** 2;
    }


=====================================================================

console.log(cubeOfNumber(squareOfNumber, 3));

function cubeOfNumber(squareOfNumber, number){
    return squareOfNumber(number) * 2;
}

const squareOfNumber = (number) => {
    return number ** 2;
}


====================================
PARENT - CHILD - CALLBACK FUNCTION

Initially
=> ParentComponent - counter = 0
=> ChildComponent = button -> to increment the value in parent

-------------------------------------------
console.log(cubeOfNumbers(callBack, 3))
button onClick={props.onIncrement}



function cubeOfNumbers(callBack, number)
function ChildComponent(props)



function cubeOfNumbers(callBack, number){
    return callBack(number) * number;
}

return (
    <div>
      <h2>Counter Value in Parent: {counter}</h2>
      <ChildComponent onIncrement={handleIncrement} />
    </div>
);



const callBack = (number) => {
    return number ** 2;
}

const [counter, setCounter] = useState(0);
const handleIncrement = () => {
    setCounter(counter + 1);
};
