import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import GroupIcon from "@material-ui/icons/Group";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ReportIcon from '@material-ui/icons/Report';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    '&:hover': {
        background: "#2196f3",
        cursor: 'pointer',
        color: 'white'
     },
  }
}));

function Summary() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
          <GroupIcon fontSize="large" />
          <Typography variant="subtitle1">128</Typography>
          <Typography variant="caption">Clients</Typography>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <AssignmentTurnedInIcon fontSize="large" />
          <Typography variant="subtitle1">32</Typography>
          <Typography variant="caption">Completed tasks</Typography>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <NotificationsIcon fontSize="large" />
          <Typography variant="subtitle1">2</Typography>
          <Typography variant="caption">Notifications</Typography>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <ReportIcon fontSize="large" />
          <Typography variant="subtitle1">4</Typography>
          <Typography variant="caption">Reports</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Summary;
