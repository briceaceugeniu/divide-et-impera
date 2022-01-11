import React from "react";
import "./App.css";
import SentimentSatisfiedRoundedIcon from "@mui/icons-material/SentimentSatisfiedRounded";
import { Alert, Container } from "@mui/material";

function App() {
  return (
    <Container>
      <SentimentSatisfiedRoundedIcon />
      <Alert severity="success">Material UI is working!</Alert>
    </Container>
  );
}

export default App;
