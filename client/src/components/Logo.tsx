import React from "react";
import {Typography} from "@material-ui/core";
import logo from "../assets/logo_sa.png"
import { Link } from "react-router-dom";

export class Logo extends React.Component {

    public render(): React.ReactNode{
        return <div className="logo">
            <Link to="/"><div className="logo-img"><img src={logo} alt="logo"/></div></Link>
            <Typography variant="h4">LUNCHTIME</Typography>
        </div>
    }
}