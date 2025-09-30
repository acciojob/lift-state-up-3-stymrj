
import React, { useState } from "react";
import './../styles/App.css';
import Child1 from "./ChildComponent1";
import Child2 from "./ChildComponent2";

const App = () => {
  const[selectedOption, setSelectedOption] = useState("")
  
  return (
    <div class='parent' style={{backgroundColor : 'green', paddingLeft:'20px',paddingTop:'20px', height:'100vh', margin:'0px'}}>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <Child1 selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
        <Child2 selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
        <h1>Selected Option: {selectedOption}</h1>
    </div>
  )
}

export default App
