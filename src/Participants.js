import React from 'react';
import './Participants.css'


export default function Participants(props){
    
    return( 
    <section className = "participantList">
        <div className="participant">
        <img src= {props.avatar} alt= "avatar"/>
        <div className="details">
            {props.name}
            <p value= {props.onStage}>onStage</p>
        </div>
        </div>
    </section>
    )}