import React, { Component } from 'react';
import FormPersonalDetails from './FormPersonalDetails';
import FormUserDetails from './FormUserDetails';

export class RegistrationForm extends Component {
  state={
    step: 1,
    firstName:"",
    lastName:"",
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
    check: false
  }

//   Proceed to the next step method
  nextStep = () => {
      const {step} = this.state;
      this.setState({
          step: step + 1
        });
    }

  //   Go back to the previous step method
  prevStep = () => {
    const {step} = this.state
    this.setState({
        step: step - 1
    });
    }

    // Handle input cahnges
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const {step} = this.state;
        const { firstName, lastName, email, username, password, passwordConfirm, check } = this.state;
        const values = { firstName, lastName, email, username, password, passwordConfirm, check };

    switch(step){
        case 1:
            return (                
                <FormPersonalDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values}/>
             )
        case 2:
            return(
                <FormUserDetails nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values}/>
            )  
    }   
  }
}

export default RegistrationForm;
