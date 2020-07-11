import React, {createContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const RouteContext = createContext();

export function RouterProvider({children}){
    let location = useLocation();
    let value = location;
    useEffect(()=>{
     value = location;
     console.log(location)
    },[location]);
    return(
        <RouteContext.Provider value={value}>
        {children}
        </RouteContext.Provider>
    )
}