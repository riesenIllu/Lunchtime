import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Menu } from "./App/Menu";
import { DishSelection } from "./App/DishSelection";
import { Profile } from "./App/Profile";
import { Checkout } from "./App/Checkout";
import { DishFilter } from "./App/DishFilter";

export class App extends React.Component<Props, State>{

    public render(): React.ReactNode{
        return <div className="app">
            <Router>
                <Menu />
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
        </div>
    }
}

interface Props{}
interface State{}