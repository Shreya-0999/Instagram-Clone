import React from 'react'
import '../Styles/NaviBar.css'
import logo from '../Images/logo.png'
import instagram from '../Images/instagram.png'

function NaviBar() {
    return (
        <div className= 'instaImage'>
            <div className= 'logo'>
                <img src= {logo}/>
            </div>
            <span className="span"/>
            <div className= 'instagram'>
                <img src= {instagram}/>
            </div>
        </div>
    )
}

export default NaviBar
