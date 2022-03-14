import React, {useState} from "react";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import data from './data.js';
import Accordion from "./accordion.js";
import { useGlobalContext } from "./context.js";


const Sidebar = () => {
    const {isSidebarOpen} = useGlobalContext()
    const bgfill = {
        background: 'linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%))'
    }

    return(
        <aside className={` sidebar-wrapper ${isSidebarOpen && 'show'}`}>
        <div className="sidebar" >
            {data.map((category, index) => {
                return <Accordion key={index} {...category}/>
            })}
            <hr/>
            <p className="login">Login</p>
            <button className="sidebtn" style={bgfill}>Sign Up</button>
        </div>
        </aside>
    )
}

export default Sidebar;