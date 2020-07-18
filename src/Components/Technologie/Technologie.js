import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Technologie.scss';


export default function Technologie({data}){

    return(
        <div className="technologie" style={{color:data.color}} title={data.name} >
            {data.icone!==undefined ?
            <FontAwesomeIcon icon={data.icone} className="icone"></FontAwesomeIcon>:
            data.svg
            }
        </div>
    )
}