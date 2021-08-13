import { List, ListItem, ListItemText } from "@material-ui/core";
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

export default function TextItemList({items}) {
  const generateItem = (item) => {
    return (
      <ListItem key={item}>
        <ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon>
        <ListItemText>{item}</ListItemText>
      </ListItem>);
  }
  
  return (
    <List>
      {items.map(generateItem)}
    </List>
  );
}