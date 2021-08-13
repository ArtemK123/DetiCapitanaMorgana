import { Grid, Typography } from "@material-ui/core";

export default function NutritionTab({productInfo}) {
  return (
    <Grid container spacing={2} direction="column">
      <Grid item></Grid>
      <Grid item xs={12}>
        <Typography variant="h4">{productInfo.ProductName}</Typography>
      </Grid>
    </Grid>);
}