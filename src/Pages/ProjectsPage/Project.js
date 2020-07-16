import React, { useState } from 'react';
import './Project.scss';
import gsap from 'gsap';
import OneProject from './OneProject/OneProject';

export function project_animation_leave(){
    gsap.to(".Project .oneProject .pic",{duration:1,opacity:0,x:100});
    gsap.to(".Project .details",{duration:1,opacity:0,y:100,stagger:0});
    gsap.to('.line2',{duration:1 , y:0});
}
const Projects = [{close:false},{close:false},{close:false},{close:false},{close:false}];
var selected = 0;
export default function Project(){

    const [my_Projects , SetmP] = useState(Projects);
    var timeoutID = null;
    const Projects_Scroll_add=()=>{
          document.getElementById('Projects').addEventListener('wheel',Projects_Scroll_event);
    }
    const Projects_Scroll_remove=()=>{
        document.getElementById('Projects').removeEventListener('wheel',Projects_Scroll_event);
  }
    const timeoutcalc=()=>{ 
        Projects_Scroll_remove();
        timeoutID = setTimeout(()=>{
                    Projects_Scroll_add();
                    timeoutID = null;  
                    },1000);
    }
    const scroll_up=()=>{
        timeoutcalc();
        my_Projects[selected].close=false;
        selected--;
        my_Projects[selected].close=true;
        SetmP([...my_Projects]);
        gsap.to('#Projects',{y:-(selected*100)+"vh" , duration:1, onComplete:()=>{ }});
    }
    const scroll_down=()=>{
        timeoutcalc();
        my_Projects[selected].close=false;
        selected++;
        my_Projects[selected].close=true;
        SetmP([...my_Projects]);
        gsap.to('#Projects',{y:-(selected*100)+"vh" , duration:1 , onComplete:()=>{}});
    }
    const Projects_Scroll_event=(e)=>{
            if(timeoutID == null){
              if(e.deltaY > 0 && selected<Projects.length-1){
                scroll_down();
              }else if(e.deltaY < 0 && selected>0){
                scroll_up();
              }             
            }
    }
    React.useEffect(()=>{
        function start(){
            gsap.from(".Project",{duration:0.5,opacity:0,delay:1,
                                  onComplete:()=>{ 
                                    my_Projects[selected].close=true;
                                    SetmP([...my_Projects]);
                                    gsap.to('#Projects',{y:-(selected*100)+"vh" , duration:1 , onComplete:()=>{}});
                                    gsap.to('.P',{duration:0.5,opacity:1})
                                  }});
            gsap.from('numbers span',{duration:1 , opacity:0 , stagger:0.3});
            gsap.to('.line2',{duration:1 , y:"-100px"});
            Projects_Scroll_add();
            
          }
          start();  
          return function clean(){
          };
    },[])
    return(
        <>
        <div className="Project" id="Projects"> 
        {
        my_Projects.map((proj, index)=>{
        return<div className="P" key={index}>
                <OneProject close={proj.close}></OneProject> 
              </div>            
        })
        }
        </div>
        <div className="numbers">
        {
        my_Projects.map((proj, index)=>{
        return(<span className={proj.close?"active":""} key={index}>{"0"+(index+1)}</span>)            
        })
        }
        </div>
        </>
    )
}