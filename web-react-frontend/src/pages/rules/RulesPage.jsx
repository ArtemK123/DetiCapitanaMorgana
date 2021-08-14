import { Box, Grid, IconButton, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Typography } from "@material-ui/core";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import Loader from "../../components/Loader";
import BackendService from "../../services/BackendService";
import isUserAuthenticated from "../../services/isUserAuthenticated";
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import DeleteIcon from '@material-ui/icons/Delete';

export default function RulesPage(props) {
  props.setIsAuthenticated(isUserAuthenticated())
  const [bannedIngredients, setBannedIngredients] = useState(undefined);
  const backendService = new BackendService();

  if (!isUserAuthenticated()) {
    return (<Redirect to="/"/>);
  }

  if (!bannedIngredients) {
    backendService.getRules()
      .then(ingredients => setBannedIngredients(ingredients));

    return <Loader></Loader>
  }

  return (
    <Box m={2}>
      <Grid container spacing={2}>
        <Grid item>
          <Typography variant="h4">Небажані складові</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">Виберіть складові, які ви бажаєте відслідковувати.</Typography>
          <Typography variant="body2">Ми попередимо вас, якщо знайдемо ці продукти у складі відсканованих товарах.</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">Наразі відслідковуються:</Typography>
          <List>
            {bannedIngredients.map(ingredient =>
              <ListItem key={ingredient} xs={12}>
                <ListItemIcon>
                  <ArrowForwardIosRoundedIcon/>
                </ListItemIcon>
                <ListItemText primary={ingredient}/>
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
              </ListItem>
            )}
          </List>
        </Grid>
      </Grid>
    </Box>);
}