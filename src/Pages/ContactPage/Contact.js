import React from 'react';
import './Contact.scss';
import gsap from 'gsap/gsap-core';

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
        return function clean(){
        };       
    },[]);
    var Full_Name= React.useRef(null);
    var Email    = React.useRef(null);
    var Message  = React.useRef(null);
    var init_error = {
        Full_Name:false,
        Email:false,
        Message:false
    };
    const [error_validation , Seterror] = React.useState(init_error);
    const [btn_disabled , Setdisable] = React.useState(false);
    const is_empty=(val)=>{
            return val.trim()==="";   
    }
    const is_email=(val)=>{
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(val);   
    } 
    const clear_form=()=>{
        Full_Name.current.value="";
        Email.current.value="";
        Message.current.value="";
    }
    const get_form_object=()=>{
        return{
            Full_Name:Full_Name.current.value,
            Email:Email.current.value,
            Message:Message.current.value
        }
    }
    const form_validate=(callback)=>{
        let er={
            Full_Name:false,
            Email:false,
            Message:false
        };
        if(is_empty(Full_Name.current.value)){
            er.Full_Name=true;
        }
        if(!is_email(Email.current.value)){
            er.Email=true;
        }
        if(is_empty(Message.current.value)){
            er.Message=true;
        }
        Seterror(er);
        callback(er);
    }
    const form_submit =(e)=>{
    e.preventDefault();
    Setdisable(true);
    form_validate(form_submit_check);
    }
    const form_submit_check =(error)=>{
        if(JSON.stringify(error) === JSON.stringify(init_error)){
            console.log(get_form_object());
            clear_form();
        }
        Setdisable(false);
    }
    
    return(
        <div className="Contact">
        <div className="title">
            <h1><span className="titre">contact me</span><br></br>
            <span className="sous_titre">I look forward to work with you</span></h1>
        </div>
        <form onSubmit={form_submit}>
        <div className="form_contact">
            <div className="form_field">
                <input className={error_validation.Full_Name?"field error" :"field"} placeholder="Full Name" ref={Full_Name} ></input>
                <label className="field_label">Full Name *</label>               
            </div>
        </div>
        <div className="form_contact">
            <div className="form_field">
                <input className={error_validation.Email?"field error" :"field"} placeholder="Email" ref={Email} ></input>
                <label className="field_label">Email *</label>             
            </div>
        </div>
        <div className="form_contact">
            <div className="form_field">
                <textarea className={error_validation.Full_Name?"field error" :"field"} placeholder="Message" 
                          style={{maxHeight: "150px"}} ref={Message} ></textarea>
                <label className="field_label">Message *</label>                
            </div>
        </div>
        <div className="form_contact">
            <div className="form_field">
               <button className="field_submit" disabled={btn_disabled}>Send</button>               
            </div>
        </div>
        </form>
        </div>
    )
}