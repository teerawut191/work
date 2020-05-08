import React, {useState} from "react";


export default function RegisterForm(props) {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [salary, setSalary] = useState("");

    const save = async (e) => {
        e.preventDefault();
        let user = {
          username: username,
          password: password,
          name: name,
          age: age,
          salary: salary
        };
        props.save(user);
      };

      const register = async (e) => {
        e.preventDefault();
        let user = {
            username: username,
            password: password,
            name: name,
            age: age,
            salary: salary
        };
        props.register(user);
      };

  return (
    <div>
      <form onSubmit={props.check === "Register" ? register : save}>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" onChange={(e) => setUserName(e.target.value)} className="form-control" id="username" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input type="number" onChange={(e) => setAge(e.target.value)} className="form-control" id="age" />
        </div>
        <div className="form-group">
          <label>Salary:</label>
          <input type="number" onChange={(e) => setSalary(e.target.value)} className="form-control" id="salary" />
        </div>
        <button
          type="submit"
          className="btn  float-right"
          style={{ backgroundColor: "#00b3b3", color: "black" }} >Submit

        </button>
      </form>
      <h1></h1>
    </div>
  );
}