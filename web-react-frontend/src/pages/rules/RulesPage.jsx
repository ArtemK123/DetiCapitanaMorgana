import { Box, Grid, Typography } from "@material-ui/core";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import Loader from "../../components/Loader";
import TextItemList from "../../components/TextItemList";
import BackendService from "../../services/BackendService";
import isUserAuthenticated from "../../services/isUserAuthenticated";

export default function RulesPage() {
  const [rules, setRules] = useState(undefined);
  const backendService = new BackendService();

  if (!isUserAuthenticated()) {
    return (<Redirect to="/"/>);
  }

  if (!rules) {
    backendService.getRules()
      .then(fetchedRules => setRules(fetchedRules));    
    
    return <Loader></Loader>
  }

  return (
    <Box m={2}>
      <Grid container spacing={2}>
        <Grid item>
          <Typography variant="h4">Небажані складові</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">Виберіть складові, які ви бажаєте відслідковувати.</Typography>
          <Typography variant="body2">Ми попередимо вас, якщо знайдемо ці продукти у складі відсканованих товарах.</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">Наразі відслідковуються:</Typography>
          <TextItemList items={rules}></TextItemList>
        </Grid>
      </Grid>
    </Box>);
}