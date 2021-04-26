import React from "react";
import {Container, Typography, TextField, Button} from "@material-ui/core";
import {Logo} from "./Logo";
import { Base } from "./Base";
import { Link } from "react-router-dom";

export class PassRecovery extends Base<Props, State>{
    protected get style(): {} {
        return {};
    }

    public render(): React.ReactNode{
        return <div className="pass-recovery">
            <Logo />
            <Typography className="headline" variant="h3">{this.locale("recovery_title")}</Typography>
            <Container className="form-container">
                <form className="form">
                <TextField 
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label={this.locale("email_input_title")}
                    placeholder={this.locale("email_input_placeholder")}
                    name="email"
                    autoComplete="email"
                    autoFocus/>
                <TextField 
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label={this.locale("email_input_title")}
                    placeholder={this.locale("email_input_placeholder_2")}
                    name="email"
                    autoComplete="email"/>
                <Button 
                    fullWidth
                    variant="contained"
                    color="primary">
                    {this.locale("login_recovery_button")}
                    
                </Button>
                <Button 
                    fullWidth
                    variant="outlined"
                    color="primary"
                    component={Link} to="/">
                    {this.locale("to_login_button")}
                </Button>
                </form>
            </Container>
        </div>
    }

}

interface Props {

}

interface State{

}