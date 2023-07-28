import { IconContext } from 'react-icons'
import Link from "next/link";
import './navmenu-item.css'

export function NavmenuItem({ item, onClick, isActive = false }: any) {
    return (
        <div className={isActive ? 'navmenu-text navmenu-text-active' : 'navmenu-text'}>
            <IconContext.Provider value={{ color: '#000' }}>
                <Link href={item.path} onClick={onClick} >
                    {item.icon}
                    <span>{item.title}</span>
                </Link>
            </IconContext.Provider>
        </div>
    )
}