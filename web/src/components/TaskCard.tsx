import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { Add, Coffee, Edit } from '@mui/icons-material';

import ScrollableContent from './ScrollableContent'
import { MouseEventHandler } from 'react';
import { Link } from '@mui/material';

interface TaskCardConfig {
    title: string
    content: string
    percentage?: string
    disabled?: boolean  // FIXME: disable also the colors?

    onAddClick?: MouseEventHandler
    onEditClick?: MouseEventHandler
}

export default function TaskCard(config: TaskCardConfig) {
  const actions = createActions(config);

  return (
    <Card sx={{maxWidth: 300, display: "inline-block"}}>
      <CardContent>
        <Typography variant="h5" component="div">
        {config.title}
        </Typography>
        <ScrollableContent>
          {config.content}
        </ScrollableContent>
      </CardContent>
      <CardActions>
        {actions}
      </CardActions>
    </Card>
  )
}

function createActions(config: TaskCardConfig) {
  const actions = [];

  actions.push((<Link color='#000'><Coffee /></Link>));

  if (!config.disabled) {
    actions.push((
      <Link href='#' onClick={config.onEditClick}><Edit /></Link>
    ));
    actions.push((
      <Link href='#' onClick={config.onAddClick}><Add /></Link>
    ));
  }

  actions.push((
    <Typography component="div">{config.percentage ? config.percentage : ""}</Typography>
  ));

  return actions;
}
