import React, { Component } from 'react';
import Todos from './componenets/Todos'
import './App.css';

class App extends Component {

  state = {
    todos: []
  }


  componentDidMount() {
    // const baseUrl = (process.env.REACT_APP_BACKEND_URL === undefined) ? 'http://localhost:8080' : process.env.REACT_APP_BACKEND_URL
    const baseUrl = "https://example-app-jland-dev.apps.shared-na4.na4.openshift.opentlc.com/api/v1"
    fetch(baseUrl  + '/todos')
    .then(res => {
      return res.json()
    })
    .then((data) => {
      this.setState({ todos: data })
    })
    .catch(console.log)
  }
  
  render() {
    return (
      <div>
        <Todos todos={this.state.todos} />
      </div>
    );
  }

}

export default App;
