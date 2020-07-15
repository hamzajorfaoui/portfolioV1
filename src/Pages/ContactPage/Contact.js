import React from 'react';
import './Contact.scss';
import gsap from 'gsap/gsap-core';
import { NavLink } from 'react-router-dom';

export function conatct_animation_leave(){
    let T1 = gsap.timeline({paused:true});
    T1.to(".Contact .title h1 span",{duration:.25 , y:-100,opacity:0,stagger:0.25});
    T1.to(".Contact .form_contact .form_field",{duration:.75 , y:-100,opacity:0,stagger:0.20});
    T1.play();  
}
export default function Contact(){
    React.useEffect(()=>{
        function start(){
            let T1 = gsap.timeline({delay:1});
            T1.to(".Contact .title h1 span",{duration:.5 , y:0,opacity:1,stagger:0.25});
            T1.to(".Contact .form_contact .form_field",{duration:1 , y:0,opacity:1,stagger:0.25});
        }
        start();  
        //componentwillunmount
        return function clean(){
        };       
        });

    return(
        <div className="Contact">
        <div className="title">
            <h1><span className="titre">contact me</span><br></br>
            <span className="sous_titre">I look forward to work with you</span></h1>
        </div>
        <div className="form_contact">
            <div className="form_field">
                <input className="field" placeholder="Full Name"></input>
                <label className="field_label">Full Name</label>                
            </div>
        </div>
        <div className="form_contact">
            <div className="form_field">
                <input className="field" placeholder="Email"></input>
                <label className="field_label">Email</label>                
            </div>
        </div>
        <div className="form_contact">
            <div className="form_field">
                <textarea className="field" placeholder="Message" style={{maxHeight: "150px"}}></textarea>
                <label className="field_label">Message</label>                
            </div>
        </div>
        <div className="form_contact">
            <div className="form_field">
               <button className="field_submit">Send</button>               
            </div>
        </div>
        </div>
    )
}