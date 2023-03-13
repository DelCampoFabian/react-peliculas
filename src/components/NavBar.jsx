import React, { useState } from 'react'
import logoPersonal from "../assets/images/logoPersonal.png"
import {CgProfile} from "react-icons/cg"
import {IoSettingsOutline} from "react-icons/io5"
import {MdLogout} from "react-icons/md"
import Formulario from './Formulario'



const NavBar = () => {
    const [profile, setProfile] = useState(false)
    function handleProfile (){
        setProfile(!profile)
    }

    return (
        <nav className='nav'>
            <div className='nav__logo'>
                <img src={logoPersonal} alt="Logo Del Campo Fabián" />
            </div>
            <Formulario/>
           
            <div className='nav__profile'>
                <i onClick={handleProfile}><CgProfile/></i>
            </div>
        </nav>
    )
}

export default NavBar