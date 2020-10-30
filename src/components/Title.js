import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';


export default function Title({name,title}) {
    const DispStyle={
     display:'inline'
    }
    const [price,setPrice]=useState(" ");


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
               <input type="text" onChange={(e)=>handleChange(e)} placeholder="Enter the maximum price" value={price}></input>

               <Button variant="contained" color="secondary" className="ml-3 mb-2">
                     <Link to={url} style={LinkStyle}>Compare</Link>
              </Button>
            </div>
        </div>
    )
}
