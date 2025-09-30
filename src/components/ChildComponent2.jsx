import React from 'react'

const ChildComponent2 = ({selectedOption, setSelectedOption}) => {
  return (
    <div style={{backgroundColor:'yellow', height:'80px', width:'40vw', fontSize:'40px'}}>
        Child Component 2
        <button onClick={()=>{
            setSelectedOption('Option 2')
        }}>Option2</button>
        </div>
  
  )
}

export default ChildComponent2