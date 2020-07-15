import React from 'react';
import './Project.scss';
import Pic_project from'../../Assets/P1.jpg';
import gsap from 'gsap/gsap-core';

export function project_animation_leave(){
    gsap.to(".Project .oneProject .pic",{duration:1,opacity:0,x:100});
    gsap.to(".Project .details",{duration:1,opacity:0,y:100,stagger:0});
}
export default function Project(){

    React.useEffect(()=>{
        function start(){
            gsap.from(".Project",{duration:0.1,opacity:0,delay:1});
            gsap.from(".Project .oneProject .pic",{duration:1,opacity:0,x:100,delay:1});
            gsap.from(".Project .details",{duration:1,opacity:0,y:100,stagger:0,delay:1});
          }
          start();  
          return function clean(){
          };
    },[])
    const [Openinfo , setOpeninfo] =React.useState(false);
    const Open_Info=()=>{
     document.getElementById('OneP').classList.add("open");
     setOpeninfo(true);
    }
    const Close_Info=()=>{
        document.getElementById('OneP').classList.remove("open");
        setOpeninfo(false);
    }
    return(
        <div className="Project"> 
           <div className="oneProject" id="OneP">
               <div className="pic">
                     <img src={Pic_project}></img>
               </div>
            <div className="details">
                <div className="title">
                    <span>Project</span>
                    <span>Project</span>
                </div>

                <div className="info" onClick={!Openinfo ?Open_Info:Close_Info}>
                    <div>
                        <span>{!Openinfo ?"Infos":"close"}</span>
                        <span className="line"></span>
                        <span className="circle"></span>
                        <span className="icon-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 53">
                                <path d="M3.13,35.325A25,25,0,0,0,51.53,26.5" fill="none" stroke="#fff" style={{strokeDashoffset: 0, strokeDasharray: null}}></path>
                                <path d="M3.13,17.674A25,25,0,0,1,51.53,26.5" fill="none" stroke="#fff" style={{strokeDashoffset: 0, strokeDasharray: null}}></path>
                            </svg>                    
                        </span>                    
                    </div>
                </div>

                <div className="infoComplete">
                 <div className="_title"><h1>About</h1></div>
                 <div className="About_text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate </div>
                 <div className="_title"><h1>Technologie</h1></div>
                 <div className="Technologies_text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
                 <div className="_title"><h1>Project Source File</h1></div>
                 <div className="ProjectSource_text">Lorem ipsum dolor sit amet, consectetur adipiscing </div>
                </div>
            </div>


           </div>
        </div>
    )
}