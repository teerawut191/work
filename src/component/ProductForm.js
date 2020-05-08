import React, { useState, useEffect } from 'react'

export default function ProductForm(props) {
    var u_id = localStorage.getItem('Id');
  const [user_id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [stock, setStock] = useState(0)
  const [price, setPrice] = useState(0)
 

  const save = async (e) => {
    e.preventDefault()
    let user = {
    user_id: u_id ,
 	title: title,
 	detail: detail,
 	stock: stock,
 	price: price
    }
  props.save(user)
  }

  const edit = async (e) => {
    e.preventDefault()
    let user = {
        user_id: localStorage.getItem('Id'),
        title: title,
        detail: detail,
        stock: stock,
        price: price
       }
  props.edit(user)
  }

  useEffect(() => {
    if (props.check === "EditProduct") {
      setId(props.user.u_id)
      setTitle(props.user.title)
      setDetail(props.user.detail)
      setStock(props.user.stock)
      setPrice (props.user.price)
    }
  }, [])

  return (
    <div>
        {/* {u_id} */}
      <form onSubmit={props.check === "EditProduct" ? edit : save}>
        <div class="form-group">
          <label for="user_id">ID</label>
          <input type="text" value={u_id} onChange={(e) => setId(e.target.value)} class="form-control" id="user_id" aria-describedby="emailHelp"/>
        </div>
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} class="form-control" id="title"/>
        </div>
        <div class="form-group">
          <label for="detail">Detail</label>
          <input type="text" value={detail} onChange={(e) => setDetail(e.target.value)} class="form-control" id="detail"/>
        </div>
        <div class="form-group">
          <label for="stock">Stock</label>
          <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} class="form-control" id="stock"/>
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} class="form-control" id="price"/>
        </div>
        <button type="submit" class="btn btn-success btn-block">Create Product</button>
      </form>
    </div>
  )
}
