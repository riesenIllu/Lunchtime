import React from "react";
import {Login} from "./Login";
import {App} from "./App";
import { Theme, ThemeProvider } from "@material-ui/core/styles";
import { Application } from "../Application";
import { Base } from "./Base";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { PassRecovery } from "./PassRecovery";
import { getTheme } from "../application/theme";


export class Root extends Base<Props, State> {

    
    constructor(props: Props){
        super(props);
        this.state = {
            loggedIn: Application.stateStore.getState("loggedIn"),
            theme: getTheme(Application.stateStore.getState("theme"))
        };
        this.subscribeToState("loggedIn", (state) => {
            this.setState({
                loggedIn: state
            })
        });
        this.subscribeToState("theme", (state) => {
            this.setState({
                theme: getTheme(state)
            })
        })
    }
    
    public componentWillUnmount(): void{
        
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
        console.log(this.state.theme);
        return <div className={"lt-component-root " + Application.stateStore.getState("theme")}>
            <div className="background"></div>
            <Router>
                <ThemeProvider theme={this.state.theme} >
                    {this.state.loggedIn ? <App /> : this.renderLoginRecoverySwitch()}
                </ThemeProvider>
            </Router>
        </div>
    }

}

export interface Props {
}

export interface State {
    loggedIn: boolean;
    theme: Theme;
}