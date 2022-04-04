import React from "react";

export const UserContext = React.createContext();
class ContextProvider extends React.Component {
  state = {users: [{
    name: 'user', 
    email: 'user@mail.edu', 
    password: 'secret', 
    balance: 100,
    deposits: [],
    withdrawls: []
  }]}
  render() {
    return (
      <UserContext.Provider value={
        { state: this.state,
          setUsers: (value) => this.setState({
                      users: value })}}>
      {this.props.children})
      </UserContext.Provider>)    
  }
}

export default ContextProvider;