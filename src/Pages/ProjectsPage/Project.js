import React from 'react';
import './Project.scss';
import Pic_project from'../../Assets/P1.jpg';
export default function Project(){


    
    return(
        <div className="Project"> 
           <div className="oneProject">
               <div className="pic">
                     <img src={Pic_project}></img>
               </div>
                <div className="title">
                    <span>Project</span><br></br>
                    <span>Project</span>
                </div>
                <div className="info">
                    <div>
                        <span>Infos</span>
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
           </div>
        </div>
    )
}