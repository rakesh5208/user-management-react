import * as React from 'react';
import './App.css';
import UserDetails from './user-details';
import UserList from './user-list';


class App extends React.Component<any,any> {
  constructor(props:any){
    super(props);
    this.state = {
      selectedUser:null
    }
  }
  public setSelectedUser(user:any){
    this.setState({
      selectedUser:user
    })
  }
  public render() {
    return (
      <div className="app-container">
         <div className="app-left-pane">
            <UserList onUserSelect={this.setSelectedUser.bind(this)}/>
          </div>
          <div className="app-right-pane">
            <UserDetails user={this.state.selectedUser}/>
          </div>
      </div>
    );
  }
}

export default App;
