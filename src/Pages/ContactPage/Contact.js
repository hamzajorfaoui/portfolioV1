import React from 'react';
import './Contact.scss';

export default function Contact(){


    return(
        <div className="Contact">
        <div className="title">
            <h1>contact me<br></br>
            <span>I look forward to work with you</span></h1>
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