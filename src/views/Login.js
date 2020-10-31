import React from 'react'
import Paper from '@material-ui/core/Grid';
import {useContext,useState,useEffect} from 'react';
import fakeAuth from '../Auth';
import {Redirect} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import users from '../UserData';





export default function Login(props) {
  const [name,setName]=useState("");
  const [password,setPassword]=useState("")
  const [RedirectToReferrer,setRedirectToReferrer]=useState(false);

  const handleNameChange=(e)=>{
     setName(e.target.value);
  }
  const handlePassword=(e)=>{
     setPassword(e.target.value);
  }

  const handleSubmit=()=>{
      console.log('submit button clicked')
      const user=users.filter(a=>a.name==name && a.password==password)
      console.log(user)
         
      if(user.length==0)// no valid credentials
      {
          alert('Enter valid credentials');
      }
      if (user.length===1) //user must be authenticated
      {
          alert(`Welcome ${name}`)
          fakeAuth.login(()=>{
              setRedirectToReferrer(true);
          })
        // changing the state of loggedIn from True to false
          const id=user[0].id;
          for(let i=0;i<users.length;i++)
          {
              if(users[i].id==id)
              {
                  users[i].loggedIn=true;
              }
          }
          console.log(users)

      }
  }

  

  if(RedirectToReferrer===true)
  {
      return(
          <Redirect to='/'></Redirect>
      )
  }
    return (
        <div>
            <h3 className="text-center text-success">Login Page</h3>
           
                <input  className="mb-3 ml-3" type="text" value={name} onChange={(e)=>handleNameChange(e)}/>
                <br />
                <input  className="mb-1 ml-3" type="password" value={password} onChange={(e)=>handlePassword(e)} />
               <br></br>
                <Button className="mt-3 ml-3" variant="contained" onClick={handleSubmit} color="secondary">
                       Login
                </Button>
         

        </div>
    )
}


