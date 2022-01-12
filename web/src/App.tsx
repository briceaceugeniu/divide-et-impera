import React from "react";
import "./App.css";
import SentimentSatisfiedRoundedIcon from "@mui/icons-material/SentimentSatisfiedRounded";
import { Alert, Container } from "@mui/material";

import TaskCard from './components/TaskCard'

function App() {
  let longtext = "";

  for (let i = 0; i < 100; i++) {
    longtext += "some lorem ipsum thingie going on.";
  }

  return (
    <Container>
      <SentimentSatisfiedRoundedIcon />
      <Alert severity="success">Material UI is working!</Alert>
      <TaskCard title="Short task" content="Do something" percentage="110%"/>
      <TaskCard title="Long Task" content={longtext} percentage="110%"/>
      <TaskCard title="Disabled" content="some disabled task" disabled={true}/>
      <TaskCard title="Clickable" content="With clickable links"
                onAddClick={() => { alert('add') }}
                onEditClick={() => { alert('edit') }}
                />
    </Container>
  );
}

export default App;
