import React from 'react'

export default function EditProfile() {
    return (
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
        <div>
            
        </div>
    )
}
