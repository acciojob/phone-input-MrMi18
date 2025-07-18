
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [number , setNumber] = useState("")
const onChangeHandler = (e) =>{
  let ch = e.target.value;
  if(isNaN(ch) || number.length>13) return ;
 
    if(number.length===3){
      setNumber("("+number+")"+ch);
    }else  if(number.length===6){
      setNumber(number+"-"+ch);
    }else {
      setNumber(number+ch);
    }
  
}
  return (
    <div>
      <form> 
        <input type="text" placeholder="(555)555-5555)" value = {number} onChange={(e) => onChangeHandler(e)}/>
        <button {...number.length!==13?"disabled":"" } onClick={() => setNumber("")}>Submit</button>
      </form>
    </div>
  )
}

export default App
