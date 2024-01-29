
import { useState } from "react"
import Buttons from "./Buttons"
import Navsec from "./Navsec"
import Showrule from "./Showrule"


const Section1 = () => {
  const [score, setScore] = useState(0);
  const [num , setNum] = useState();
  const [roll , setRoll] = useState(2);
  const [error , setError] = useState();

  const generateRoll = (min, max)=> {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const rolDice = ()=>{
    const randomNumber = generateRoll(1,7);
    setRoll((prev) => randomNumber);

    if(!num) {
      setError("You have not any selected number")
      return;}  

    if(num == randomNumber){
      setScore((prev)=> prev + randomNumber)
    }else{
      setScore((prev)=> prev - 2 )
    }

    setNum(undefined);
  }

  const resetData = ()=>{
    setScore(0);
  }


  return (
    <div>
        <Navsec setNum={setNum} num={num} score={score} setError={setError} error={error} setScore={setScore}/>
        <div className="flex flex-col items-center">

            <div onClick={rolDice} className=" cursor-pointer">
              <img src={`./image/dice_${roll}.png`} alt="dices" />
              </div>

            <h2 className=" mb-7 cursor-pointer font-semibold">Click On Dice To Roll</h2>

            <button onClick={resetData} className=" w-[220px] text-black border border-black bg-white px-[18px] rounded font-bold py-[10px] mb-5">Rest Score</button>

            {/* <div><Buttons text="Show Rule"/></div> */}

        </div>
        <Showrule/>
    </div>
  )
}

export default Section1