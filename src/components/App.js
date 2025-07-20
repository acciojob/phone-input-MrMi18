
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [number , setNumber] = useState("")

 const onChangeHandler = (e) => {
  let raw = e.target.value.replace(/\D/g, ""); // Strip non-digits

  if (raw.length > 10) return;

  let formatted = raw;
  if (raw.length > 6) {
    formatted = `(${raw.slice(0, 3)}) ${raw.slice(3, 6)}-${raw.slice(6)}`;
  } else if (raw.length > 3) {
    formatted = `(${raw.slice(0, 3)}) ${raw.slice(3)}`;
  } else if (raw.length > 0) {
    formatted = `(${raw}`;
  }

  setNumber(formatted);
};

  return (
    <div>
      <form> 
        <input type="text" placeholder="(555) 555-5555" value = {number} onChange={(e) => onChangeHandler(e)}/>
        <button {...number.length!==13?"disabled":"" } onClick={() => setNumber("")}>Submit</button>
      </form>
    </div>
  )
}

export default App
