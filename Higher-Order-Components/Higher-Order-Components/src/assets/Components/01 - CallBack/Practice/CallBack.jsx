const CallBack = () => {
        const callBack = (number) => {
            return number ** 2;
        }
        function cubeOfNumbers(callBack, number) {
            return callBack(number) * number;
        }

        console.log("CallBack function", cubeOfNumbers(callBack, 3));

}

export default CallBack;



