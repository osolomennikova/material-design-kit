import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../styles/main.scss";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from "@material-ui/core/Typography";
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles(theme => ({
  card: {
    border: "1px solid  #9b9b9b",
    marginTop: '40px'
  }
}));

function ClientsList() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
    <CardContent>
          <Typography variant="h6">
            New Clients
          </Typography>
          </CardContent>
    <CardHeader
      avatar={
        <Avatar className={classes.avatar} />
      }
      action={
        <IconButton color="disabled">
          <MoreVertIcon />
        </IconButton>
      }
      title="Nicci Troiani"
      subheader="Chicago, IL"
    />
    <CardHeader
      avatar={
        <Avatar className={classes.avatar} />
      }
      action={
        <IconButton color="disabled">
          <MoreVertIcon />
        </IconButton>
      }
      title="George Fields "
      subheader="New York, NY"
    />
    <CardHeader
      avatar={
        <Avatar className={classes.avatar} />
      }
      action={
        <IconButton color="disabled">
          <MoreVertIcon />
        </IconButton>
      }
      title="Jones Troiani"
      subheader="San Francisco, CA"
    />
    <CardHeader
      avatar={
        <Avatar className={classes.avatar} />
      }
      action={
        <IconButton color="disabled">
          <MoreVertIcon />
        </IconButton>
      }
      title="Jane Troiani"
      subheader="Chicago, IL"
    />
    </Card>
  );
}

export default ClientsList;
