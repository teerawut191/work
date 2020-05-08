import React from "react";
import { register } from "../../api/api";
import RegisterForm from "../../component/RegisterForm";

export default function Register(props) {

  const save = async (user) => {
    let result = await register(user)
    props.history.push('/login')
    // console.log(save);
    
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>สมัครสมาชิก</h1>
      <div style={{ textAlign: "center" }}>
        <img
          src={process.env.PUBLIC_URL + "assets/images/logo2.jpg"}
          style={{ width: "200px", height: "200px"}}
        ></img>
      </div>
    <RegisterForm save={save} />
    </div>
  );
}