import React, { useState, useEffect } from 'react'
import ProductTable from '../../component/ProductTable'
import ProductTitle from '../../component/ProductTitle'
import ProductCreate from '../../component/ProductCreate'
import Mystock from '../../component/Mystock'
import { getAllProduct, deleteProduct,getAllProductId } from '../../api/api'

export default function Product(props) {
  const [user, setUser] = useState([])

  const fetchUser = async () => {
    let result = await getAllProduct()
    console.log(result)
    setUser(result.data)
  }

   const fetchUser1 = async () => {
    let result = await getAllProductId()
    console.log(result)
    setUser(result.data)
  }

  useEffect(() => {
      fetchUser()
      fetchUser1()
  }, [])

  const nextCreateProduct = () => {
    props.history.push('/createProduct')
  }

  const removeProduct = async (id) => {
   let check = window.confirm("คุณต้องการลบหรือไม่ ?")
    if(check === true) {
      let result = await deleteProduct(id)
      console.log(result)
      if (result.status === "success") {
        fetchUser()
      }
    }
  }

  return (
    <div>
      <ProductCreate nextCreateProduct={nextCreateProduct}/>
      <ProductTitle/>
      <ProductTable user={user} delete={removeProduct}/>
    </div>
  )
}
