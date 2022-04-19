import React, {useState} from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Accordion = ({page, links, index}) => {
    const [showInfo, setShowInfo] = useState(false)

    return (<section>
        <p className={`sidepage ${showInfo && 'active'}`} onClick={() => setShowInfo(!showInfo)} key={index}>
            {page} {showInfo ? <FaChevronUp className="sideangle"/> : <FaChevronDown className="sideangle"/>} 
        </p>
        { showInfo && <div className="sidelinks">
            {links.map((link, index) => {
                return <p className="link" key={index}>{link}</p>
            })}
        </div>}
    </section>)
}

export default Accordion