import React from 'react';
import './Navbar.scss';
import { NavLink, Link } from 'react-router-dom';
export default function Navbar(){
  
   const selectedEl = React.useRef(null);
   const navref1 = React.useRef(null);
   var Nav_selected = 0;
   const select_navLink=(match, location , e)=>{
    if (!match) {
      return false;
    }
    if(selectedEl.current != null){
    Nav_selected = e;
    selectedEl.current.style.transform="translateX("+(e-5)+"px)"; 
    selectedEl.current.style.height="50px"; 
    selectedEl.current.style.width="50px";      
    }
    return true;
   }
   const mouseover_navlink=(e)=>{
    selectedEl.current.style.transform="translateX("+(e.target.offsetLeft-5)+"px)" ;
   }
   const mouseleave_navlink=()=>{
    selectedEl.current.style.transform="translateX("+(Nav_selected-5)+"px)";
   }
    return(
        <div className="navbar"> 
          <Link to="/" exact="true" className="logo">
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
          </Link> 
          <div className="menu" onMouseLeave={()=>{mouseleave_navlink()}}>
          <div className="selected" ref={selectedEl}></div>
          <NavLink to="/about"
                  ref={navref1}
                  isActive={(match, location , left=0) => {select_navLink(match, location , left)}}
                  onMouseEnter={(event)=>{mouseover_navlink(event) }}
                  className="item">About me </NavLink >
          <NavLink to="/project" exact
                   className="item" 
                   isActive={(match, location , left=88) => {select_navLink(match, location , left)}}
                   onMouseEnter={(event)=>{mouseover_navlink(event) }}>Projects </NavLink >
          <NavLink to="/contact" 
                   isActive={(match, location , left=162) => {select_navLink(match, location , left)}}
                   onMouseEnter={(event)=>{mouseover_navlink(event) }}
                   className="item" >Let's work together</NavLink>
         </div>
        </div>
    )
}