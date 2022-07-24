import React from 'react'
import Navbar from '../header/Navbar'

const LayoutPrimary = ({ children }) => {
    return (
        <div className='app-layout'>
            <Navbar />
            {children}
        </div>
    )
}

export default LayoutPrimary