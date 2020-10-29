import React from 'react'
import Paper from '@material-ui/core/Grid';
import {useContext,useState,useEffect} from 'react';

const users=[
    {
        name:'JigarShah',
        password:'jigar123'
    },
    {
        name:'RoshniShah',
        password:'Roshni'
    },
    {
        name:'Tatsat',
        password:'Tatsat123'
    }
]

export default function Login() {
  const [name,setName]=useState("");
  const [password,setPassword]=useState("")
  const handleNameChange=(e)=>{
     setName(e.target.value);
  }
  const handlePassword=(e)=>{
     setPassword(e.target.value);
  }

  const handleSubmit=()=>{
      console.log('submit button clicked')
      const user=users.filter(a=>a.name==name && a.password==password)
      if(user.length==0)
      {
          alert('Enter valid credentials');
      }
      if (user.length===1)
      {
          alert(`Welcome ${name}`)
      }
  }
    return (
        <div>
            <h3>Login Page in Development</h3>
           
                <input type="text" value={name} onChange={(e)=>handleNameChange(e)}/>
                <input type="password" value={password} onChange={(e)=>handlePassword(e)} />
                <button onClick={handleSubmit}>Submit</button>
         

        </div>
    )
}
