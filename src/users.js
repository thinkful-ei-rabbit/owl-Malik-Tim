import React from 'react';


export default function Users(props){
    
    return( 
        <section className = 'users'>
    <h3>{props.name}</h3>
    <img src= {props.avatar} alt= "avatar"/>
    <p value= {props.onStage}>onStage</p>
    
    </section>
    )}