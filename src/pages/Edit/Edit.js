import React, { useEffect, useState } from "react";
import CreateForm from "../../component/CreateForm";
import Back from "../../component/Back";
import { getAllByIdUser, editUser } from "../../api/api";

export default function Edit(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      let result = await getAllByIdUser(props.match.params.id);
      setUser(result.data);
    };
    fetchApi();
  }, []);

  const edit = async (user) => {
    let edit = await editUser(props.match.params.id, user)
    if (edit.status === "success") {
      props.history.push('/home')
    } else {
      alert(edit.message)
    }
  }

  return (
    <div>
      <Back url="/home" history={props.history} />
      <h1>Edit User</h1>
      <hr />
      { user && <CreateForm check="Edit" user={user} edit={edit} />}
    </div>
  );
}
