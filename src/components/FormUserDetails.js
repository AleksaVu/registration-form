import React, { Component } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import CheckboxValidatorElement from "./CheckboxValidatorElement";
import axios from "axios";

export class FormUserDetails extends Component {
  componentDidMount() {
    ValidatorForm.addValidationRule("isTruthy", value => value);
    ValidatorForm.addValidationRule("isPasswordMatch", value => {
      if (value !== this.props.values.password) {
        return false;
      }
      return true;
    });
  }

  componentWillUnmount() {
    // remove rule when it is not needed
    ValidatorForm.removeValidationRule("isPasswordMatch");
  }

  submitDataFields = () => {
    //this.setState({ disable_submit: true });
    let submitObj = {};
    let fieldsArray = [];
    Object.entries(this.props.fields).forEach(([key, val]) => {
      let obj = {
        code: key,
        valueStr: val,
        dataType: typeof val,
      };
      fieldsArray.push(obj);
    });

    submitObj["fields"] = fieldsArray;
    return submitObj;
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const fieldsArray = this.submitDataFields();
    console.log(fieldsArray);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", fieldsArray)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    this.props.nextStep();
  };

  render() {
    const { values, handleChange, nextStep } = this.props;
    return (
      <React.Fragment>
        <Container maxWidth="md">
          <Box sx={{ m: 5 }}>
            <h1>User Details</h1>

            <ValidatorForm
              onSubmit={this.handleFormSubmit}
              onError={errors => console.log(errors)}>
              <TextValidator
                validators={[
                  "required",
                  "minStringLength:4",
                  "maxStringLength: 20",
                  "matchRegexp:^[A-Za-z][A-Za-z0-9_]{4,20}$",
                ]}
                errorMessages={[
                  "this field is required",
                  "username too short",
                  "username too long",
                  "username not valid",
                ]}
                placeholder="Enter Username"
                label="Username"
                name="username"
                value={values.username}
                margin="normal"
                onChange={handleChange}
                fullWidth
              />
              <TextValidator
                validators={[
                  "required",
                  "minStringLength:6",
                  "maxStringLength: 16",
                  "matchRegexp:^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,20}$",
                ]}
                errorMessages={[
                  "this field is required",
                  "password too short",
                  "password too long",
                  "password too week, must contain at least one uppercase, lowercase, numbers and special character",
                ]}
                placeholder="Enter Password"
                type="password"
                label="Password"
                name="password"
                value={values.password}
                margin="normal"
                onChange={handleChange}
                fullWidth
              />
              <TextValidator
                validators={[
                  "required",
                  "isPasswordMatch",
                  "minStringLength:6",
                  "maxStringLength: 16",
                  "matchRegexp:^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,20}$",
                ]}
                errorMessages={[
                  "this field is required",
                  "password mismatch",
                  "password too short",
                  "password too long",
                  "password mismatch",
                ]}
                placeholder="Confirm Password"
                type="password"
                label="Confirm Password"
                name="password_confirm"
                value={values.password_confirm}
                margin="normal"
                onChange={handleChange}
                fullWidth
              />
              <FormGroup>
                <FormControlLabel
                  control={
                    <CheckboxValidatorElement
                      validators={["isTruthy"]}
                      errorMessages={["this field is required"]}
                      value={values.check}
                      checked={values.check}
                      onChange={handleChange}
                      name="check"
                    />
                  }
                  label="Accept Terms and Conditions"
                />
              </FormGroup>
              <br />
              <br />
              <Button sx={{ mr: 5 }} variant="outlined" onClick={this.back}>
                Go Back
              </Button>
              <Button
                variant="contained"
                disabled={values.disable_submit}
                onClick={this.handleFormSubmit}>
                Submit
              </Button>
            </ValidatorForm>
          </Box>
        </Container>
      </React.Fragment>
    );
  }
}

export default FormUserDetails;
