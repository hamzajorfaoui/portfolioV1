import React, { useEffect, useContext } from 'react';
import './About.scss';
import {AnimationC} from '../../App';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular , faReact,faJs ,faLaravel,faGulp} from '@fortawesome/free-brands-svg-icons';
import pic from '../../Assets/photo-15.jpg';
export default function About(){
    const {App_animation_complete} = useContext(AnimationC); 
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
    const mouseO=(e , color)=>{
     e.target.childNodes[0].style.color=color;
    }
    // useEffect(()=>{
    // if(App_animation_complete){
    //     gsap.to(".line3",{duration:1,x:"50%"});
    // }
    // },[App_animation_complete])

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
