import { FormControlLabel, Switch } from "@material-ui/core";
import React from "react";
import { Application } from "../../../Application";
import { Theme } from "../../../application/actions/Theme";
import { Base } from "../../Base";

export class ThemeSelector extends Base<Props,State>{

    constructor(props: Props){
        super(props);
        this.state = {
            darkMode: Application.stateStore.getState("theme") === "dark"
        }
        this.subscribeToState("theme", (state) => {
            this.setState({
                darkMode: state === "dark"
            })
        })
    }

    private setDarkMode(): void{
        Application.stateStore.executeAction(Theme, this.state.darkMode ? "light" : "dark");
    }

    public render(): React.ReactNode{
        return <div className="theme-selector">
            {"Darkmode"}
            <FormControlLabel control={<Switch size="small" checked={this.state.darkMode} onChange={this.setDarkMode.bind(this)} />}label=""/>
        </div>;
    }
}

interface Props {};
interface State {
    darkMode: boolean;
};