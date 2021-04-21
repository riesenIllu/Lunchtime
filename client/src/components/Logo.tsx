import React from "react";
import {Typography} from "@material-ui/core";
import logo from "../Assets/logo_sa.png"

export class Logo extends React.Component {

    public render(): React.ReactNode{
        return <div className="logo">
            <div className="logo-img"><img src={logo} alt="logo"/></div>
            <Typography variant="h4">LUNCHTIME</Typography>
        </div>
    }
}