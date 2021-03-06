import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {Link} from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { SwipeableDrawer } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      backgroundColor: "darkorange"
    },
    burger: {
      margin: '20px'
    }
});

export default function Navigation({isAuthenticated}) {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={classes.root}>
            <MenuIcon onClick={toggleDrawer} className={classes.burger}/>
            <SwipeableDrawer anchor="left" open={isOpen} onClose={toggleDrawer}>
                <div className={classes.list}>
                    <List>
                        <ListItem button component={Link} to={"/"}>
                          <ListItemIcon><HomeIcon/></ListItemIcon>
                          <ListItemText primary={"Початкова сторінка"}/>
                        </ListItem>
                        {isAuthenticated && 
                        <ListItem button component={Link} to={"/rules"}>
                          <ListItemIcon><AccountBoxIcon/></ListItemIcon>
                          <ListItemText primary={"Небажані складові"}/>
                        </ListItem>}
                        {isAuthenticated && 
                        <ListItem button component={Link} to={"/logout"}>
                          <ListItemIcon><ExitToAppIcon/></ListItemIcon>
                          <ListItemText primary={"Вийти з облікового запису"}/>
                        </ListItem>}
                        {!isAuthenticated &&
                        <ListItem button component={Link} to={"/login"}>
                            <ListItemIcon><AccountBoxIcon/></ListItemIcon>
                            <ListItemText primary={"Вхід в обліковий запис"}/>
                        </ListItem>}
                        {!isAuthenticated &&
                        <ListItem button component={Link} to={"/register"}>
                            <ListItemIcon><SupervisorAccountIcon/></ListItemIcon>
                            <ListItemText primary={"Створення облікового запису"}/>
                        </ListItem>}
                    </List>
                </div>
            </SwipeableDrawer>
        </div>
    );
}