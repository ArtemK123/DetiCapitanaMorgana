import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import Image from 'material-ui-image';
import bountyImage from './assets/bounty.jpg';

const useStyles = makeStyles(() => ({
  dateBox: {
    backgroundColor: "LightGrey",
    padding: "10px"
  }
}));

export default function InformationTab({productInfo}) {
  const styles = useStyles();

  return (
    <Box m="10px">
      <Box my="20px">
        <Typography  variant="h4">{productInfo.ProductName}</Typography> 
      </Box>
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          <Image src={bountyImage}/>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-evenly">
        <Grid container item xs={5} justifyContent="space-evenly" className={styles.dateBox}>
          <Typography variant="body2">Дата виробництва</Typography>
          <Typography variant="body1">{productInfo.ManufactureDate}</Typography>
        </Grid>
        <Grid container item xs={5} justifyContent="space-evenly" className={styles.dateBox}>
          <Typography variant="body2">Вжити до</Typography>
          <Typography variant="body1">{productInfo.BestBeforeDate}</Typography>
        </Grid>
      </Grid>
    </Box>);
}