import React, {Component} from 'react';
import Users from './users';

class App extends Component { 
  static defaultProps = {
    store: {
    users:[],
    chatEvents:[]
  }
  };
  render() {
  const {store} = this.props
  return(

    <div className = 'userList'>
  {store.Users.map(user => (
    
      <Users
      key = { user.id}
      name = { user.name}
      avatar = { user.avatar}
      inSession = { user.inSession}
      onStage = { user.Onstage} />
  ))}
  </div>
  )
}
}
export default App;