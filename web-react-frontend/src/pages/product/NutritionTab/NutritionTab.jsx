import { Grid, Typography } from "@material-ui/core";
import TextItemList from "../../../components/TextItemList";

export default function NutritionTab({productInfo}) {
  const convertObjectToArray = (obj) => Object.entries(obj).map(([key, value]) => `${key}: ${value}`);
  
  return (
    <Grid container spacing={2} direction="column">
      <Grid item></Grid>
      <Grid item xs={12}>
        <Typography variant="h4">{productInfo.ProductName}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="p">Поживна цінність:</Typography>
        <TextItemList items={convertObjectToArray(productInfo.Nutritions)}/>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="p">Енергетична цінність:</Typography>
        <TextItemList items={convertObjectToArray(productInfo.Energy)}/>
      </Grid>
    </Grid>);
}