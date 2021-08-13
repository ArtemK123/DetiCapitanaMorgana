import { Box, Typography } from '@material-ui/core';
import Image from 'material-ui-image';
import bountyImage from './assets/bounty.jpg';

export default function ProductComponent({productInfo}) {

  console.log(productInfo);

  return (
    <Box m="10px">
      <Box my="20px">
        <Typography  variant="h4">{productInfo.ProductName}</Typography> 
      </Box>
      <Image src={bountyImage}/>
      <p>Ingredients:<br/>{productInfo.Ingredients}</p>
    </Box>);
}