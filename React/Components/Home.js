import React from 'react'
import About from './About'

const Home = (props) => {

  // var a = "hello";
  // console.log(a);
  // var users = [{name:"rahul",age:25,image:"https://picsum.photos/id/237/200/300"},{name:"virat",age:26,image:"https://picsum.photos/id/235/200/300"},{name:"rohit",age:15,image:"https://picsum.photos/id/241/200/300"}];
  // var arr = ["name1", "name2", "name3"];
  var a = 6;
  
  return (
    <>
      {a == 5 ? console.log("hello") : console.log("false")}
       <div>Home</div>
       <About user={props.username} />
        {/* {users.map((i,a)=>(
            <div>
              <b>{a}</b>
              <i>{i.name}</i>
               <i>{i.age}</i>
               <img src={i.image} alt="image" />
            </div>
        ))} */}
    </>
  )
}

export default Home