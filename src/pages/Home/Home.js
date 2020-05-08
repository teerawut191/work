import React, { useState, useEffect } from 'react'
import HomeTable from '../../component/HomeTable'
import HomeTitle from '../../component/HomeTitle'
import HomeCreateButton from '../../component/HomeCreateButton'
import { getAllUser, deleteUser } from '../../api/api'

export default function Home(props) {
  const [user, setUser] = useState([])

  const fetchUser = async () => {
    let result = await getAllUser()
    console.log(result)
    setUser(result.data)
  }

  useEffect(() => {
      fetchUser()
  }, [])

  const nextCreate = () => {
    props.history.push('/createproduct')
  }

  const removeUser = async (id) => {
   let check = window.confirm("คุณต้องการลบหรือไม่ ?")
    if(check === true) {
      let result = await deleteUser(id)
      console.log(result)
      if (result.status === "success") {
        fetchUser()
      }
    }
  }

  return (
    <div>
      <HomeCreateButton nextCreate={nextCreate}/>
      <HomeTitle/>
      <HomeTable user={user} delete={removeUser}/>
    </div>
  )
}
