import React from "react";
import '../scss/Header.scss'
import logo from '../assets/Logo RGB/Logotipo Branco.png'
import NavigationMenu from "./NavigationMenu";
import BurguerMenu from "./BurguerMenu";

function Header() {
    const links = [
        { label: 'HOME', url: '/'},
        { label: 'SOBRE', url: '/sobre'},
        { label: 'SERVIÇOS', url: '/servicos'},
        { label: 'EQUIPE', url: '/equipe'},
        { label: 'CONTATO', url: '/contato'},
    ]

    return(
        <header id="header">
            <div className="logo">
                <img src={logo}/>
            </div>
            <NavigationMenu links={links} />
            <BurguerMenu links={links} />
        </header>
    )
}

export default Header;