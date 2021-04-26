import {Container, Typography, TextField, Button} from "@material-ui/core";
import {Logo} from "./Logo";
import { Base } from "./Base";
import { Application } from "../Application";
import {Login as LoginAction} from "../application/actions/Login"
import { Link } from "react-router-dom";

export class Login extends Base<Props, State>{

    // protected get style(): Style{
    //     return {
    //         login: {
    //             marginTop: "50%"
    //         },
    //         headline:{
    //             display: "block",
    //             margin: "auto",
    //             width: "fit-content"
    //         },
    //         button: {
    //             margin: "0.5em 0"
    //         },
    //         formContainer: {
    //             display: "flex",
    //             justifyContent: "center",
    //             alignItems: "center"
    //         }
    //     };
    // }

    public render(): React.ReactNode{
        return <div className="login">
            <Logo />
            <Typography className="headline" variant="h3">{this.locale("login_title")}</Typography>
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
                    id="password"
                    label={this.locale("password_input_title")}
                    placeholder={this.locale("password_input_placeholder")}
                    name="password"
                    type="password"/>
                <Button 
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => {Application.stateStore.executeAction(LoginAction, true)}}>
                    {this.locale("login_button")}
                    
                </Button>
                <Button 
                    fullWidth
                    variant="outlined"
                    color="primary"
                    component={Link} to="/passrecovery">
                    {this.locale("login_recovery_button")}
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