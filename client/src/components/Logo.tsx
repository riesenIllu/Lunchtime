import React from "react";
import {Typography} from "@material-ui/core";

export class Logo extends React.Component {

    public render(): React.ReactNode{
        return <div className="logo">
            <div className="logo-img"></div>
            <Typography variant="h4">LUNCHTIME</Typography>
        </div>
    }
}