import React, { useEffect, useState, createContext } from 'react';
import './App.scss';
import AppRouter from './Router/AppRouter';
import gsap from 'gsap';
import {Navbar,Footer, Overlay} from './Components';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn , faGithub} from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter } from 'react-router-dom';
export const AnimationC = createContext();

function App() {
  const [App_animation_complete , SetAac]=useState(false);
  const [Overlay_menu_open ,SetOm]=useState(false);
  const value_context_AnimationC = {Overlay_menu_open ,SetOm};

  useEffect(()=>{
  library.add(fab);
  let t1 = gsap.timeline({onComplete:()=>{SetAac(true)}});
  t1.to(".line_left a",{duration:1,opacity:1 ,delay:0.5 , ease:"slow" ,
   stagger:{
     from:"end",
     each:0.2
  }});
  t1.to(".line1",{duration:1,height:'calc(100vh - 70px)' ,delay:0.5 , ease:"slow"} , "-=0.5");
  t1.to(".line3",{duration:1,x:0});
  t1.to(".trans_section",{duration:.1,opacity:0.8},"-=1");
  t1.to(".line2",{duration:1,y:0});

  window.matchMedia('(max-width:700px)').addListener((e)=>{
   if(!e.matches){
     SetOm(false);
   }
  });
  },[]);

  
  return (
    <BrowserRouter>
    <div className="App">
       <div className={Overlay_menu_open?"lines black":"lines white"}>
           <div className="trans_section"></div>
           <div className="line_left">
                <div className="line1"></div>
                <div className="social_media">
                <a href="https://www.linkedin.com/in/hamza-jorfaoui" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} className="icone"></FontAwesomeIcon></a>
                <a href="https://github.com/hamzajorfaoui" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="icone"></FontAwesomeIcon></a>
                </div>
           </div>
           <div className="line2"></div>
           <div className="line3"></div>
       </div>
       <AnimationC.Provider value={value_context_AnimationC}>
       <Overlay></Overlay>
        {
          App_animation_complete
          ?<div className="App_grid">
            <div className="Nav">
               <Navbar></Navbar>
            </div>
             <div className="content">
                  <AppRouter ></AppRouter>         
             </div> 
             <div className="footer_app">
               <Footer></Footer>
              </div>  
            </div>
            :<div></div>
        }
       </AnimationC.Provider>


    </div>
    </BrowserRouter>
  );
}

export default App;
