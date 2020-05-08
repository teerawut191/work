import React, { useState} from "react";


export default function LoginForm(props) {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    
    const save = async (e) => {
        e.preventDefault();
        let user = {
          username: username,
          password: password
        };
        props.save(user);
      };
      const login = async (e) => {

        e.preventDefault();
        let user = {
          username: username,
          password: password
        }
        props.login(user);
      }

      
      
      

  return (
    <div>
      <form onSubmit={props.check === "Login" ? login : save}>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" onChange={(e) => setUserName(e.target.value)} className="form-control" id="username" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" />
        </div>
        <button
          type="submit"
          className="btn  float-right"
          style={{ backgroundColor: "#00b3b3", color: "black" }} >Login
        </button>
      </form>
    </div>
  );
}