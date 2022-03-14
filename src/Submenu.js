import React, {useRef, useEffect} from "react";
import {useGlobalContext} from './context'
// import data from './data';

const Submenu = () => {
    const {isSubmenuOpen, present:{page, links}} = useGlobalContext()
    console.log(page)
    return( 
    <aside className={`submenu ${isSubmenuOpen && 'subshow'}`}>
        {/* {data.map((pages) => {
            const {page,links} = pages;
            return <div>
                {links.map((link) => {
                return <p>
                    {link}
                </p>
            })}
            </div>
        })} */}
                {links.map((link) => {
                return <p>
                    {link}
                </p>
            })}
    </aside>
    )
}

export default Submenu;