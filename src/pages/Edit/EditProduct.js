import React, { useEffect, useState } from "react";
// import CreateForm from "../../component/CreateForm";
import ProductForm from "../../component/ProductForm";
// import Back from "../../component/Back";
import { getAllProductId,getAllProduct, editProduct } from "../../api/api";

export default function EditProduct(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      let result = await getAllProduct(props.match.params.id);
      setUser(result.data);
    };
    fetchApi();
  }, []);

  const edit = async (user) => {
    let edit = await editProduct(props.match.params.id, user)
    if (edit.status === "success") {
      props.history.push('/product')
    } else {
      alert(edit.message)
    }
  }

  return (
    <div>
      {/* <Back url="/product" history={props.history} /> */}
      <h1>Edit Product</h1>
      <hr />
      { user && <ProductForm check="EditProduct" user={user} edit={edit} />}
      
    </div>
  );
}
