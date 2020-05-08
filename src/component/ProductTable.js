import React from "react";
import { Link } from "react-router-dom";

export default function ProductTable(props) {

  return (
    <div>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">number</th>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Detail</th>
            <th scope="col">Stock</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            props.user.map((item, index) => (
              <tr>
              <th scope="row">{ index + 1 }</th>
              <td>{item.user_id}</td>
              <td>{item.title}</td>
              <td>{item.detail}</td>
              <td>{item.stock}</td>
              <td>{item.price}</td>
              <td>
                <Link to={`/editProduct/${item._id}`}>
                  <span style={{ color: "green" }}>Edit</span>
                </Link>
                |
                <span onClick={() => props.delete(item._id)} style={{ color: "red", cursor: 'pointer' }}>Delete</span>
              </td>
            </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
