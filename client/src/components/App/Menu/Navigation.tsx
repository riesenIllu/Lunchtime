import React from "react";
import { Link as DomLink } from "react-router-dom";
import { Base } from "../../Base";

export class Navigation extends Base<Props,State>{
    protected get style(): {} {
        return {};
    }


    public render(): React.ReactNode{
        return <div className="navigation">
            {this.props.links.map(link => {
                return <div className="link">
                    <DomLink to={link.href}>{link.title}</DomLink>
                </div>
            })}
        </div>
    }

}

interface Props{
    links: Link[];
};

interface Link {
    title: string;
    href: string;
}

interface State{};