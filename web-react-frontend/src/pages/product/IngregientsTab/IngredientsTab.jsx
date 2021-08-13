import { Grid, List, ListItem, ListItemText, Typography } from "@material-ui/core";
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

export default function IngredientsTab({productInfo}) {
  const generateIngredientItem = (ingredient) => {
    return (
      <ListItem>
        <ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon>
        <ListItemText>{ingredient}</ListItemText>
      </ListItem>);
  }
  
  return (
    <Grid container spacing={2} direction="column">
      <Grid item></Grid>
      <Grid item xs={12}>
        <Typography variant="h4">{productInfo.ProductName}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Склад продукту:</Typography>
        <List>
          {productInfo.Ingredients.map(generateIngredientItem)}
        </List>
      </Grid>
    </Grid>);
}