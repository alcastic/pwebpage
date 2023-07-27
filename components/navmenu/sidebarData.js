import React from "react";
import * as ImIcons from "react-icons/im"
import * as TfiIcons from "react-icons/tfi"
import * as BiIcons from "react-icons/bi"
import * as TbIcons from "react-icons/tb"


export const SidebarData = [
    {
        title:'Me',
        path:'/',
        icon: <ImIcons.ImProfile />,
        cName: "navmenu-text"
    },
    {
        title:'Go in Depth',
        path:'/go',
        icon: <TbIcons.TbBrandGolang/>,
        cName: "navmenu-text"
    }
]