import React from 'react';

import { useLocation, Link } from 'react-router-dom';

export default function NavLink(props: any) {
    let location = useLocation();
    let isActive = location.pathname == props.to;
    let className = (isActive) ? 'text-slate-500 hover:text-slate-600 ease-in-out duration-300 before:hidden md:before:block active' : 'text-slate-500 hover:text-slate-600 ease-in-out duration-300 before:hidden md:before:block';

    return (
        <li className={ className }>
            <Link to={ props.to }>{props.children}</Link>
        </li>
    );  
}