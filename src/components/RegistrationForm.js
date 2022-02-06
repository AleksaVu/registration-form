import React, { Component } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import FormPersonalDetails from "./FormPersonalDetails";
import FormUserDetails from "./FormUserDetails";

export class RegistrationForm extends Component {
  state = {
    step: 1,
    fname: "",
    lname: "",
    email: "",
    username: "",
    password: "",
    password_confirm: "",
    check: false,
    loading: true,
    disable_submit: true,
  };

  componentDidMount() {
    //  mjesto za neku fetch funkcija
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

  // Handle all input changes
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ check: e.target.checked });

    if (
      this.state.username !== "" &&
      this.state.password !== "" &&
      this.state.password_confirm !== "" &&
      this.state.password === this.state.password_confirm
    ) {
      if (
        this.state.check === false &&
        this.state.password === this.state.password_confirm
      ) {
        this.setState({ disable_submit: false });
        if (
          this.state.check === true &&
          this.state.password === this.state.password_confirm
        ) {
          this.setState({ disable_submit: false });
          console.log(this.state.disable_submit);
        }
      } else {
        this.setState({ disable_submit: true });
      }
    } else {
      this.setState({ disable_submit: true });
    }
  };

  // Handle check input cahnges
  handleChangeCheck = e => {
    this.setState({ check: e.target.checked });
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
      fname,
      lname,
      email,
      username,
      password,
      password_confirm,
      check,
      disable_submit,
    } = this.state;
    const values = {
      fname,
      lname,
      email,
      username,
      password,
      password_confirm,
      check,
      disable_submit,
    };
    const fields = {
      fname,
      lname,
      email,
      username,
      password,
      password_confirm,
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
