import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {Home , About, Contact, Project} from '../Pages';
import {Transition , TransitionGroup} from 'react-transition-group';

import {about_animation_leave} from '../Pages/AboutPage/About';
import { home_animation_leave } from '../Pages/Homepage/Home';
import { conatct_animation_leave } from '../Pages/ContactPage/Contact';
import { project_animation_leave } from '../Pages/ProjectsPage/Project';

const  AppRouter=React.memo((props)=>{
    return(
            <Route render={ ({location})=>{
            const {pathname , key}=location;
             return(
            <TransitionGroup component={null}>
                <Transition 
                    key={key}
                    onEnter={()=>{}}
                    onExit={()=>{
                    switch (pathname) {
                        case "/about":
                            about_animation_leave();
                            break;
                        case "/":
                            home_animation_leave();
                            break;
                        case "/contact":
                            conatct_animation_leave();
                            break;
                        case "/project":
                            project_animation_leave();
                            break;
                    
                        default:
                            break;
                    }
                    }}
                    // classNames="fade"
                    timeout={{enter:1000 , exit:1000}}
                    >
                    <Switch location={location}>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/contact">
                            <Contact/>
                        </Route>
                        <Route path="/project">
                            <Project/>
                        </Route>
                        <Route path="*" >
                            <Redirect to="/"></Redirect>
                        </Route>               
                    </Switch>
                </Transition>
            </TransitionGroup>              
             )
            }}>

            </Route>             
    )
});

export default AppRouter;