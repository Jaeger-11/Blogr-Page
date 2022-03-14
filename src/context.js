import React, {useState, useContext} from "react";
import data from "./data";

const AppContext = React.createContext()

export const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [isSideSubOpen, setIsSideSubOpen] =useState(true);
    const [present, setPresent] = useState({page:'', links:[]});
    const [location, setLocation] = useState({})
 
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }
    const toggleSubmenu = () => {
        setIsSubmenuOpen(!isSubmenuOpen)
    }
    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
    const openSubmenu = (page, coordinates) => {
        const active  = data.find((x) => x.page === page)
        setPresent(active)
        console.log(present, page)
        setLocation(coordinates)
        setIsSubmenuOpen(true)
    }
    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }
    return <AppContext.Provider value={{
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        toggleSidebar,
        toggleSubmenu,
        isSideSubOpen,
        isSidebarOpen,
        isSubmenuOpen,
        present,
        location
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}