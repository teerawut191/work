import React from 'react'
import CreateForm from '../../component/CreateForm'
import Back from '../../component/Back'
import { createUser } from '../../api/api'

export default function Create(props) {
    

  const save = async (user) => {
    let result = await createUser(user)
    props.history.push('/home')
  }
  return (
    <div>
      <Back url="/home" history={props.history}/>
      <h1>Create User</h1>
      <hr/>
      <CreateForm check="Create" save={save}/>
    </div>
  )
}