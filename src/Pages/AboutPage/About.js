import React, { useEffect } from 'react';
import './About.scss';
import gsap from 'gsap';
import pic from '../../Assets/photo-15.jpg';
import { Technologie } from '../../Components';


export function about_animation_enter(){
    let T1 = gsap.timeline({ delay:1.1 ,paused:true}); 
    T1.to(".About",{duration:.9,y:0,opacity:1})
    T1.to(".about_me .title div",{duration:.5,flex:1},'=-0.9');
    T1.to(".about_me .title span",{duration:.5,opacity:1},"-=0.5");
    T1.to(".about_me .about_1 div",{duration:1,opacity:1,stagger:.5 ,y:0, ease:"slow"});
    T1.to(".about_me .technologies >div",{duration:.5,x:0,opacity:1,stagger:.2});
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
            icone:['fab','angular'],
            color:"#c3002f"
        },{
            name:"react",
            icone:['fab','react'],
            color:"#61dafb"
        },{
            name:"Javascript",
            icone:['fab','js'],
            color:"#f7df1e"
        },{
            name:"Gulp",
            icone:['fab','gulp'],
            color:"#eb4a4b"
        },{
            name:"Laravel",
            icone:['fab','laravel'],
            color:"#ff2d20"
        }
        ,{
            name:"Laravel",
            svg:<svg xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" focusable="false" className="icone_svg"
                     preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="#007ACC" d="M0 128v128h256V0H0z"/><path d="M56.611 128.85l-.081 10.483h33.32v94.68H113.42v-94.68h33.32v-10.28c0-5.69-.122-10.444-.284-10.566c-.122-.162-20.399-.244-44.983-.203l-44.739.122l-.122 10.443z" fill="#FFF"/><path d="M206.567 118.108c6.501 1.626 11.459 4.51 16.01 9.224c2.357 2.52 5.851 7.112 6.136 8.209c.08.325-11.053 7.802-17.798 11.987c-.244.163-1.22-.894-2.317-2.52c-3.291-4.794-6.745-6.867-12.028-7.232c-7.76-.529-12.759 3.535-12.718 10.32c0 1.992.284 3.17 1.097 4.796c1.707 3.535 4.876 5.648 14.832 9.955c18.326 7.884 26.168 13.085 31.045 20.48c5.445 8.25 6.664 21.415 2.966 31.208c-4.063 10.646-14.14 17.88-28.323 20.277c-4.388.772-14.79.65-19.504-.203c-10.28-1.829-20.033-6.908-26.047-13.572c-2.357-2.601-6.949-9.387-6.664-9.875c.122-.162 1.178-.812 2.356-1.503c1.138-.65 5.446-3.13 9.509-5.486l7.355-4.267l1.544 2.276c2.154 3.291 6.867 7.802 9.712 9.305c8.167 4.308 19.383 3.698 24.909-1.26c2.357-2.153 3.332-4.388 3.332-7.68c0-2.966-.366-4.266-1.91-6.5c-1.99-2.845-6.054-5.243-17.595-10.24c-13.206-5.69-18.895-9.225-24.096-14.833c-3.007-3.25-5.852-8.452-7.03-12.8c-.975-3.616-1.22-12.678-.447-16.335c2.723-12.76 12.353-21.658 26.25-24.3c4.51-.853 14.994-.528 19.424.57z" fill="#FFF"/></svg>,
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
                      <Technologie data={el} key={index}></Technologie>
                      )
                  })
              }
          </div>
      </div>
    </div>
    )
}

