import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { Add, Coffee, Edit } from "@mui/icons-material";

import { MouseEventHandler } from "react";
import { Link } from "@mui/material";

import "./TaskCard.css";

interface TaskCardConfig {
  title: string;
  content: string;
  percentage: number;

  onAddClick?: MouseEventHandler;
  onEditClick?: MouseEventHandler;
}

export default function TaskCard(config: TaskCardConfig) {
  const actions = createActions(config);

  return (
    <Card
      sx={{ width: 280, display: "inline-block" }}
      className="divetimp-task-card"
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {config.title}
        </Typography>

        {config.content}
      </CardContent>
      <CardActions className="divetime-task-status">{actions}</CardActions>
    </Card>
  );
}

function createActions(config: TaskCardConfig) {
  const actions = [];

  if (config.percentage >= 100) {
    actions.push(
      <div className="divetime-task-status-item">
        <Coffee className="divetime-task-status-complete" />
      </div>
    );
  } else {
    actions.push(
      <div className="divetime-task-status-item">
        <Coffee className="divetime-task-status-incomplete" />
      </div>
    );
  }

  if (config.onEditClick) {
    actions.push(
      <Link
        component="button"
        className="divetime-task-status-item"
        onClick={config.onEditClick}
      >
        <Edit />
      </Link>
    );
  }

  if (config.onAddClick) {
    actions.push(
      <Link
        component="button"
        className="divetime-task-status-item"
        onClick={config.onAddClick}
      >
        <Add />
      </Link>
    );
  }

  actions.push(
    <Typography className="divetime-task-status-item" component="div">
      {config.percentage ? config.percentage : ""}
    </Typography>
  );

  return actions;
}
