import React from "react";
import { Theme, ThemeProvider } from "@material-ui/core/styles";
import {Login} from "./Login";
import { Logo } from "./Logo";
import { Menu } from "./Menu";

export class Root extends React.Component<Props, State> {


    public render(): React.ReactNode{
        return <div className="lt-component-root">
            <ThemeProvider theme={this.props.theme} >
                <Menu />
            </ThemeProvider>
        </div>
    }

}

export interface Props {
    theme: Theme;
}

export interface State {
    open: boolean;
}