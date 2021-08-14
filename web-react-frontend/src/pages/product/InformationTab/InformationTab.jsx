import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import Image from 'material-ui-image';
import BannedIngredientsComponent from './BannedIngredientsComponent';

const useStyles = makeStyles(() => ({
  dateBox: {
    backgroundColor: "LightGrey",
    padding: "10px"
  },
  ruleMessage: {
    backgroundColor: "LightGrey",
    border: "2px solid"
  }
}));


export default function InformationTab({productInfo, isUserAuthenticated}) {
  const styles = useStyles();

  return (
    <Grid container spacing={2} direction="column">
      <Grid item></Grid>
      <Grid item xs={12}>
        <Typography variant="h4">{productInfo.ProductName}</Typography>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={8}>
          <Box maxWidth="400px">
            <Image src={productInfo.ImageHref}/>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="space-evenly">
        <Grid container item xs={5} justifyContent="space-evenly" className={styles.dateBox}>
          <Typography variant="body2">Дата виробництва</Typography>
          <Typography variant="body1">{productInfo.ManufactureDate}</Typography>
        </Grid>
        <Grid container item xs={5} justifyContent="space-evenly" className={styles.dateBox}>
          <Typography variant="body2">Вжити до</Typography>
          <Typography variant="body1">{productInfo.BestBeforeDate}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="p">Кількість: {productInfo.Amount}</Typography>
      </Grid>
      {isUserAuthenticated && <Grid item xs={12}><BannedIngredientsComponent productId={productInfo.Id}/></Grid>}
    </Grid>);
}