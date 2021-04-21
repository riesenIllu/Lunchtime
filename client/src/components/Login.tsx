import React from "react";
import {Container} from "@material-ui/core"
import {Typography} from "@material-ui/core";
import {TextField} from "@material-ui/core";
import {Button} from "@material-ui/core";


export class Login extends React.Component<Props, State>{

    public render(): React.ReactNode{
        return <div className="login">
            <Typography className="headline" variant="h3">Login</Typography>
            <Container className="form-container">
                <form className="form">
                <TextField 
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus/>
                <TextField 
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    autoComplete=""/>
                <Button 
                    fullWidth
                    variant="contained"
                    type="submit"
                    color="primary">
                    Anmelden
                </Button>
                <Button 
                    fullWidth
                    variant="outlined"
                    color="primary">
                    Passwort vergessen
                </Button>
                </form>
            </Container>
        </div>
    }

}

export interface Props {

}

export interface State{

}