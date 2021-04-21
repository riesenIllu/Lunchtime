import React from "react";

export class Navigation extends React.Component<Props,State>{

    public render(): React.ReactNode{
        return <div className="navigation">
            {this.props.links.map(link => {
                return <div className="link">{link}</div>
            })}
        </div>
    }

}

interface Props{
    links: string[];
};
interface State{};