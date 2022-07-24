import React from 'react'
import { NavLink } from "react-router-dom"
// styles
import "./style.scss"
const Navbar = () => {

    const pages = [
        { name: "home", path: "/" },
        { name: "about", path: "/about" },
        { name: "contact", path: "/contact" },
    ]

    return (
        <div className='navbar'>
            <div className='container'>
                <div className='navbar-data'>
                    <div className="brand">
                        <NavLink to="/">CRUD</NavLink>
                    </div>
                    <ul className="lists">
                        {pages.map((list, index) => <li key={index}><NavLink to={list.path}>{list.name}</NavLink></li>)}
                    </ul>
                </div>
                <div className="add-user">
                    <li><NavLink to="/user/add">Add User</NavLink></li>
                </div>
            </div>

        </div>
    )
}

export default Navbar