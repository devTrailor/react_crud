import React from 'react'
import {Button, Form} from 'react-bootstrap';
// styles
import "./styles.scss"

const Contact = () => {
  return (
    <div className='contact-section'>
      <h2 className='pb-5 text-center '>Contact Page</h2>
      <Form className='contact-form'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    </div>
  )
}

export default Contact