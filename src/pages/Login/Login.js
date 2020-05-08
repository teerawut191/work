import React, { useState } from "react";
import LoginForm from '../../component/LoginForm'
import { loginTest } from "../../api/api";
export default function Login(props) {

 
  const login = async (user,id) => {
    let result = await loginTest(user,)
    if(result.status === "success"){
      localStorage.setItem('Id', result.data._id);
     props.history.push('/home')
     console.log(result.data._id);
     
    }
    
else{
alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
console.log(result.status );

}

// if (condition) {
  
// } else {
  
// }

    // console.log(loginTest(user));
    
    // {
    //   res.data.status === "success"?props.history.push('/create'):props.history.push('/register')
    // }

    // console.log(result.id);
    // props.history.push('/create')
    // console.log();
    
    
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "Black" }}>ล็อคอิน</h1>
      <div style={{ textAlign: "center" }}>
        <img
          src={process.env.PUBLIC_URL + "assets/images/logo1.png"}
          style={{ width: "200px", height: "200px"}}
        ></img>
      </div>
        <LoginForm check="Login" login={login} />

    </div>
  );
}