import * as React from 'react';
import './App.css';
import UserDetails from './user-details';
import UserList from './user-list';


class App extends React.Component {
  public render() {
    return (
      <div className="container">
         <div className="left-pane">
            <UserList />
          </div>
          <div className="right-pane">
            <UserDetails />
          </div>
      </div>
    );
  }
}

export default App;
