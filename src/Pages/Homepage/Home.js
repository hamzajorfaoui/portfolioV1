import React, { useEffect } from 'react';
import './Home.scss';
import gsap from 'gsap';

export function home_animation_leave(){
  gsap.to(".homePage div span",{duration:1,opacity:0,stagger:0.3});
}
const  Home=React.memo(()=>{
    useEffect(()=>{
    function start(){
      gsap.from(".homePage div span",{duration:1,opacity:0,stagger:0.3 , delay:2});
    }
    start();  
    //componentwillunmount
    return function clean(){
    };       
    });
    return (
    <div className="homePage">
       <div>
        <span className="hello"> &lt;HELLO WORD&gt;</span><br></br>
        <span className="name">My name is Hamza Jorfaoui</span>   <br></br>
        <span className="about">A young Front-End Developer passionate about web and mobile development.</span><br></br>            
       </div>
    </div>
    )
});
export default Home;

