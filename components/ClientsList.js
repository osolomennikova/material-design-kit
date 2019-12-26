import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "../styles/main.scss";

const useStyles = makeStyles(theme => ({
    root: {
      display: "flex"
    },
  }));
  

function ClientsList() {
    const classes = useStyles();

    return (
        <div className="scaleContainer">
      <Typography variant="h6" className="titleScale">
          New Clients
      </Typography>
      </div>
    )
}

export default ClientsList;
