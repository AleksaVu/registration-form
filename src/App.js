import React from "react";
import './App.css';
import { RegistrationForm } from './components/RegistrationForm';

export default class App extends React.Component {
render(){
  return (
      <div className="App">
        <RegistrationForm></RegistrationForm>
      </div>
    );
  }
}


