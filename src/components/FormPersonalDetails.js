import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


export class FormPersonalDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep()
    }
    
    render() {
        const { values, handleChange } = this.props;
         
        
    return( 
        
       <React.Fragment>       
       <Container maxWidth="md">
        <Box sx={{ m:5 }}> 
            <h1>Personal Details</h1>
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
            <br/><br/>
            <Button variant="contained" onClick={this.continue}>Continue</Button>
            </Box>
        </Container>
       </React.Fragment>
       
    );
  }
}

export default FormPersonalDetails;
