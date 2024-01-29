import { useState } from "react";



const Navsec = ({num , setError, error, setNum , score ,setScore}) => {
    const arrNumber = [1,2,3,4,5,6];
    const numberSelectHandle = (value)=>{
      setNum(value);
      setError("");
    }
    
    

  return (
    <div className=" flex justify-between items-center mx-14 py-8">
        <div className=" flex flex-col items-center">
            <span className=" font-semibold text-5xl">{score}</span>
            <h2 className="font-semibold text-2xl">Total Score</h2>
        </div>
        <div className="flex flex-col gap-4">
          <p className=" text-[red]">{error}</p>
            <div className="lg:flex lg:flow-row md:flex-row md:flex flex flex-col gap-5 ">
            {arrNumber.map((value, i) => (
        <div
          key={i}
          onClick={()=>numberSelectHandle(value)}  // Update the state with the clicked value
          className={`lg:px-4 text-center py-1  md:px-4 sm:px-4 sm:py-2 rounded-md cursor-pointer font-semibold lg:py-2 md:py-2 border border-black ${value === num ? 'text-white bg-black' : 'text-black'}`}
        >
          {value}
        </div>
      ))}
            </div>

            <div>
                <h2 className="font-bold text-lg text-right">Select Number</h2>
            </div>

        </div>
    </div>
  )
}

export default Navsec