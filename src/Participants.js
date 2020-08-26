import React from 'react';
import './Participants.css'


export default function Participants(props){
    
    return( 
    <section className = "participant">
        <img src= {props.avatar} alt= "avatar"/>
        <div className="details">
            <h3>{props.name}</h3>
            <p value= {props.onStage}>onStage</p>
        </div>
    </section>
    )}