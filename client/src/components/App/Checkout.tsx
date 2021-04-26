import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import React from "react";
import { Application } from "../../Application";
import { Dish } from "../../application/Collections";
import { Base } from "../Base";

export class Checkout extends Base<Props, State>{

    constructor(props: Props){
        super(props);
        this.state = {
            shoppingCart: Application.stateStore.getState("shoppingCart")
        }
        this.subscribeToState("shoppingCart", (state) => {
            this.setState({
                shoppingCart: state
            });
        });
    }

    private totalPrice(): number{
        var result = 0;
        this.state.shoppingCart.forEach(dish => {
            result += parseFloat(dish.price as string)
        })
        return result;
    }

    private renderOrderList(): React.ReactNode[]{
        return this.state.shoppingCart.map(dish => {
            return <ListItem className="dish-order" key={dish.name}>
                <ListItemText primary={dish.name} />
                <Typography variant="body2">{dish.price}</Typography>
            </ListItem>
        })
    }

    public render(): React.ReactNode{
        return <div className="checkout">
            <Typography variant="h3">{this.locale("order_summary")}</Typography>
            <List>
                {this.renderOrderList()}
                <ListItemText primary={this.locale("total_price")} />
                <Typography variant="subtitle1">{this.totalPrice()}</Typography>
            </List>
        </div>
    }
}

interface Props{
}

interface State{
    shoppingCart: Dish[];
}