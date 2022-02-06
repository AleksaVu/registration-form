import React, { Component } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import FormPersonalDetails from "./FormPersonalDetails";
import FormUserDetails from "./FormUserDetails";

export class RegistrationForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
    check: false,
    loading: true,
  };

  componentDidMount() {
    //neka fetch funkcija
    this.setState({ loading: false });
  }

  //   Proceed to the next step method
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //   Go back to the previous step method
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle input cahnges
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Handle check input cahnges
  handleChangeCheck = e => {
    this.setState({ check: e.target.checked });
  };

  // Handle submit
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    if (this.state.loading === true) {
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}>
          <CircularProgress />
        </Box>
      );
    }

    const { step } = this.state;
    const {
      firstName,
      lastName,
      email,
      username,
      password,
      passwordConfirm,
      check,
    } = this.state;
    const values = {
      firstName,
      lastName,
      email,
      username,
      password,
      passwordConfirm,
      check,
    };
    const fields = {
      firstName,
      lastName,
      email,
      username,
      password,
      passwordConfirm,
    };

    switch (step) {
      case 1:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormUserDetails
            handleChangeCheck={this.handleChangeCheck}
            handleSubmit={this.handleSubmit}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            fields={fields}
          />
        );
    }
  }
}

export default RegistrationForm;
