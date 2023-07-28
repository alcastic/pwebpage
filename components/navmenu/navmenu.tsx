"use client";

import React, { useState } from "react";
import './navmenu.css'
import { SidebarData } from './sidebarData'
import { NavmenuItem } from './navmenu-item/navmenu-item'

export function Navmenu() {
    const [activeItem, setActiveItem] = useState(SidebarData[0].items[0].path)
    return (
        <div className={'navmenu'}>
            <div className="vspacing" />
            {SidebarData.map((section, index) => {
                return (
                    <>
                        <span>{section.sectionName}</span>
                        <ul className="navmenu-item">
                            {section.items.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <NavmenuItem item={item} onClick={() => setActiveItem(item.path)} isActive={item.path === activeItem} />
                                    </li>
                                )
                            })}
                        </ul>
                    </>
                )
            })}
        </div>
    )
}