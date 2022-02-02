import React, { Component } from 'react';
import FormPersonalDetails from './FormPersonalDetails';

export class RegistrationForm extends Component {
  state={
    step: 1,
    firstName:"",
    lastName:"",
    email: ""
  }

//   Proceed to the next step method
  nextStep = () =>{
      const {step} = this.state;
      this.setState({
          step: step + 1
        });
    }

  //   Go back to the previous step method
  prevStep = () =>{
    const {step} = this.state
    this.setState({
        step: step - 1
    });
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const {step} = this.state;
        const { firstName, lastName, email } = this.state;
        const values = { firstName, lastName, email };

    switch(step){
        case 1:
            return (                
                <FormPersonalDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values}> </FormPersonalDetails>
             )
        case 2:
            return <h1>Step 2</h1>    
    }   
  }
}

export default RegistrationForm;
