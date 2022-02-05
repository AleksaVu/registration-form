import React, { Component } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

export class FormUserDetails extends Component {
  submitDataFields = () => {
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
    console.log(submitObj);
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange, handleSubmit, handleChangeCheck } =
      this.props;
    return (
      <React.Fragment>
        <Container maxWidth="md">
          <Box sx={{ m: 5 }}>
            <h1>User Details</h1>

            <ValidatorForm
              onSubmit={this.submitDataFields}
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
                // defaultValue={values.username}
                value={values.username}
                margin="normal"
                onChange={handleChange}
                fullWidth
              />

              <TextValidator
                validators={[
                  "required",
                  "minStringLength:4",
                  "maxStringLength: 20",
                  "matchRegexp:^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$",
                ]}
                errorMessages={[
                  "this field is required",
                  "username too short",
                  "username too long",
                  "username not valid",
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
                  "minStringLength:4",
                  "maxStringLength: 20",
                  "matchRegexp:^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$",
                ]}
                errorMessages={[
                  "this field is required",
                  "username too short",
                  "username too long",
                  "username not valid",
                ]}
                placeholder="Confirm Password"
                type="password"
                label="Confirm Password"
                name="passwordConfirm"
                value={values.passwordConfirm}
                margin="normal"
                onChange={handleChange}
                fullWidth
              />

              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={values.check}
                      onChange={handleChangeCheck}
                      name="check"
                    />
                  }
                  label="Accept Terms and Conditions"
                />
              </FormGroup>
              <br />
              <Button sx={{ mr: 5 }} variant="outlined" onClick={this.back}>
                Go Back
              </Button>
              <Button type="submit" variant="contained">
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
