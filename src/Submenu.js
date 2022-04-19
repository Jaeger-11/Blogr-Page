import React, {useRef, useEffect, useState} from "react";
import {useGlobalContext} from './context'
import { FaChevronUp, FaChevronDown} from 'react-icons/fa'
// import data from './data';

const Submenu = ({page, links}) => {
    // const {isSubmenuOpen, present:{page, links}, location} = useGlobalContext()
    const {closeSubmenu, isSubmenuOpen} = useGlobalContext();
    const subbox = useRef()
    const [location, setLocation] = useState({})
    const [showInfo, setShowInfo] = useState()
    // useEffect(() => {
    //     const submenu = subbox.current
    //     const {center, bottom} = location
    //     submenu.style.left =`${center}px`
    //     submenu.style.top = `${bottom}px`
    // }, [ location])
    // className={`submenu ${isSubmenuOpen && 'subshow'}`}

    

    const displayMenu = (event) => {
        const info = event.target.getBoundingClientRect();
        const center = (info.right + info.left)/2
        const bottom = info.bottom
        setLocation({center, bottom})
        console.log(location)
        setShowInfo(!showInfo)
    }

    return(<>
        <li onMouseOver={displayMenu} className ='nav-page notclose' >{page}  
        {showInfo ? <FaChevronUp className="angle"/> : <FaChevronDown className="angle"/>}
        </li>
        {showInfo && 
        <aside onMouseLeave={() => setShowInfo(false)}
        className={`submenu ${showInfo && 'subshow'}`} 
        ref={subbox} 
        style = {{top:`${location.bottom}px`, left:`${location.center}px`}}
        >
        {links.map((link) => {
            return <p >
                {link}
            </p>
        })}
    </aside>}
    </>
    )
}

export default Submenu;