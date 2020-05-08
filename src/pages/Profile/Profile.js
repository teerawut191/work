import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllByIdUser } from '../../api/api';


export default function Profile(props) {
  const [userProfile, setUserProfile] = useState([]);

  var id = localStorage.getItem('Id');
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    await getAllByIdUser(id).then((res) => {
      if (res.status === "success") {
        setUserProfile(res.data);
      }
    });
  };


    return (

        
        <form>
            <div>
                <br>
                </br>
            </div>

        <h1 style={{ textAlign: "center", color: "Black" }}>My Profile</h1>
        <div style={{ textAlign: "center" }}>
        <img src={process.env.PUBLIC_URL + "assets/images/java.jpg"}style={{ width: "200px", height: "200px"}}></img>

      </div>
        <div className="form-group">
          <label>Username:</label>
          <input type="text"className="form-control" id="exampleFormControlInput1" value={userProfile.username} ></input>
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password"className="form-control" id="exampleFormControlInput1" value={userProfile.password} ></input>
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input type=""className="form-control" id="exampleFormControlInput1" value={userProfile.name} ></input>
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input type="text"className="form-control" id="exampleFormControlInput1" value={userProfile.age} ></input>
        </div>
        <div className="form-group">
          <label>Salary:</label>
          <input type="text"className="form-control" id="exampleFormControlInput1" value={userProfile.salary} ></input>
        </div>
        <div className="form-group">
        </div>
      </form>
    )
}
