import React, { useEffect, useState } from 'react'
import { Form, Button } from "react-bootstrap"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"


const EditUser = () => {
  const [user, setuser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  })

  const { id } = useParams()

  // alert(id);
  const redirect = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()

    await axios.put(`http://localhost:3002/users/${id}`, user)
    console.log(user);
    redirect(`/`)
  }

  useEffect(() => {
    loadUser()
  }, [])
  // Load user

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3002/users/${id}`)
    console.log(result);
    setuser(result.data)
  }
  // change inputs
  const inputChange = (e) => {

    setuser({ ...user, [e.target.name]: e.target.value })

  }
  return (
    <div className='add-user'>
      <h2>Edit User</h2>
      <Form className='add-user-form' onSubmit={submitHandler}  >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" name="name" value={user.name} onChange={inputChange} placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" value={user.username} onChange={inputChange} placeholder="Enter your username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" name="email" value={user.email} onChange={inputChange} placeholder="Enter your email" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Edit User
        </Button>
      </Form>
    </div>
  )
}

export default EditUser