import React from 'react';
import './OneProject.scss';
import Pic_project from'../../../Assets/P1.jpg';
import gsap from 'gsap';
import { Technologie } from '../../../Components';

export default function OneProject({close}){

    React.useEffect(()=>{
        if(!close){
            Close_Info();
        }else{
            gsap.from(current_Picture.current,{duration:1,opacity:0,x:100});
            gsap.from(current_Details.current,{duration:1,opacity:0,x:-100});
        }
    },[close]);
    React.useEffect(()=>{
        function start(){
           
          }
          start();  
          return function clean(){
          };
    },[]);
    const [Openinfo , setOpeninfo] =React.useState(false);
    const Open_Info=()=>{
        current_P.current.classList.add("open");
     setOpeninfo(true);
    }
    const Close_Info=()=>{
        current_P.current.classList.remove("open");
        setOpeninfo(false);
    }
    var current_P= React.useRef(null);
    var current_Picture= React.useRef(null);
    var current_Details= React.useRef(null);
    const data={
        title:"School App",
        about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut liquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
        technologies:[
            {
                name:"angular",
                icone:['fab','angular'],
                color:"#c3002f"
            },{
                name:"Laravel",
                icone:['fab','laravel'],
                color:"#ff2d20"
            }
        ],
        github_link:"https://github.com/hamzajorfaoui/angularngrx-pfe-front",
    }
    return(
           <div className="oneProject" id="OneP" ref={current_P}>
               <div className="pic" ref={ current_Picture}>
                     <img src={Pic_project} alt="Project image"></img>
               </div>
            <div className="details" ref={current_Details}>
                <div className="title">
                    <span>{data.title.split(' ')[0]}</span>
                    <span>{data.title.split(' ')[1]}</span>
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
                <div className="About_text">{data.about}</div>
                 <div className="_title"><h1>Technologies used</h1></div>
                 <div className="Technologies_text">
                     {
                      data.technologies.map((el,index)=>{
                          return(<Technologie data={el} key={index}></Technologie>);
                      })
                     }
                </div>
                 <div className="_title"><h1>Project Source File</h1></div>
                 <div className="ProjectSource_text">
                 <a href={data.github_link} target="_blank"  rel="noopener noreferrer">
                     <span>Link</span>
                     <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" className="svg-inline--fa fa-external-link-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>
                </a> 
                 </div>
                </div>
            </div>


           </div>
    )
}