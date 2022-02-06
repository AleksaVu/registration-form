import React, { Component } from "react";
import Box from "@mui/material/Box";
import logo from "../images/monkey-rocket.png";
import Confetti from "react-confetti";

export default class Success extends Component {
  render() {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}>
        <Confetti min-width="100%" min-height="100%" />
        <img src={logo} className="image" width="200px" alt="Monkey" />
        <h1>Registration Successful</h1>
        <img src={logo} className="image" width="200px" alt="Monkey" />
      </Box>
    );
  }
}
