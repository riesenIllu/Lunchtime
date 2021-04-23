import React from "react";
import { Link as DomLink } from "react-router-dom";

export class Navigation extends React.Component<Props,State>{

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