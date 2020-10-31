import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import users from '../UserData';


export default function Title({name,title}) {
    const DispStyle={
     display:'inline'
    }
    const [price,setPrice]=useState(" ");
 
    // finding the username of user
    let username=' ';
    for(let i=0;i<users.length;i++)
    {
        if(users[i].loggedIn)
        {
            username=users[i].name;
        }
    }
   const usernameStyle={
       display:username==' '?'none':'block'
   }
    const handleChange=(e)=>{
        setPrice(e.target.value);
        console.log(price)
    }
    const url=`/price/${price}`;
    const LinkStyle={
        textDecoration:'none',
        color:'black'
    }
    return (
        <div>
            <div className="col-xs-10 text-center">
               <h1 style={DispStyle} className="font-weight-bold text-capitalise">{name}</h1>
               <h1 style={DispStyle} className="font-weight-bold text-primary text-capitalise ml-3">{title}</h1>
               <br />
               <h2 style={usernameStyle}> Welcome Back {username}</h2>
               <br />
              
               <TextField className="mb-2 mt-2" id="standard-basic" label="Max-Price" value={price} onChange={(e)=>handleChange(e)} />
               <Button variant="contained" color="secondary" className="ml-3 mb-2 mt-3">
                     <Link to={url} style={LinkStyle}>Compare</Link>
              </Button>
            </div>
        </div>
    )
}
