import React from 'react';
import './Navbar.scss';
import { NavLink, Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { AnimationC } from '../../App';
export default function Navbar(){
   const selectedEl = React.useRef(null);
   var Nav_selected = 0;
   const select_active_nav=()=>{
    if(selectedEl.current != null){
      selectedEl.current.style.transform="translateX("+(Nav_selected-5)+"px)"; 
      selectedEl.current.style.height="50px"; 
      selectedEl.current.style.width="50px";      
    }
   }
   let location = useLocation();
   React.useEffect(()=>{
   switch (location.pathname) {
  case "/contact":
    Nav_selected=162;
    select_active_nav();
      break;
  case "/project":
    Nav_selected=88;
    select_active_nav();
      break;
  default:
    Nav_selected=0;
    select_active_nav();
      break;
   }
   },[location]);
   React.useEffect(()=>{
    function start(){
      let T1=gsap.timeline({onComplete:select_active_nav});
      T1.to(".svg_logo",{duration:.5,scale:1});
      T1.to(".item",{duration:1,x:0,opacity:1,stagger:0.3});
    }
    start();  
    //componentwillunmount
    return function clean(){
    
    };       
    },[]);
   const mouseover_navlink=(e)=>{
    selectedEl.current.style.transform="translateX("+(e.target.offsetLeft-5)+"px)" ;
   }
   const mouseleave_navlink=()=>{
    selectedEl.current.style.transform="translateX("+(Nav_selected-5)+"px)";
   }
   const {Overlay_menu_open ,SetOm} = React.useContext(AnimationC);
   
   const click=()=>{
    SetOm(!Overlay_menu_open);
   }

    return(
      <>
        <div className="navbar"> 
          <Link to="/" exact="true" className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="51" viewBox="0 0 125 51" style={{transform:'scale(0)'}} className="svg_logo">
            <g transform="translate(-1067.974 -4166.519)">
              <text transform="translate(1067.974 4196.519)" className={Overlay_menu_open?"name black":"name white"} fontSize="28" fontFamily="SegoeUI, Segoe UI" letterSpacing="0.278em">
                <tspan x="0" y="0">HaMZA</tspan>
              </text>
              <text transform="translate(1092.974 4214.519)" className={Overlay_menu_open?"name black":"name white"} fontSize="12" fontFamily="SegoeUI, Segoe UI" letterSpacing="0.278em" opacity="0.3">
                <tspan x="0" y="0">Jorfaoui</tspan>
              </text>
            </g>
          </svg>
          </Link> 
          <div className="menu" onMouseLeave={()=>{mouseleave_navlink()}}>
          <div className="selected" ref={selectedEl}></div>
          <NavLink to="/about"
                  activeClassName="active"
                  onMouseEnter={(event)=>{mouseover_navlink(event) }}
                  className="item">About me </NavLink >
          <NavLink to="/project" exact
                   className="item" 
                   onMouseEnter={(event)=>{mouseover_navlink(event) }}>Projects </NavLink >
          <NavLink to="/contact" 
                   activeClassName="active"
                   onMouseEnter={(event)=>{mouseover_navlink(event) }}
                   className="item" >Let's work together</NavLink>
         </div>
         <div className="menu_mobile">
         <div className={!Overlay_menu_open?"nav-icon":"nav-icon active"} onClick={click}>
              <div></div>
         </div>
         </div>
        </div>
         </>
    )
}