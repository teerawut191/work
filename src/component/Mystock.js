import React from 'react'
import { Link } from "react-router-dom";

export default function ProductTable(props) {
  var u_id = localStorage.getItem('Id');
  const tableList = () => {
      if (props.product.data !== undefined) {
        var data = [];
        for (let i = 0; i < props.product.data.length; i++) {
          let item = props.product.data[i];
          // console.log(item.user_id);
          // console.log(u_id);
    
if(item.user_id === u_id ){
              data.push(
                  <tr>
                    <th scope="row">{i + 1}</th>
                    <td>{item.title}</td>
                    <td>{item.detail}</td>
                    <td>{item.stock}</td>
                    <td>{item.price}</td>
                    
                  </tr>
                );

            
}
         
        }
        return data;
      }
    };
    return (

      <div className="container" >
        <table class="table ">
          <thead>
            <tr>
            <th scope="col">No.</th>
            <th scope="col">Title</th>
            <th scope="col">Detail</th>
            <th scope="col">Stock</th>
            <th scope="col">Price</th>
   
      
           
            </tr>
          </thead>
          <tbody>{tableList()}</tbody>
        </table>
      </div>
    );
  }