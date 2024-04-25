// import './style.css';

import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Header() {

//     const [showMenu, isMenuShowed] = useState(false);

//     function getConstats() {
//         const menuItem = document.querySelector("#menu-item-container");
//         const menuItemDivs = document.querySelectorAll("#menu-item-container > div");
//         const hamburger = document.querySelector("#hamburger");
//         const hamburgerClose = document.querySelector("#hamburger > .material-icons:first-child");
//         const hamburgerOpen = document.querySelector("#hamburger > .material-icons:last-child");

//         return { menuItem: menuItem, menuItemDivs: menuItemDivs, hamburger: hamburger, hamburgerClose: hamburgerClose, hamburgerOpen: hamburgerOpen }
//     }

//     function getHamburgerOpen(obj) {
//         obj.menuItem.style.display = "flex";
//         obj.hamburgerClose.style.display = "none";
//         obj.hamburgerOpen.style.display = "block";
//         isMenuShowed(true);
//     }

//     function getHamburgerClose(obj) {
//         obj.menuItem.style.display = "none";
//         obj.hamburgerClose.style.display = "block";
//         obj.hamburgerOpen.style.display = "none";
//         isMenuShowed(false);
//     }

//     function handleClick() {
//         const obj = getConstats();

//         obj.menuItemDivs.forEach(item => item.addEventListener("click", () => {
//             getHamburgerClose(obj);
//         }));

//         !showMenu ? getHamburgerOpen(obj) : getHamburgerClose(obj);
//     }

//     // function handleWindowOnClick() {
//     //     const obj = getConstats();        

//     //     window.onclick = function (e) {
//     //         console.log("Sukaaaaaaaaaaaaaaaaaaaaaaaa")
//     //         let ishamburgerOpenBlock = obj.hamburgerOpen.style.display = "block";
//     //         let ishamburgerCloseBlock = obj.hamburgerClose.style.display = "none";
//     //         console.log("open", ishamburgerOpenBlock)
//     //         console.log("close", ishamburgerCloseBlock)

//     //         const isAllDifferent = e.target != obj.menuItem && e.target != obj.hamburger && e.target != obj.hamburgerClose && e.target != obj.hamburgerOpen;
//     //         if (isAllDifferent ) {
//     //             getHamburgerClose(obj);
//     //         }
           
//     //     }
//     // }



    return (
        <header >
            <div id="menu-container">
                <div id="logo-container">
                    <div id="scritta-logo">
                        <Link to="/">
                            {/* <img src="imgs/logo.jpg" alt="Ivrea Parkour"/> */}
                            PASTICCERIA
                        </Link>
                    </div>
                </div>
                <div id="menu-item-container">
                    <div>
                        <Link to="/">Home </Link>
                    </div>
                    <div>
                        <Link to="/login">Login </Link>
                    </div>
                    {/* <div>
                        <Link to="/corsi">Corsi </Link>
                    </div>
                    <div>
                        <Link to="/galleria">Galleria </Link>
                    </div> */}
                    {/* <div>
                        <Link to="/teamaves">Team Aves </Link>
                    </div> */}
                </div>
                {/* <div id="hamburger" onClick={handleClick}>
                    <div className="material-icons"> menu </div>
                    <div className="material-icons">  menu_open </div>
                </div> */}
            </div>
        </header>

    );
}

export default Header;
