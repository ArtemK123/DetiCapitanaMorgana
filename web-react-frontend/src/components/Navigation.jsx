import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {Link} from 'react-router-dom';
import isUserAuthenticated from "../services/isUserAuthenticated";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
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
        <div>
            <MenuIcon onClick={toggleDrawer} className={classes.burger}/>
            <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
                <div className={classes.list}>
                    <List>
                        <ListItem button component={Link} to={"/"}>
                            <ListItemIcon><HomeIcon/></ListItemIcon>
                            <ListItemText primary={"Початкова сторінка"}/>
                        </ListItem>
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
            </Drawer>
        </div>
    );
}