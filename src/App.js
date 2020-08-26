import React, { Component } from 'react';
import Participants from './Participants';
import Stage from './Stage'
import './App.css'

class App extends Component {
  static defaultProps = {
    store: {
      Participants: [],
      chatEvents: []
    }
  };
  render() {
    const { store } = this.props
    return (
      <main>
        <div className='participantsList'>
          {store.participants.map(participant => (
            <Participants
              key={participant.id}
              name={participant.name}
              avatar={participant.avatar}
              inSession={participant.inSession}
              onStage={participant.Onstage}
            />
          ))}
        </div>
        <div className="stage">
          {store.participants.map(participant => ( 
            <Stage 
              key={participant.id}
              name={participant.name}
              avatar={participant.avatar}
            />
          ))}
          
        </div>
      </main>
    )
  }
}
export default App;