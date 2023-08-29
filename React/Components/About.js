import React, { useState } from 'react'

const About = (props) => {

  //useState hook : for data storing
  const [name, setname] = useState('default');

  const test = ()=>{
    console.log(name)
  }

  const changer = (event)=>{
    setname(event.target.value);
  }


  return (
    <div>About {props.user}
        <input type="text" placeholder='enter name' onChange={changer}/>
        <button onClick={test}>Submit</button> 
    </div>
  )
}

export default About