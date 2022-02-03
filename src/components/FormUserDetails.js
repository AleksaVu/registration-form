import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Checkbox from '@mui/material/Checkbox';

export class FormUserDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep()
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep()
    }
    
    render() {
        const { values, handleChange } = this.props;
        console.log("test", { values, handleChange })
        
    return( 
        
       <React.Fragment>   
       <Container maxWidth="md">    
       <Box sx={{ m:5 }}>
            <h1>User Details</h1>
            <TextField 
                placeholder="Enter Username"
                label="Username"
                name= "username"
                defaultValue={values.username}
                margin="normal"
                onChange={this.props.handleChange}
                fullWidth>
            </TextField>        
            <TextField 
                placeholder="Enter Password"
                label="Password"
                name= "password"
                defaultValue={values.password}
                margin="normal"
                onChange={this.props.handleChange}
                fullWidth>
            </TextField>
            <TextField 
                placeholder="ConfirmPassword"
                label="Confirm Password"
                name= "passwordConfirm"
                defaultValue={values.passwordConfirm}
                margin="normal"
                onChange={this.props.handleChange}
                fullWidth>
            </TextField>  
            <Checkbox defaultChecked label="Accept all"/>    <br />      
            <Button sx={{ mr:5 }} variant="outlined" onClick={this.back}>Go Back</Button>
            <Button variant="contained" onClick={this.continue}>Submit</Button>
        </Box>
        </Container>
       </React.Fragment>
       
    );
  }
}

export default FormUserDetails;
