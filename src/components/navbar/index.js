import React, { useState } from "react";
import listItemsMenu from './list-items';
import './index.css';

const NavBar = () => {

    const [show, setShow] = useState(false);

    const HandleClick = () => {
        setShow(!show);
    }

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                { listItemsMenu.map(item => (
                    <li className={item.color}>
                        <div>
                            <span className="icon-container">Icon</span>
                            <span className="icon-label">{item.title}</span>
                        </div>
                        <div className="menu-option">
                            <ul>
                                <li>{item.title}</li>
                                { item.options.map(option => (
                                    <li>{option.name}</li>
                                )) }
                            </ul>
                        </div>
                    </li>
                )) }
            </ul>
        </nav>
    )
};

export default NavBar;