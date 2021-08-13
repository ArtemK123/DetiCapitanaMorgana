import { Grid, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

export default function Landing() {
  const [searchName, setSearchName] = useState("");
  const history = useHistory();
  
  const handleSearch = () => {
    const redirectUrl = `/product?searchName=${searchName}`;
    history.push(redirectUrl);
  }

  return (
    <Grid container>
      <Grid container>
        <Typography variant="h5" gutterBottom>
          YouQuality - check you meal
        </Typography>
      </Grid>
      <Grid container direction="row" justifyContent="flex-start" alignItems="center">
        <TextField id="standard-search" label="Search field" type="search" value={searchName} onChange={event => setSearchName(event.target.value)}/>
        <SearchIcon onClick={handleSearch}/>
      </Grid>
    </Grid>
  );
}