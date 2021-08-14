import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  tabs: {
    color: "black",
    backgroundColor: "white",
    indicatorColor: "darkorange"
  }
}));

export default function CurrentTabSelector({currentTab, setCurrentTab}) {
  const classes = useStyles();
  const handleChange = (_, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs className={classes.tabs} value={currentTab} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Інформація" {...a11yProps(0)} />
          <Tab label="Склад" {...a11yProps(1)} />
          <Tab label="Поживна цінність" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
    </div>
  );
}