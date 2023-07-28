"use client";

import React, { useState } from "react";
import './navmenu.css'
import { SidebarData } from './sidebarData'
import { NavmenuItem } from './navmenu-item/navmenu-item'

export function Navmenu() {
    const [activeItem, setActiveItem] = useState(SidebarData[0].items[0].id)
    return (
        <div className='par'>
            <div className={'navmenu'}>
                {SidebarData.map((section, index) => {
                    return (
                        <>
                            <span>{section.sectionName}</span>
                            <ul className="navmenu-item">
                                {section.items.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <NavmenuItem item={item} onClick={() => setActiveItem(item.id)} isActive={item.id === activeItem} />
                                        </li>
                                    )
                                })}
                            </ul>
                        </>
                    )
                })}
            </div>
        </div>
    )
}