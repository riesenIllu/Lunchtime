import React from "react";
import {DishData, Dish} from "./DishSelection/Dish";
import image from "./Rectangle_134.png";

export class DishSelection extends React.Component<Props, State>{

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