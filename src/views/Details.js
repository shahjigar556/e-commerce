import React from 'react'

export default function Details(props) {
    const id=props.match.params.id
    return (
        <div>
            <h3>Hello From Details</h3>
            <h2>{id}</h2>
        </div>
    )
}
