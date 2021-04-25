import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Base } from "../../Base";

export class Dish extends Base<Props,State>{
    protected get style(): {} {
        return {};
    }

    public render(): React.ReactNode{
        return <div className="dish">
            <Card>
                <CardMedia className="dish-image" image={this.props.dishData.image} />
                <CardContent className="dish-content">
                    <Typography className="dish-name" variant="body2" color="textSecondary" component="p">
                        {this.props.dishData.name}
                    </Typography>
                    <Button className="dish-order-button">
                        <ShoppingCartIcon />
                    </Button>
                </CardContent>
                <CardActions>
                    
                </CardActions>
            </Card>
        </div>
    }
}

interface Props{
    dishData: DishData;
}
interface State{}

export interface DishData{
    name: string;
    price: number;
    image: string;
}