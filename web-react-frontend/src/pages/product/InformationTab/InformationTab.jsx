import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import Image from 'material-ui-image';
import bountyImage from './bounty.jpg';
import WarningIcon from '@material-ui/icons/Warning';
import { Link } from 'react-router-dom';

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

export default function InformationTab({productInfo}) {
  const styles = useStyles();

  return (
    <Box mx={2}>
      <Box my={2}>
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
      <Box mt={2}>
        <Grid container spacing={3} justifyContent="space-evenly">
          <Grid container item xs={12}>
            <Grid item xs={1}>
              <WarningIcon></WarningIcon>
            </Grid>
            <Grid item xs={11}>
              <Typography variant="body2">Цей товар містить лактозу</Typography>
              <Link to="/">Дізнатись більше</Link>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={1}>
              <WarningIcon></WarningIcon>
            </Grid>
            <Grid item xs={11}>
              <Typography variant="body2">Цей товар містить глютен</Typography>
              <Link to="/">Дізнатись більше</Link>
            </Grid>
          </Grid>  
        </Grid>
      </Box>
    </Box>);
}