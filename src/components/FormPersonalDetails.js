import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


export class FormPersonalDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep()
    }
    
    render() {
        const { values, handleChange } = this.props;
        console.log("test", { values, handleChange })
        
    return( 
        
       <React.Fragment>
       <h1>Registration form</h1>
       <Box sx={{ m: 5 }}>
            <TextField 
                placeholder="Enter Your First Name"
                label="First Name"
                name= "firstName"
                defaultValue={values.firstName}
                margin="normal"
                onChange={this.props.handleChange}
                fullWidth>
            </TextField>        
            <TextField 
                placeholder="Enter Your Last Name"
                label="Last Name"
                name= "lastName"
                defaultValue={values.lastName}
                margin="normal"
                onChange={this.props.handleChange}
                fullWidth>
            </TextField>
            <TextField 
                placeholder="Enter Your Email"
                label="Email"
                name= "email"
                defaultValue={values.email}
                margin="normal"
                onChange={this.props.handleChange}
                fullWidth>
            </TextField>
            <Button variant="contained" onClick={this.continue}>Continue</Button>
        </Box>
       </React.Fragment>
       
    );
  }
}

export default FormPersonalDetails;
