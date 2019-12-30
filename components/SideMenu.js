import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ChatIcon from "@material-ui/icons/Chat";
import GroupIcon from "@material-ui/icons/Group";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";
import AssignmentIcon from "@material-ui/icons/Assignment";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SettingsIcon from "@material-ui/icons/Settings";
import "../styles/main.scss";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  },
  avatarContainer: {
    padding: "30px 0 30px 15px"
  },
  usernameContainer: {
    padding: "0 0 20px 15px"
  },
  settingsSidemenuContainer: {
    color: "grey",
    padding: "10px 0 10px 15px"
  }
}));

function SideMenu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <div className={classes.avatarContainer}>
          <Avatar />
        </div>
        <div className={classes.usernameContainer}>
          <Typography variant="h6">Clava Coca</Typography>
        </div>
        <Divider />
        <List>
          <Link className='router-link' to="/dashboard">
            <ListItem button key={"Dashboard"}>
              <ListItemIcon>
                <ViewQuiltIcon />
              </ListItemIcon>
              <ListItemText primary={"Dashboard"} />
            </ListItem>
          </Link>
          <ListItem button key={"Messages"}>
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary={"Messages"} />
          </ListItem>
          <ListItem button key={"My Tasks"}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary={"My Tasks"} />
          </ListItem>
          <ListItem button key={"Clients"}>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary={"Clients"} />
          </ListItem>
        </List>
        <Divider />
        <div className={classes.settingsSidemenuContainer}>
          <Typography variant="subtitle1">Settings</Typography>
        </div>
        <List>
          <ListItem button key={"Main Settings"}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={"Main Settings"} />
          </ListItem>
          <ListItem button key={"Notifications"}>
            <ListItemIcon>
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText primary={"Notifications"} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default SideMenu;
