import {IconContext} from 'react-icons'
import Link from "next/link";
import './navmenu-item.css'

export function NavmenuItem({item}: any){
    return(
        <IconContext.Provider value={{color:'#000'}}>
            <Link href={item.path}>
                {item.icon}
                <span>{item.title}</span>
            </Link>
        </IconContext.Provider>
    )
}