import React from "react";
import * as ImIcons from "react-icons/im";
import * as TbIcons from "react-icons/tb";

export const SidebarData = [
  {
    sectionName: "My Space",
    items: [
      {
        path: "/",
        title: "Me",
        icon: <ImIcons.ImProfile />,
        cName: "navmenu-text",
      },
    ],
  },
  {
    sectionName: "Go in Depth",
    items: [
      {
        path: "/go",
        title: "Introduction",
        icon: <TbIcons.TbBrandGolang />,
        cName: "navmenu-text",
      },
      {
        path: "/go/cancellation-signal",
        title: "Cancellation Signal",
        icon: <TbIcons.TbBrandGolang />,
        cName: "navmenu-text",
      },
      {
        path: "/go/pipelines",
        title: "Pipelines",
        icon: <TbIcons.TbBrandGolang />,
        cName: "navmenu-text",
      },
    ],
  },
];
