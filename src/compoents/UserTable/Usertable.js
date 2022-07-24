import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from "axios"
// styles
import "./style.scss"

const Usertable = (props) => {
  const [user, setUser] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const result = await axios.get("http://localhost:3002/users")
    console.log(result);
    setUser(result.data.reverse())

  }


  const delList = async (id) => {
     await axios.delete(`http://localhost:3002/users/${id}`)
    loadData()
  }
  console.log(user);
  return (
    <div className='userTable'>
      <div className='tableData'>
        <Table striped bordered>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              user.map((user, index) => {
                return (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <div className="btns">
                        <Link to={"/user/view/" + user.id} className="btn view">View</Link>
                        <Link to={"/user/edit/" + user.id} className="btn edit">Edit</Link>
                        <Link to="" className="btn delete" onClick={() => delList(user.id)}>Delete</Link>
                      </div>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Usertable