import React from 'react'

export default function Product(props) {
    console.log("In products")
    return (
        <div>
            <h3>{props.product.id}</h3>
        </div>
    )
}
