import React from 'react'

const Child1 = ({selectedOption, setSelectedOption}) => {
  return (
    <div style={{backgroundColor:'orange', height:'80px', width:'40vw', fontSize:'40px', display:'flex-col'}}>
        Child Component 1
        <button onClick={()=>{
            setSelectedOption('Option 1')
        }}>Option1</button>
        </div>
  )
}

export default Child1