import React, {useState} from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Accordion = ({page, links, index}) => {
    const [showInfo, setShowInfo] = useState(false)

    return (<section>
        <p className="sidepage" onClick={() => setShowInfo(!showInfo)} key={index}>
            {page} {showInfo ? <FaChevronUp className="angle"/> : <FaChevronDown className="angle"/>} 
        </p>
        { showInfo && <div className="sidelinks">
            {links.map((link, index) => {
                return <p className="link" key={index}>{link}</p>
            })}
        </div>}
    </section>)
}

export default Accordion