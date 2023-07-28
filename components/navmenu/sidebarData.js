import React from "react";
import * as ImIcons from "react-icons/im"
import * as TbIcons from "react-icons/tb"

export const SidebarData = [
    {
        sectionName: "My Space",
        items: [
            {
                id: 'me',
                title: 'Me',
                path: '/',
                icon: <ImIcons.ImProfile />,
                cName: "navmenu-text"
            }
        ],
    },
    {
        sectionName: "Go in Depth",
        items: [
            {
                id: 'introduction',
                title: 'Introduction',
                path: '/go',
                icon: <TbIcons.TbBrandGolang />,
                cName: "navmenu-text"
            }
        ]
    }
];