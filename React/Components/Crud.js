import React, { useState } from 'react'

const Crud = () => {

    const [newName, setnewName] = useState('');
    const [newAge, setnewAge] = useState(0);
    const [person, setperson] = useState([]);
    const [personindex, setpersonindex] = useState(null);

    function handleCreatePerson(){

        const user = {name:newName,age:newAge};
        setperson([...person,user]);
        setnewName('');
        setnewAge('');
    }
    // console.log(person)

    function handleName(event){
        setnewName(event.target.value)
    }
    function handleAge(event){
        setnewAge(event.target.value)
    }

    function handleEditPerson(index){
        // console.log(person[index]);
        setnewName(person[index].name);
        setnewAge(person[index].age);
        setpersonindex(index);
    }

    function handleUpdatePerson(){
        console.log("update");
        console.log(person[personindex]);
        // console.log(newName);
        // console.log(newAge);
        const newdata = [...person];
        newdata[personindex].name = newName;
        newdata[personindex].age = newAge;
        setperson(newdata);
        setpersonindex(null);

    }

    function handleDeletePerson(index){
        // console.log("delete data index",index);
        // var newarr = [];
        // for(var a in person){
        //     if(a == index){
        //         console.log("hello")
        //     }
        //     else{
        //         newarr.push(person[a])
        //     }    
        // }
        // setperson(newarr)
        const newdata = person.filter((i,index1)=>index1!==index); 
        setperson(newdata)
    }

  return (
    <div className='text-center mt-5'>
        <input type="text" placeholder='Enter name' onChange={handleName} value={newName}/>
        <input type="number" placeholder='Enter age' onChange={handleAge} value={newAge}/>
        

        {personindex == null ?  <button className='ml-2' onClick={handleCreatePerson}>Create</button>:
            <button className='ml-2' onClick={handleUpdatePerson}>Update</button>
        }

        <h5>User Details</h5>
        {
            person.map((i,index)=>(
                <div key={index}>
                    <b>{index} </b>
                    <i>{i.name}  </i>
                    <i>{i.age} </i>
                    <button onClick={()=>{handleEditPerson(index)}}>Edit</button> &nbsp;
                    <button onClick={()=> {handleDeletePerson(index)}}>Delete</button>
                </div>
            ))
        }

    </div>
  )
}

export default Crud