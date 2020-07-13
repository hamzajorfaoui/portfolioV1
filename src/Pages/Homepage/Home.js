import React, { useEffect, useContext } from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
import {AnimationC} from '../../App';
import gsap from 'gsap';

export default function Home(){
    const {App_animation_complete} = useContext(AnimationC); 
    useEffect(()=>{
    function start(){
      gsap.from(".homePage div span",{duration:1,opacity:0,stagger:0.3});
    }
    start();  
    //componentwillunmount
    return function clean(){
    
    };       
    },[]);
    useEffect(()=>{
    if(App_animation_complete){
        gsap.to(".line3",{duration:1,x:0});
    }
    },[App_animation_complete])
    return (
    <div className="homePage">
       <div>
        <span className="hello"> &lt;HELLO WORD&gt;</span><br></br>
        <span className="name">My name is Hamza Jorfaoui</span>   <br></br>
        <span className="about">A young Front-End Developer passionate about web and mobile development.</span><br></br>            
       </div>
    </div>
    )
}

