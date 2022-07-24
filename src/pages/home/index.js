import React from 'react'
import Usertable from '../../compoents/UserTable/Usertable'
// styles
import "./style.scss"

const Home = () => {


    return (
        <div className='home-page'>
            <h2>Home Page</h2>
            <div className="user-table">
                <Usertable />
            </div>
        </div>
    )
}

export default Home