import { Grid, Typography } from "@material-ui/core";
import TextItemList from "../../../components/TextItemList";

export default function IngredientsTab({productInfo}) {
  return (
    <Grid container spacing={2} direction="column">
      <Grid item></Grid>
      <Grid item xs={12}>
        <Typography variant="h4">{productInfo.ProductName}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="p">Склад продукту:</Typography>
        <TextItemList items={productInfo.Ingredients}/>
      </Grid>
    </Grid>);
}