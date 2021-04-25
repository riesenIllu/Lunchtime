import React from "react";
import { Link } from "react-router-dom";
import {Drawer, Button, AppBar, IconButton, Badge} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import { ProfileLink } from "./Menu/ProfileLink";
import { Navigation } from "./Menu/Navigation";
import { ThemeSelector } from "./Menu/ThemeSelector";
import { Logo } from "../Logo";
import { Base } from "../Base";
import { Application } from "../../Application";


export class Menu extends Base<Props, State>{
    protected get style(): {} {
        return {};
    }

    constructor(props: Props){
        super(props);
        this.state = {
            open: false
        }
        Application.stateStore.subscribe("shoppingCart", (data) => {
            this.forceUpdate();
        })
    }

    private toggleDrawerState(): void{
        this.setState({
            open: !this.state.open
        });
    }

    public render(): React.ReactNode{
        return <div className="menu">
            <AppBar className="menu-bar" color="secondary">
                <IconButton className="menu-button" edge="start" color="inherit" aria-label="menu" onClick={this.toggleDrawerState.bind(this)}>
                    {this.state.open ? <CloseIcon/> : <MenuIcon/>}
                </IconButton>
                <Logo></Logo>
                <Link to="/checkout">
                    <IconButton className="menu-button" edge="start" color="inherit" aria-label="menu">
                        <Badge color="error" badgeContent={Application.stateStore.getState("shoppingCart").length}>
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Link>
            </AppBar>
            <Drawer className="menu-drawer" anchor="left" open={this.state.open} onClose={this.toggleDrawerState.bind(this)}>
                <div className="drawer-content">
                    <ProfileLink user={{name: "Max Mustermann"}} />
                    <Navigation links={[{title: "Dishselection", href: "/dishselection"}, {title: "Edit Profile", href: "/profile"}, {title: "Checkout", href: "/checkout"}]} />
                    <ThemeSelector />
                    <Button className="logout-button">Logout</Button>
                </div>
            </Drawer>
        </div>
    }
}

interface Props{
}

interface State{
    open: boolean;
}