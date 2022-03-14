import React, { useRef } from "react";
import logo from './images/logo.svg';
import data from './data';
import { FaChevronUp, FaChevronDown} from 'react-icons/fa'
import { useGlobalContext } from "./context";
import close from './images/icon-close.svg'
import bars from './images/icon-hamburger.svg'

const Navbar = () => {
    const {toggleSidebar, isSubmenuOpen, isSidebarOpen, openSubmenu, closeSubmenu} = useGlobalContext();
    const removeSubmenu = (event) => {
        if(!event.target.classList.contains('nav-page')){
          closeSubmenu()
        }
    }
    const displaySubmenu = (event) => {
        const page = event.target.textContent;
        const info = event.target.getBoundingClientRect();
        const center = (info.right + info.left)/2
        const bottom = info.bottom + 20
        console.log(page, bottom, center)
        openSubmenu(page, {center, bottom})
    }

    return (
        <nav className="nav-box" onMouseHover ={removeSubmenu}>
            <img src={logo} alt='logo' className="logo"/>
            <section className="nav-section show">
                <ul className="nav-ul">
                    {data.map((pages, index) => {
                        const {page, links} = pages;
                        return <li className ='nav-page'  onClick={displaySubmenu} key={index}>
                       {page}{isSubmenuOpen ? <FaChevronUp className="angle"/> : <FaChevronDown className="angle"/>} 
                    </li>
                    })}
                </ul>
                
                <div className="nav-div">
                    <p>Login</p>
                    <button className="nav-btn">Sign Up</button>
                </div>
            </section>
            <div onClick={toggleSidebar}>
                {isSidebarOpen ? <img src={close} className='nav-icon'/>:<img src={bars} className="nav-icon"/>}
            </div>
            
        </nav>
    )
}

export default Navbar;