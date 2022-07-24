import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const AddUser = () => {
  const [user, setuser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  })
  const redirect = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()

    if (user.name === "" && user.username === "" && user.email === "") {

      alert("***Fill all the fields!***")
    } else {
      await axios.post("http://localhost:3002/users", user)
      // console.log(user);
      redirect("/")
    }
  }
  // change inputs
  const inputChange = (e) => {

    setuser({ ...user, [e.target.name]: e.target.value })

  }
  return (
    <div className='add-user'>
      <h2>AddUser</h2>
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
          Add User
        </Button>
      </Form>
    </div>
  )
}

export default AddUser