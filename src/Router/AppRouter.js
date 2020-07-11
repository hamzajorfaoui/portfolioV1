import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {Home , About} from '../Pages';
export default function AppRouter(props){
    return(
           <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="*" >
                <Redirect to="/"></Redirect>
            </Route>               
            </Switch> 
    )
}