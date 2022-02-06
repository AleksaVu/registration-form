import React from "react";
import red from "@mui/material/colors/red";
import Checkbox from "@mui/material/Checkbox";
import { ValidatorComponent } from "react-material-ui-form-validator";

const red300 = red["500"];

const style = {
  fontSize: "12px",
  color: red300,
  position: "absolute",
  marginTop: "40px",
};

class CheckboxValidatorElement extends ValidatorComponent {
  renderValidatorComponent() {
    const { errorMessages, validators, requiredError, value, ...rest } =
      this.props;

    return (
      <div>
        <Checkbox
          {...rest}
          ref={r => {
            this.input = r;
          }}
        />
        {this.errorText()}
      </div>
    );
  }

  errorText() {
    const { isValid } = this.state;

    if (isValid) {
      return null;
    }

    return <span style={style}>{this.getErrorMessage()}</span>;
  }
}

export default CheckboxValidatorElement;
