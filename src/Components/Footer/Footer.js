import React from 'react';
import './Footer.scss'
import { NavLink } from 'react-router-dom';


export default function Footer(){

    return(
        <div className="Footer">
            <div className="page_numbers">
              <NavLink activeClassName="active" exact to="" className="numero">
              <div></div>
              <span>01</span>
              </NavLink>
              <NavLink activeClassName="active" to="/about"  className="numero">
              <div></div>
              <span>02</span>
              </NavLink>
              <NavLink activeClassName="active" to="/contact" className="numero">
              <div></div>
              <span>03</span>
              </NavLink>
            </div>
            <div className="arrow_down">

            </div>
        </div>
    )
}