import {Button, Grid, Link, TextField, Typography} from "@material-ui/core";

export default function RegisterPage() {
  return (
      <Grid container spacing={4} direction="column">
        <Grid item xs={12} container justifyContent="center">
          <Grid item xs={12} container justifyContent="center">
            <Typography variant="h4">Реєстрація</Typography>
          </Grid>
          <TextField
              label="Прізвище"
              required/>
          <TextField
              label="Ім'я"
              required/>
          <TextField
              label="E-mail"
              required/>
          <TextField
              type="password"
              label="Пароль"
              required/>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Button variant="contained" color="primary">Зареєструватися</Button>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Link href="/login">Вхід</Link>
        </Grid>
      </Grid>
  );
}