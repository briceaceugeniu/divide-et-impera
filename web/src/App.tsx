import React, { useState } from "react";
import "./App.css";

import TaskCard from "./components/TaskCard";
import SupertasksList from "./components/supertasks/SupertasksList";

function App() {
  const [tasksCount, setTasksCount] = useState(1);

  let justForTestingPurposes = [];

  function handleAddTask() {
    setTasksCount(tasksCount + 1);
  }

  for (let i = 0; i < tasksCount; i++) {
    justForTestingPurposes.push(
      <TaskCard
        key={i}
        title={"Clickable" + i}
        content="With clickable links"
        onAddClick={() => handleAddTask()}
        onEditClick={() => {
          alert("edit");
        }}
        percentage={10}
      />
    );
  }

  return (
    <div className="grid-container">
      <div className="nav demo">
        <div>Navbar</div>
      </div>
      <div className="task-tree demo">{justForTestingPurposes}</div>
      <div className="task-list demo">
        <SupertasksList />
      </div>
      <div className="cred demo">Footer</div>
    </div>
  );
}

export default App;
