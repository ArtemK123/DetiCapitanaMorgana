import { Box, Grid, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

export default function Landing() {
  const [searchName, setSearchName] = useState("");
  const history = useHistory();
  
  const handleSearch = () => {
    const redirectUrl = `/product?id=1`;
    history.push(redirectUrl);
  }

  return (
    <Box m={2}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Typography variant="h5">YouQuality</Typography>
          <Typography variant="h5" component="p">Перевір свою страву</Typography>
        </Grid>
        <Grid item container direction="row" spacing={1} justifyContent="flex-start" alignItems="center">
          <Grid item>
            <TextField label="Пошук" type="search" variant="outlined" value={searchName} onChange={event => setSearchName(event.target.value)}/>
          </Grid>
          <Grid item>
            <SearchIcon onClick={handleSearch}/>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}