import React from 'react'
import ProductForm from '../../component/ProductForm'
// import Back from '../../component/Back'
import { createProduct } from '../../api/api'

export default function CreateProduct(props) {

    const save = async (user) => {
        let result = await createProduct(user)
        props.history.push('/product')
      }

      return (
        <div>
          {/* <Back url="/product" history={props.history}/> */}
          <h1>Create Product</h1>
          <hr/>
          <ProductForm  check="Create" save={save}/>
        </div>
      )
}
