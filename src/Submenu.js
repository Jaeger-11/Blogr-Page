import React, {useRef, useEffect} from "react";
import {useGlobalContext} from './context'
// import data from './data';

const Submenu = () => {
    const {isSubmenuOpen, present:{page, links}, location} = useGlobalContext()
    const subbox = useRef(null)

    useEffect(() => {
        const submenu = subbox.current
        const {center, bottom} = location
        submenu.style.left =`${center}px`
        submenu.style.top = `${bottom}px`
    }, [ location])
    return( 
    <aside className={`submenu ${isSubmenuOpen && 'subshow'}`} ref={subbox} >
        {links.map((link) => {
            return <p>
                {link}
            </p>
        })}
    </aside>
    )
}

export default Submenu;