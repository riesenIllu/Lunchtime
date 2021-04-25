import React from "react";
import { Base } from "../Base";

export class Profile extends Base{
    protected get style(): {} {
        return {};
    }

    public render(): React.ReactNode{
        return <div>Hello</div>
    }
}