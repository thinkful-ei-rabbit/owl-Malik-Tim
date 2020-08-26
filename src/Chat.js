import React from 'react';
import './Chat.css'

export default function Chat(props) {
    return (
        <section className="chat">
            <div className="message">
                <div className="messagedetails">
                    {props.timestamp}
                    <div className="messageBody">
                        {props.message}
                    </div>
                </div>
            </div>
            <div className="emoticon">
                {props.type}
            </div>
        </section>
    )}