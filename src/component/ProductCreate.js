import React from 'react'

export default function ProductCreate(props) {
return (
<div>
<button className="btn btn-success btn-block" onClick={() => { props.nextCreateProduct() } }>Create Product</button>
</div>
)
}