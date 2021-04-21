import React from "react";
import {Drawer, Button, AppBar, IconButton} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import { ProfileLink } from "./Menu/ProfileLink";
import { Navigation } from "./Menu/Navigation";
import { ThemeSelector } from "./Menu/ThemeSelector";
import { Logo } from "./Logo";


export class Menu extends React.Component<Props, State>{

    constructor(props: Props){
        super(props);
        this.state = {
            open: false
        }
    }

    private toggleDrawerState(): void{
        this.setState({
            open: !this.state.open
        });
    }

    public render(): React.ReactNode{
        return <div className="menu">
            <AppBar className="menu-bar" color="primary">
                <IconButton className="menu-button" edge="start" color="inherit" aria-label="menu" onClick={this.toggleDrawerState.bind(this)}>
                    {this.state.open ? <CloseIcon/> : <MenuIcon/>}
                </IconButton>
                <Logo></Logo>
                <IconButton className="menu-button" edge="start" color="inherit" aria-label="menu">
                    <ShoppingCartIcon />
                </IconButton>
            </AppBar>
            <Drawer className="menu-drawer" anchor="left" open={this.state.open} onClose={this.toggleDrawerState.bind(this)}>
                <div className="drawer-content">
                    <ProfileLink user={{name: "Max Mustermann"}} />
                    <Navigation links={["Checkout", "Favorites"]} />
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