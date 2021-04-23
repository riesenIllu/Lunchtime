import React from "react";
import {Login} from "./Login";
import {App} from "./App";
import { Theme, ThemeProvider } from "@material-ui/core/styles";


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
                <App />
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