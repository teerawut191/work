import React, { useState, useEffect } from 'react'

export default function CreateForm(props) {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [salary, setSalary] = useState(0)

  const save = async (e) => {
    e.preventDefault()
    let user = {
      name: name,
      age: age,
      salary: salary
    }
  props.save(user)
  }

  const edit = async (e) => {
    e.preventDefault()
    let user = {
      name: name,
      age: age,
      salary: salary
    }
  props.edit(user)
  }

  useEffect(() => {
    if (props.check === "Edit") {
      setName(props.user.name)
      setAge(props.user.age)
      setSalary(props.user.salary)
    }
  }, [])

  return (
    <div>
      <form onSubmit={props.check === "Edit" ? edit : save}>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} class="form-control" id="name" aria-describedby="emailHelp"/>
        </div>
        <div class="form-group">
          <label for="age">Age</label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} class="form-control" id="age"/>
        </div>
        <div class="form-group">
          <label for="salary">Salary</label>
          <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} class="form-control" id="salary"/>
        </div>
        <button type="submit" class="btn btn-success btn-block">Create</button>
      </form>
    </div>
  )
}