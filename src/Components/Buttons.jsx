

const Buttons = ({text, onClick}) => {
  return (
    <button onClick={onClick} className=" w-[220px] text-white bg-black px-[18px] rounded font-bold py-[10px]">{text}</button>
  )
}

export default Buttons