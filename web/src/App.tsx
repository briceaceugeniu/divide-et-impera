import React from "react";
import "./App.css";
import SentimentSatisfiedRoundedIcon from "@mui/icons-material/SentimentSatisfiedRounded";
import { Alert, Container } from "@mui/material";

import TaskCard from './components/TaskCard'

function App() {
  let longtext = "";

  for (let i = 0; i < 3; i++) {
    longtext += "some lorem ipsum thingie going on.";
  }

  return (
    <Container>
      <SentimentSatisfiedRoundedIcon />
      <Alert severity="success">Material UI is working!</Alert>
      <TaskCard title="Short task" content="Do something" percentage={10}/>
      <TaskCard title="Completed" content={longtext} percentage={100}/>
      <TaskCard title="Clickable" content="With clickable links"
                onAddClick={() => { alert('add') }}
                onEditClick={() => { alert('edit') }}
                percentage={10}
                />
    </Container>
  );
}

export default App;
