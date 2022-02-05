import React, { Component } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <React.Fragment>
        <Container maxWidth="md">
          <Box sx={{ m: 5 }}>
            <h1>Personal Details</h1>

            <ValidatorForm
              onSubmit={this.continue}
              onError={errors => console.log(errors)}>
              <TextValidator
                onChange={this.props.handleChange}
                validators={[
                  "required",
                  "minStringLength:2",
                  "maxStringLength: 25",
                  "matchRegexp:^[A-ZŠĐŽČĆ][a-zšđčćž]*$",
                ]}
                errorMessages={[
                  "this field is required",
                  "first name too short",
                  "first name too long",
                  "format is not valid",
                ]}
                placeholder="Enter Your First Name"
                label="First Name"
                name="firstName"
                value={values.firstName}
                margin="normal"
                fullWidth
              />

              <TextValidator
                onChange={this.props.handleChange}
                validators={[
                  "required",
                  "minStringLength:2",
                  "maxStringLength: 25",
                  "matchRegexp:^[A-ZŠĐŽČĆ][a-zšđčćž]*$",
                ]}
                errorMessages={[
                  "this field is required",
                  "last name too short",
                  "last name too long",
                  "format is not valid",
                ]}
                placeholder="Enter Your Last Name"
                label="Last Name"
                name="lastName"
                value={values.lastName}
                margin="normal"
                fullWidth></TextValidator>

              <TextValidator
                onChange={this.props.handleChange}
                validators={["required", "isEmail"]}
                errorMessages={["this field is required", "email is not valid"]}
                placeholder="Enter Your Email"
                label="Email"
                name="email"
                value={values.email}
                margin="normal"
                fullWidth></TextValidator>
              <br />
              <Button variant="contained" type="submit">
                Continue
              </Button>
            </ValidatorForm>
          </Box>
        </Container>
      </React.Fragment>
    );
  }
}

export default FormPersonalDetails;
