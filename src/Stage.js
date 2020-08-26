import React from 'react';
import './Stage.css'

export default function Stage(props) {
    return (
        <section className="stageMember">
            <div className="details">
                <img src={props.avatar} alt="avatar" />
                <div className="name">
                    {props.name}
                </div>
            </div>
        </section>
    )
}