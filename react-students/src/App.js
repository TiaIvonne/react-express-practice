import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './Student'
import StudentList from './StudentList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Student />
        <StudentList />
      </div>
    );
  }
}

export default App;
