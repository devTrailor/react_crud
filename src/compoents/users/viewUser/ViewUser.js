import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
// styles
import "./styles.scss"

const ViewUser = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    })

    // const redirect = useNavigate()

    const { id } = useParams()

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3002/users/${id}`)
        console.log(result.data);
        setUser(result.data)
    }
    return (
        <div className='user-view'>
            <div className="card" >
                <span><h4>Name:</h4>{user.name}</span>
                <span><h4>Username:</h4>{user.username}</span>
                <span><h4>Email:</h4>{user.email}</span>
            </div>


        </div>
    )
}

export default ViewUser