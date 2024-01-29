import { useState } from "react"
import Landing from "./Components/Landing"
import Section1 from "./Components/Section1";


function App() {

  const [isGameStarted , setIsGameStarted] = useState(false);

  const toggleGamePlay = ()=>{
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
       {isGameStarted ? <Section1/>:<Landing toggle = {toggleGamePlay}/>}
    </>
  )
}

export default App
