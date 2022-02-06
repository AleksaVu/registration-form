import React, { Component } from "react";
import Box from "@mui/material/Box";

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
        <h1>Registration Successful</h1>
      </Box>
    );
  }
}
