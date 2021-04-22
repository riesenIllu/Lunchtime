import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Theme, ThemeProvider } from "@material-ui/core/styles";
import {Login} from "./Login";
import { Menu } from "./Menu";
import { DishSelection } from "./DishSelection";
import { Profile } from "./Profile";
import { Checkout } from "./Checkout";
import { DishFilter } from "./DishFilter";

export class Root extends React.Component<Props, State> {

    constructor(props: Props){
        super(props);
        this.state = {
            loggedIn:false
        };
    }


    public render(): React.ReactNode{
        return <div className="lt-component-root">
            <ThemeProvider theme={this.props.theme} >
                <Menu />
                <Router>
                    <div className="content">
                        <Switch>
                            <Route exact path={["/", "/dishselection"]}>
                                <DishSelection/>
                            </Route>
                            <Route exact path="/filter">
                                <DishFilter/>
                            </Route>
                            <Route exact path="/profile">
                                <Profile/>
                            </Route>
                            <Route exact path="/checkout">
                                <Checkout/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </ThemeProvider>
        </div>
    }

}

export interface Props {
    theme: Theme;
}

export interface State {
    loggedIn: boolean;
}