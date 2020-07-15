import React, { useEffect, useContext } from 'react';
import './About.scss';
import {AnimationC} from '../../App';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular , faReact,faJs ,faLaravel,faGulp} from '@fortawesome/free-brands-svg-icons';
import pic from '../../Assets/photo-15.jpg';


export function about_animation_enter(){
    let T1 = gsap.timeline({ delay:1.1 ,paused:true});
    T1.to(".About",{duration:.9,y:0,opacity:1})
    T1.to(".about_me .title div",{duration:.5,flex:1},'=-0.9');
    T1.to(".about_me .title span",{duration:.5,opacity:1});
    T1.to(".about_me .about_1 div",{duration:.5,opacity:1,stagger:.2 , ease:"slow"});
    T1.to(".about_me .technologies .technologie",{duration:.25,scale:1,stagger:.3});
    T1.to(".my_pic img",{duration:1,scale:1},'=-0.5');
    T1.play();  
}
export function about_animation_leave(){
    gsap.to(".About",{duration:.9,y:100,opacity:0});
}
export default function About(){
    // const {App_animation_complete} = useContext(AnimationC); 
    const technologies = [
        {
            name:"angular",
            icone:faAngular,
            color:"#c3002f"
        },{
            name:"react",
            icone:faReact,
            color:"#61dafb"
        },{
            name:"Javascript",
            icone:faJs,
            color:"#f7df1e"
        },{
            name:"Gulp",
            icone:faGulp,
            color:"#eb4a4b"
        },{
            name:"Laravel",
            icone:faLaravel,
            color:"#ff2d20"
        }
    ];
    useEffect(()=>{
        function start(){
           about_animation_enter();
        }
        start();  
        //componentwillunmount
        return function clean(){
        
        };       
    },[]);

    return ( 
    <div className="About">
      <div className="my_pic">
        <img src={pic}></img>
      </div>
      <div className="about_me"> 
          <div className="title">
           <div></div>
           <span>About</span>
          </div>
          <div className="about_1">
            <div>
            I'm a 20 years old Front-End developer. I'm a coding addicted that is focused on JavaScript,
            specifically in Angular and React and React-Native and also some back-end frameworks like Laravel .
            </div>
            <div>
            I'm always learning new stuffs, I like to resolve design  problems and turn any design into a real application.
            </div>
          </div>
          <div className="technologies">
              {
                  technologies.map((el , index)=>{
                      return(
                        <div className="technologie" 
                             style={{color:el.color}}
                             title={el.name} 
                             key={index}>
                         <FontAwesomeIcon icon={el.icone} className="icone"></FontAwesomeIcon>
                        </div>
                      )
                  })
              }
          </div>
      </div>
    </div>
    )
}

