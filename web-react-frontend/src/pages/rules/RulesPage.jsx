import { Box, Grid, IconButton, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import Loader from "../../components/Loader";
import BackendService from "../../services/BackendService";
import isUserAuthenticated from "../../services/isUserAuthenticated";
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';

const backendService = new BackendService();

export default function RulesPage() {
  const [bannedIngredients, setBannedIngredients] = useState(undefined);
  const [isNewIngredientInputShown, setIsNewIngredientInputShown] = useState(false);
  const [newIngredient, setNewIngredient] = useState("");

  if (!isUserAuthenticated()) {
    return (<Redirect to="/"/>);
  }

  if (!bannedIngredients) {
    fetchBannedIngredientsAsync();
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
        <Grid item xs={12}>
          <Typography variant="body1">Наразі відслідковуються:</Typography>
          <Box maxWidth={600}>
            <List>
              {bannedIngredients.map(ingredient =>
                <ListItem key={ingredient} xs={12}>
                  <ListItemIcon>
                    <ArrowForwardIosRoundedIcon/>
                  </ListItemIcon>
                  <ListItemText primary={ingredient}/>
                  <ListItemSecondaryAction>
                    <IconButton edge="end" onClick={() => handleDeleteIngredient(ingredient)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              )}
            </List>
          </Box>
        </Grid>
        {isNewIngredientInputShown ? generateNewIngredientInput() : generateShowIngredientInputButton()}
      </Grid>
    </Box>);

  function handleDeleteIngredient(ingredient) {
    backendService.deleteBannedIngredientAsync(ingredient)
      .then(fetchBannedIngredientsAsync);
  }

  function handleAddIngredient() {
    backendService.addBannedIngredientAsync(newIngredient)
      .then(() => {
        setIsNewIngredientInputShown(false);
        setNewIngredient("");
        return Promise.resolve();
      })
      .then(fetchBannedIngredientsAsync);
  }

  function fetchBannedIngredientsAsync() {
    backendService.getBannedIngredientsAsync()
      .then(ingredients => setBannedIngredients(ingredients));
  }

  function generateShowIngredientInputButton() {
    return (
    <Grid item xs={12} container alignItems="center" onClick={() => setIsNewIngredientInputShown(true)}>
      <Grid item>
        <AddCircleIcon/>
      </Grid>
      <Grid item>
        <Typography variant="body1">Додати складову</Typography>
      </Grid>
    </Grid>);
  }

  function generateNewIngredientInput() {
    return (
      <Grid item container xs={12}>
        <Grid item>
          <TextField label="Нова складова" variant="outlined" value={newIngredient} onChange={event => setNewIngredient(event.target.value)}/>
        </Grid>
        <Grid item>
          <IconButton onClick={handleAddIngredient}>
            <DoneIcon />
          </IconButton>
          <IconButton onClick={() => setIsNewIngredientInputShown(false)}>
            <ClearIcon />
          </IconButton>
        </Grid>
      </Grid>
    );
  }
}