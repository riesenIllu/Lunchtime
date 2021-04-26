import React from "react";
import {Login} from "./Login";
import {App} from "./App";
import { Theme, ThemeProvider } from "@material-ui/core/styles";
import { Application } from "../Application";
import { Base } from "./Base";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { PassRecovery } from "./PassRecovery";


export class Root extends Base<Props, State> {

    
    constructor(props: Props){
        super(props);
        this.state = {
            loggedIn: Application.stateStore.getState("loggedIn")
        };
        Application.stateStore.subscribe("loggedIn", (state) => {
            this.setState({
                loggedIn: state
            })
        })
    }
    
    protected get style(): {} {
        return {};
    }

    private renderLoginRecoverySwitch(): React.ReactNode{
        return <div>
            <Switch>
                <Route exact path={["/", "/login"]}>
                    <Login />
                </Route>
                <Route exact path="/passrecovery">
                    <PassRecovery/>
                </Route>
            </Switch>
        </div>
    }

    public render(): React.ReactNode{
        return <div className="lt-component-root">
            <Router>
                <ThemeProvider theme={this.props.theme} >
                    {this.state.loggedIn ? <App /> : this.renderLoginRecoverySwitch()}
                </ThemeProvider>
            </Router>
        </div>
    }

}

export interface Props {
    theme: Theme;
}

export interface State {
    loggedIn: boolean;
}