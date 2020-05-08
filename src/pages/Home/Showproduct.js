import React, { useState, useEffect } from 'react'

import ProductTable from "../../component/ProductTable"
// import ButtonCreate from "../../components/ButtonCreate"

import Mystock from "../../component/Mystock"
import { getAllProduct, deleteProduct  } from '../../api/api'


export default function ShowProduct(props) {
    const [product, setProduct] = useState([])

    const fetchProduct = async () => {
      let result = await getAllProduct()
     
      setProduct(result)
       console.log(result)
    }
  
    useEffect(() => {
    
      fetchProduct()
      console.log(fetchProduct());
      
  }, [])


    // const nextCreateProduct = () => {
    //     props.history.push('/createProduct')
    //   }

    
      const removeUser = async (id) => {
        let check = window.confirm("คุณต้องการลบหรือไม่ ?")
         if(check === true) {
           let result = await deleteProduct(id)
           console.log(result)
           if (result.status === "success") {
            fetchProduct()
           }
         }
       }
     

    return (
      <div className="container" >
          {/* <ButtonCreate nextCreateProduct={nextCreateProduct}/> */}
          <br></br>
          <h1>My Stock</h1>
          <Mystock  product={product} delete={removeUser}/>
          

          <hr></hr>
          <h1>Product All</h1>
          <ProductTable  product={product}    />

     
    
        </div>
    )
}