import React from 'react'

export default function Title({name,title}) {
    const DispStyle={
     display:'inline'
    }
    return (
        <div>
            <div className="col-xs-10 text-center">
               <h1 style={DispStyle} className="font-weight-bold text-capitalise">{name}</h1>
               <h1 style={DispStyle} className="font-weight-bold text-primary text-capitalise ml-3">{title}</h1>
            </div>
        </div>
    )
}
