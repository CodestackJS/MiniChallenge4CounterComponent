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
    <div className="box">
    <p className="text"> Counter:  {increase}</p>
    <div><button className="btn btn-primary" onClick={clickIt1}>Increase</button></div> 
    <br/>
    <div> <button className="btn btn-success" onClick={clickIt2}>Decrease</button></div>
    <br/>
    <div> <button className="btn btn-outline-secondary" onClick={reset}>Reset</button></div>

    </div>
    </>

  );
};

export default Content