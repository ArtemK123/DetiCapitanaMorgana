import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  productComponentContainer: {
    margin: "10px"
  }
}));

export default function ProductComponent({productInfo}) {
  const styles = useStyles();

  return (
    <Box className={styles.productComponentContainer}>
      <h3>{productInfo.ProductName}</h3>
      <p>Id: {productInfo.Id}</p>
      <p>Ingredients:<br/>{productInfo.Ingredients}</p>
    </Box>);
}