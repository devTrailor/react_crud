import React from 'react'
import { Routes, Route } from "react-router-dom"


// pages====================================
import About from './pages/about'
import AddUser from './compoents/users/addUser'
import Contact from './pages/contact'
import Home from './pages/home'
import NotFound from './pages/NotFound'
import EditUser from './compoents/users/editUser/EditUser'
import ViewUser from './compoents/users/viewUser/ViewUser'


const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route exact path='/user/add' element={<AddUser />} />
                <Route exact path='/user/edit/:id' element={<EditUser />} />
                <Route exact path='/user/view/:id' element={<ViewUser />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
        </>
    )
}

export default AppRouter