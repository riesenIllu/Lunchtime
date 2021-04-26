import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import { Base } from "../Base";
import {Dish} from "./DishSelection/Dish";
import {Dish as DishData} from "../../application/Collections";
import { Application } from "../../Application";

export class DishSelection extends Base<Props, State>{

    constructor(props: Props){
        super(props);
        this.state = {
            dishes: Application.stateStore.getState("filteredDishes")
        }
        this.subscribeToState("filteredDishes", (state) => {
            this.setState({
                dishes: state
            })
        });
    }

    public render(): React.ReactNode{
        return <div className="dish-selection">
            <Link to="/filter" className="filter-link">
                <Avatar className="filter-background" color="red">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Avatar>
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