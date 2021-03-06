import React from "react";
import {Route, Switch} from "react-router-dom";
import { Menu } from "./App/Menu";
import { DishSelection } from "./App/DishSelection";
import { Profile } from "./App/Profile";
import { Checkout } from "./App/Checkout";
import { DishFilter } from "./App/DishFilter";
import { Base } from "./Base";

//FIXME: naming
export class App extends Base<Props, State, Style>{
    

    public render(): React.ReactNode{
        return <div className="app">
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
        </div>
    }
}

interface Props{}
interface State{}

interface Style {
}