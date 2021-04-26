import React from "react";
import { IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import { Base } from "../Base";
import {DishData, Dish} from "./DishSelection/Dish";
import image from "./Rectangle_134.png";

export class DishSelection extends Base<Props, State>{
    protected get style(): {} {
        return {};
    }

    constructor(props: Props){
        super(props);
        this.state = {
            dishes: [
                {image: image, name: "Pizza mit Pizza und Lorem ipsum", price: 3},
                {image: image, name: "Pizza mit Pizza und Lorem ipsum", price: 2},
                {image: image, name: "Pizza mit Pizza und Lorem ipsum", price: 5},
                {image: image, name: "Pizza mit Pizza und Lorem ipsum", price: 35},
                {image: image, name: "Pizza mit Pizza und Lorem ipsum", price: 12},
                {image: image, name: "Pizza mit Pizza und Lorem ipsum", price: 8}
            ]
        }
    }

    public render(): React.ReactNode{
        return <div className="dish-selection">
            <Link to="/DishFilter">
                <IconButton>
                    <SearchIcon />
                </IconButton>
            </Link>
            {this.state.dishes.map(dish => {
                return <Dish dishData={dish}></Dish>
            })}
        </div>
    }
}

interface Props{}
interface State{
    dishes: DishData[];
}