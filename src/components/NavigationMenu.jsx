import React from "react";
import { Link } from "react-router-dom";

function NavigationMenu(props) {
    const {links} = props;

    return (
        <nav className="links">
            {links.map((link, index) => (
                <Link to={link.url} key={index}>{link.label}</Link>
            ))}
        </nav>
    )
}

export default NavigationMenu;