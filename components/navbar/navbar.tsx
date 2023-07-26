"use client";

import React, { useState } from "react";
import './navbar.css'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {SidebarData} from './sidebarData'
import {IconContext} from 'react-icons'

export function Navbar(){
    const [sidebar, setSidebar] = useState(false)
    const showSideBar = () => setSidebar(!sidebar)

    return (
        <>
            <IconContext.Provider value={{color:'#FFF'}}>
                <div className={sidebar? 'nav-menu active': 'nav-menu'}>
                    <ul className="nav-menu-items">
                        <li className='navbar-toggle' >
                            <div className="menu-bars" onClick={showSideBar}>
                            <FaIcons.FaBars className ={sidebar? "navbar-toggle-icon": "navbar-toggle-icon navbar-toggle-icon-closed"}/>
                            </div>
                        </li>
                    {SidebarData.map((item, index)=>{
                        return (
                            <li key={index} className={item.cName}>
                                <a>
                                    {item.icon}
                                    {sidebar?<span>{item.title}</span>:null}
                                </a>
                            </li>
                        )
                    })}
                    </ul>

                </div>
            </IconContext.Provider>
        </>
    )
}