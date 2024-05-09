import { useState } from "react";


const Content = () => {

const [increase, setIncrease] = useState(0);




// increase
const clickIt1 = () =>
    {
        setIncrease((increaseIt) => increaseIt + 1);
        console.log(increase, "increase number");
    }


const clickIt2 = () =>
    {
        setIncrease((increaseIt) => increaseIt - 1);
        console.log(increase, "decrease number");
        if (increase < 1)
            {
                return setIncrease(0);
            }
           
    }

const reset = () => 
    {
        setIncrease(0);
    }


  return (


    <>
    <p>Counter  {increase}</p>
    <div><button onClick={clickIt1}>Increase</button></div> 
    <div> <button onClick={clickIt2}>Decrease</button></div>
    <div> <button onClick={reset}>Reset</button></div>
    
    
    
    
    
    </>




  );
};

export default Content