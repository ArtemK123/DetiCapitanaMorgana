import { Grid, Typography } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../../components/Loader';
import BackendService from '../../../services/BackendService';

const backendService = new BackendService();

export default function BannedIngredientsComponent({productId}) {
  const [bannedIngredients, setBannedIngredients] = useState(undefined);

  if (!bannedIngredients) {
    backendService.checkBannedIngredientsInProductAsync(productId)
      .then(setBannedIngredients);
    return <Loader/>;
  }

  return (
    <Grid container spacing={3} justifyContent="space-evenly">
      {bannedIngredients.map(generateBannedIngredientElement)}
    </Grid>);

  function generateBannedIngredientElement(ingredient) {
    return (
      <Grid container item key={ingredient} xs={12}>
        <Grid item xs={1}>
          <WarningIcon></WarningIcon>
        </Grid>
        <Grid item xs={11}>
          <Typography variant="body2">Цей товар містить {ingredient}</Typography>
          <Link to="/">Дізнатись більше</Link>
        </Grid>
      </Grid>
    );
  }
}