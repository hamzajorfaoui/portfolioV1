import React from 'react';
import './Navbar.scss';
export default function Navbar(){


    return(
        <div className="navbar">
          <div className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="51" viewBox="0 0 125 51">
            <g transform="translate(-1067.974 -4166.519)">
              <text transform="translate(1067.974 4196.519)" className="name" fontSize="28" fontFamily="SegoeUI, Segoe UI" letterSpacing="0.278em">
                <tspan x="0" y="0">HaMZA</tspan>
              </text>
              <text transform="translate(1092.974 4214.519)" fill="#fff" fontSize="12" fontFamily="SegoeUI, Segoe UI" letterSpacing="0.278em" opacity="0.3">
                <tspan x="0" y="0">Jorfaoui</tspan>
              </text>
            </g>
          </svg>
          </div>
          <div className="menu">
          <span>About me </span>
          <span>Projects </span>
          <span>Let's work together</span>
         </div>
        </div>
    )
}