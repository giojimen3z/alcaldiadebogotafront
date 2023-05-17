import React from "react";
import listItemsMenu from './list-items';
import './index.css';

const NavBar = () => {

    const handleHover = (event) => {
        const videoUrl = event.target.getAttribute("data-video");
        const listLi = [...event.target.parentNode.childNodes];
        const videoItem = listLi[listLi.length - 1];
        videoItem.childNodes[0].setAttribute("src", videoUrl);
    }

    const handleHoverPrimary = (event, className) => {
        if (event.target.parentNode.className === className) {
            const videoUrl = event.target.parentNode.getAttribute("data-video");
            const listLi = [...event.target.parentNode.childNodes[1].childNodes[0].childNodes];
            const videoItem = listLi[listLi.length - 1];
            videoItem.childNodes[0].setAttribute("src", videoUrl);
        }
    }

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                { listItemsMenu.map((item) => (
                    <li
                        className={item.color}
                        data-video={item.video}
                    >
                        <div onMouseEnter={(event) => handleHoverPrimary(event, item.color)}>
                            <span className="icon-container">Icon</span>
                            <span className="icon-label">{item.title}</span>
                        </div>
                        <div className="menu-option">
                            <ul>
                                <li>{item.title}</li>
                                { item.options.map((option, index) => (
                                    <li
                                        data-video={option.video}
                                        onMouseEnter={handleHover}
                                        key={index}
                                    >
                                        {option.name}
                                    </li>
                                )) }
                                <li>
                                    <video
                                        poster="https://bogota.gov.co/themes/custom/bogotema/images/cargador-sin-fondo.gif"
                                        width="326"
                                        height="314"
                                        preload="none"
                                        class="header-main__video"
                                        src={item.video}
                                        muted
                                        autoPlay
                                        loop
                                    >
                                        <source src={item.video} type="video/mp4" />
                                    </video>
                                </li>
                            </ul>
                        </div>
                    </li>
                )) }
            </ul>
        </nav>
    )
};

export default NavBar;