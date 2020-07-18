import React, { useState } from 'react';
import './Project.scss';
import gsap from 'gsap';
import OneProject from './OneProject/OneProject';

export function project_animation_leave(){
    gsap.to(".Project .oneProject .pic",{duration:1,opacity:0,x:100});
    gsap.to(".Project .details",{duration:1,opacity:0,y:100,stagger:0});
    gsap.to('.line2',{duration:1 , y:0});
    gsap.to('.numbers',{duration:1 , opacity:0 ,y:'100%', stagger:0.3});
}
const Projects = [{close:false},{close:false},{close:false},{close:false},{close:false}];
var selected = 0;
export default function Project(){

    const [my_Projects , SetmP] = useState(Projects);
    const Projects_Scroll_add=()=>{
          document.getElementById('Projects').addEventListener('wheel',Projects_Scroll_event);
          document.getElementById('Projects').addEventListener("touchstart",touch_begin);
          document.getElementById('Projects').addEventListener("touchend",touch_end);
    }
    var touch_start_position = 0;
    const touch_begin =(e)=>{
      touch_start_position = e.touches[0].clientY;
    }
    const touch_end =(e)=>{
    let touch_end_position = e.changedTouches[0].clientY;
      if(timeoutID == null){
        if(touch_start_position > touch_end_position+5){
          scroll_down();
        }else if(touch_start_position < touch_end_position-5){
          scroll_up();
        }             
      }
    }
    const Projects_Scroll_remove=()=>{
        document.getElementById('Projects').removeEventListener('wheel',Projects_Scroll_event);
  }
    var timeoutID = null;
    const timeoutcalc=()=>{ 
        Projects_Scroll_remove();
        timeoutID = setTimeout(()=>{
                    Projects_Scroll_add();
                    timeoutID = null;  
                    },1000);
    }
    const scroll_up=()=>{
      if(selected>0){
        timeoutcalc();
        my_Projects[selected].close=false;
        selected--;
        my_Projects[selected].close=true;
        SetmP([...my_Projects]);
        gsap.to('#Projects',{y:-(selected*100)+"vh" , duration:1, onComplete:()=>{ }});
      }
    }
    const scroll_down=()=>{
      if(selected<Projects.length-1){
        timeoutcalc();
        my_Projects[selected].close=false;
        selected++;
        my_Projects[selected].close=true;
        SetmP([...my_Projects]);
        gsap.to('#Projects',{y:-(selected*100)+"vh" , duration:1 , onComplete:()=>{}});        
      }
    }
    const Projects_Scroll_event=(e)=>{
            if(timeoutID == null){
              if(e.deltaY > 0 ){
                scroll_down();
              }else if(e.deltaY < 0){
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
                                    gsap.to('.P',{duration:0.5,opacity:1});
                                  }});
            gsap.from('.numbers',{duration:1 , opacity:0 ,y:'100%'});
            gsap.to('.line2',{duration:1 , y:"-110px"});
            Projects_Scroll_add();
            
          }
          start();  
          return function clean(){
            clearInterval(timeoutID);
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