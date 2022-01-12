import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { Add, Coffee, Edit } from '@mui/icons-material';

import ScrollableContent from './ScrollableContent'
import { MouseEventHandler } from 'react';
import { Link } from '@mui/material';

import './TaskCard.css'

interface TaskCardConfig {
    title: string
    content: string
    percentage: number

    onAddClick?: MouseEventHandler
    onEditClick?: MouseEventHandler
}

export default function TaskCard(config: TaskCardConfig) {
  const actions = createActions(config);

  return (
    <Card sx={{width: 280, display: "inline-block"}} className="divetimp-task-card">
      <CardContent>
        <Typography variant="h5" component="div">
        {config.title}
        </Typography>

        {config.content}

      </CardContent>
      <CardActions>
        {actions}
      </CardActions>
    </Card>
  )
}

function createActions(config: TaskCardConfig) {
  const actions = [];

  // this is a link since implicitly there's spacing between components
  // with the same type.
  if (config.percentage >= 100) {
    actions.push((<Link component='button' className="divetime-complete-task"><Coffee /></Link>));
  } else {
    actions.push((<Link component='button' className="divetime-incomplete-task"><Coffee /></Link>));
  }

  if (config.onEditClick) {
    actions.push((
      <Link component='button' 
            onClick={config.onEditClick}><Edit /></Link>
    ));
  }

  if (config.onAddClick) {
    actions.push((
      <Link component='button' 
            onClick={config.onAddClick}><Add /></Link>
    ));
  }

  actions.push((
    <Typography component="div">{config.percentage ? config.percentage : ""}</Typography>
  ));

  return actions;
}
