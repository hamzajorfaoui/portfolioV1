import React from 'react';
import './Overlay.scss';
import { AnimationC } from '../../App';
import { useLocation, NavLink } from 'react-router-dom';

export default function Overlay(){


    const {Overlay_menu_open ,SetOm} = React.useContext(AnimationC);
    const location = useLocation();

    React.useEffect(()=>{
    if(Overlay_menu_open){
        SetOm(false);
    }
    },[location.pathname]);

    return(
        <div className={!Overlay_menu_open?"overlay":"overlay open"} id="overlay">
             <div className="links">
                <NavLink to="/" exact className="item_overlay" activeClassName="active">
                 Home
                </NavLink>
                <NavLink to="/about" className="item_overlay" activeClassName="active">
                 About
                </NavLink>
                <NavLink to="/project" className="item_overlay" activeClassName="active">
                 Project
                </NavLink>
                <NavLink to="/contact" className="item_overlay" activeClassName="active">
                Let's work together
                </NavLink>
             </div>
        </div>
    )
}