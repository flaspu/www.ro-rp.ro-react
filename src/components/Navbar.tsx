import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import NavLink from '../components/NavLink';

import Logo from '../assets/media/logos/logo-1.png';
import MenuRight from '../assets/media/icons/menu-right.svg';
import Close from '../assets/media/icons/x.svg';

export default function Navbar() {
    const [menu, setMenu] = useState(false);
    let menuClass = 'flex flex-col md:flex-row gap-8 lg:gap-[80px] text-lg font-semibold absolute md:relative md:bg-transparent bg-white pt-[160px] pb-[60px] md:py-0 px-10 top-0 left-0 w-full justify-end xl:justify-start';

    if(!menu) {
        menuClass += ' md:flex hidden';
    }

    return (
        <div className="container mx-auto">
            <div className="navbar px-[30px] md:px-0 py-[38px] lg:py-[58px] 2xl:px-[0px] flex justify-between items-center font-poppins">
                <div className="flex items-center justify-between xl:justify-start w-full 2xl:gap-20 xl:gap-[50px] relativ">
                    <div className="branding z-10">
                        <a href="#">
                            <img src={ Logo } alt="Romania Roleplay"></img>
                        </a>
                    </div>
                    <ul className={ menuClass }>
                        <NavLink to="/">Acasa</NavLink>
                        <li className="text-slate-500 hover:text-slate-600 ease-in-out duration-300 before:hidden md:before:block">
                            <a href="https://ro-rp.ro/forum">Forum</a>
                        </li>
                        <NavLink to="/team">Echipa Administrativă</NavLink>
                        <li className="text-slate-500 hover:text-slate-600 ease-in-out duration-300 before:hidden md:before:block">
                            <a href="https://wiki.ro-rp.ro/">Wikipedia</a>
                        </li>
                    </ul>
                </div>
                <div className="hidden xl:flex gap-6 text-lg">
                    <a href="#" className="btn-icon bg-white text-slate-800 outline-primary"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.07 15.16C20.69 14.56 20.02 14.23 19.32 14.31C17.55 14.5 15.8 14.11 14.1 13.16C12.78 12.42 11.73 11.32 11.08 9.98999C10.22 8.23999 9.95 6.45999 10.29 4.69999C10.42 4.00999 10.15 3.32999 9.60002 2.90999C9.03002 2.47999 8.28001 2.40999 7.64001 2.72999C2.74001 5.18999 0.710009 10.96 2.92001 16.15C3.87001 18.38 5.63001 20.12 7.86001 21.07C9.34001 21.69 10.85 22 12.32 22C15.85 22 19.13 20.27 21.08 17.13C21.46 16.52 21.45 15.77 21.08 15.17L21.07 15.16ZM8.64001 19.23C6.91001 18.5 5.49001 17.09 4.76 15.37C2.75001 10.66 4.98001 6.47999 8.28001 4.65999C7.95001 6.74999 8.30001 8.83999 9.30001 10.88C10.13 12.57 11.46 13.96 13.13 14.9C15.1 16 17.14 16.49 19.21 16.33C17.31 19.14 13.28 21.19 8.64001 19.23Z" fill="black"/>
                    </svg></a>
                    <a href="https://ucp.ro-rp.ro/login" className="btn bg-white text-slate-800 outline-primary font-medium">Autentificare</a>
                    <a href="https://ucp.ro-rp.ro/register" className="btn bg-primary text-slate-800 outline-primary font-medium">Înregistrare</a>
                </div>
                <button className="flex md:hidden btn-mobile z-10" onClick={
                    () => {
                        setMenu(!menu)
                    }
                }>
                    {
                        menu
                        ? <img src={ Close } alt="Close Menu"></img>
                        : <img src={ MenuRight } alt="Open Menu"></img>
                    }
                </button>
            </div>
        </div>
    );
}