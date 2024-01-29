// import { Link } from "react-router-dom"
import Buttons from "./Buttons"
// import Section1 from "./Section1"


const Landing = ({toggle}) => {
  return (
    <>
    <div className=" pt-11  lg:flex  md:flex md:justify-center lg:justify-center sm:justify-center sm:items-center sm:flex-wrap items-center">
        <img src="./image/dices.png" className="lg:w-[640px] md:w-[300px] sm:flex-wrap sm:text-center sm:w-[300px]" alt="" />
        <div>
          <h1 className=" text-center text-5xl  sm:items-center sm:text-center font-extrabold lg:text-[7vw] ">DICE GAME</h1>
          <div  className=" text-center md:text-right lg:text-right md:text-right sm:text-center "> <Buttons onClick={toggle} text="Play Now"/> </div>
        </div>
    </div>
    </>
  )
}

export default Landing