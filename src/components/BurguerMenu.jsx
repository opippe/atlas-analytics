import React from "react";
import { Link } from "react-router-dom";

function BurguerMenu(props) {
    const [isOpen, setIsOpen] = React.useState(true)

    function burguerOpen() {
        setIsOpen(prevIsOpen => {
            return !prevIsOpen;
        })
    }

    const {links} = props;

    return(
        <div className="burguer">
            <i className="fa-solid fa-bars" onClick={ burguerOpen }></i>
            {!isOpen && <div id="menu-tray">
                {links.map((link, index) => (
                    <Link to={link.url} key={index}>{link.label}</Link>
                ))}
            </div>}
        </div>
    )
}

export default BurguerMenu;