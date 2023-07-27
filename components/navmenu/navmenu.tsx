"use client";

import React, { useState } from "react";
import './navmenu.css'
import {SidebarData} from './sidebarData'
import {NavmenuItem} from './navmenu-item/navmenu-item'

export function Navmenu(){
    return (
        <div className='par'>
            <div className={'navmenu'}>
                <ul className="navmenu-item">
                {SidebarData.map((item, index)=>{
                    return (
                        <li key={index} className={item.cName}>
                            <NavmenuItem item={item}/>
                        </li>
                    )
                })}
                </ul>
            </div>
        </div>
    )
}