import {Button, Grid, TextField, Typography} from "@material-ui/core";
import Image from "material-ui-image";
import {useState} from "react";
import BackendService from "../../services/BackendService";
import {useHistory} from "react-router-dom";
import isUserAuthenticated from "../../services/isUserAuthenticated";

export default function LoginPage({setIsAuthenticated}) {
    const [wasSubmitPressed, setWasSubmitPressed] = useState({value:false});
    const backendService = new BackendService();
    const history = useHistory();
    let loginValue = "";
    let passwordValue = "";

    function onLoginChange(value) {
        loginValue = value.target.value
    }

    function onPasswordChange(value) {
        passwordValue = value.target.value
    }

    function onSubmit() {
        backendService.login(loginValue, passwordValue).then(userValue => {
            if(userValue){
                localStorage.setItem("user", JSON.stringify(userValue))
                localStorage.setItem("isLoggedIn", "true")
                let path = `/`;
                console.log(setIsAuthenticated)
                setIsAuthenticated(isUserAuthenticated())
                history.push(path);
            }
        })
        setWasSubmitPressed({value:true});
    }

    return (
        <Grid container spacing={4} direction="column">
            <Grid item xs={12} container justifyContent="center">
                <Grid item xs={12} container justifyContent="center">
                    <Typography variant="h4">Вхід</Typography>
                </Grid>
                <TextField
                    error={wasSubmitPressed.value}
                    onChange={onLoginChange}
                    label="Логін"
                    required/>
                <TextField
                    error={wasSubmitPressed.value}
                    onChange={onPasswordChange}
                    type="password"
                    label="Пароль"
                    required/>
            </Grid>
            <Grid item xs={12} container justifyContent="center">
                <Button onClick={onSubmit} variant="contained" color="primary">Увійти</Button>
            </Grid>
            <Grid item xs={12} container spacing={2} justifyContent="center">
                <Grid item xs={3}>
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/DiiaLogo.svg/1200px-DiiaLogo.svg.png"/>
                </Grid>
                <Grid item xs={3}>
                    <Image
                        src="https://images.thepage.ua/storage/86774/conversions/privatbank-r0-square_medium.jpg?v=1603812987"/>
                </Grid>
                <Grid item xs={3}>
                    <Image src="data:image/jpeg;base64,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"/>
                </Grid>
            </Grid>
        </Grid>
    );
}