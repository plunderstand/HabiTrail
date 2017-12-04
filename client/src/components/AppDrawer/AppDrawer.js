import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import { MenuItem } from 'material-ui/Menu';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import HomeIcon from 'material-ui-icons/Home';
import ListIcon from 'material-ui-icons/List';
import { Link } from "react-router-dom";
import Grid from 'material-ui/Grid';
// import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const drawerWidth = '240px';

const styles = theme => ({
  drawerPaper: {
    // display: "hidden",
    position: 'absolute',
    height: '100%',
    width: drawerWidth,
    // backgroundColor: "red",
  },
  drawerHeader: theme.mixins.toolbar,
  content: {
    // backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    // [theme.breakpoints.up('sm')]: {
    //   height: 'calc(100% - 64px)',
    //   marginTop: 64,
    // },
  },
});

class AppDrawer extends React.Component {
 
  homeClick = () => {
    console.log('Ding!');
  };
  habitClick = () => {
    console.log('Dong!');
  };

  render() {
    const { classes } = this.props;

    return (
      <Drawer
        type="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.drawerHeader} />
        <Divider />

        {/* <Grid container justify="spaceBetween"> */}
        {/* <Grid item xs={12}> */}
          <Link style={{ textDecoration: 'none' }} to="/">
            <ListItem button onClick={this.homeClick}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/habits">
            <ListItem button onClick={this.habitClick}>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="Habits" />
            </ListItem>
          </Link>
        {/* </Grid> */}
        {/* <Grid item xs={12}> */}
            <ListItem button onClick={this.homeClick}>
              <ListItemIcon style={{opacity: 0}}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          {/* </Grid> */}
        {/* </Grid> */}
      </Drawer>
    );
  }
}

AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppDrawer);