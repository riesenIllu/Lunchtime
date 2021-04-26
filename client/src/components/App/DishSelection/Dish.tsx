import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Base } from "../../Base";
import {Dish as DishData} from "../../../application/Collections";
import image from "../../../assets/Rectangle_134.png"
import { Application } from "../../../Application";
import { AddToShoppingCart } from "../../../application/actions/AddToShoppingCart";

export class Dish extends Base<Props,State>{

    private addToShoppingCart(): void{
        Application.stateStore.executeAction(AddToShoppingCart, this.props.dishData);
    }

    public render(): React.ReactNode{
        return <div className="dish">
            <Card className="dish-card">
                <CardMedia className="dish-image" image={image} />
                <Typography className="dish-price" variant="subtitle1">{this.props.dishData.price}€</Typography>
                <CardContent className="dish-content">
                    <Typography className="dish-name" variant="body2" color="textSecondary" component="p">
                        {this.props.dishData.name}
                    </Typography>
                    <ShoppingCartIcon className="dish-order-button" onClick={this.addToShoppingCart.bind(this)} />
                </CardContent>
            </Card>
        </div>
    }
}

interface Props{
    dishData: DishData;
}
interface State{}