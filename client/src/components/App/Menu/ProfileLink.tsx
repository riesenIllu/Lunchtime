import React from "react";
import { Avatar, Typography } from "@material-ui/core";
import { Base } from "../../Base";

export class ProfileLink extends Base<Props, State>{
    protected get style(): {} {
        return {};
    }

    public render(): React.ReactNode{
        return <div className="profile-link">
            <Avatar>WIP</Avatar>
            <Typography variant="body1">{this.props.user.name}</Typography>
        </div>
    }
}

interface Props{
    user: User;
}

interface State{

}

interface User{
    name: string;
}