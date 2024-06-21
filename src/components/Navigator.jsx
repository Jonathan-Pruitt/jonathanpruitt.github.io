import React from "react";
import { useState } from "react";

function Navigator() {
    const [isDropdown, setIsDropdown] = React.useState(false)
    
    function handleIsDropdown() {
        setIsDropdown(state => !state)
    }//end method

    return (
        <div className="fixed-top">
            <nav className="navbar navbar-expand-lg navbar-light">
            <button className="h-40" type="button" onClick={handleIsDropdown}>
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* isDropdown toggles the rendering of the entire navbar. End of codeblock on closing /di */}
                {isDropdown && <div id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <NavItem toggleDrop={handleIsDropdown} link="#header" title="Home "/>
                        <NavItem toggleDrop={handleIsDropdown} link="#projects" title="Projects"/>
                        <NavItem toggleDrop={handleIsDropdown} link="#experience" title="Experience"/>
                        <NavItem toggleDrop={handleIsDropdown} link="#bio" title="About Me"/>
                        <NavItem toggleDrop={handleIsDropdown} link="#misc" title="Misc"/>
                        <NavItem toggleDrop={handleIsDropdown} link="#contact" title="Contact"/>
                    </ul>
                </div>} {/* CLOSING BRACE FOR 'isDropdown' */}
            </nav>
        </div>
    )
}//end method

function NavItem(props) {
    let link = props.link
    let title = props.title
    let dropToggle = props.toggleDrop

    return (
        <li className="nav-item">
            <a onClick={dropToggle} className="nav-link" href={link}><strong>{title}</strong></a>
        </li>
    )

}//end method

export default Navigator;