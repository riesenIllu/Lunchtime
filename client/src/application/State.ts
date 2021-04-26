import {Dish} from "./Collections";

export interface State{
    loggedIn: boolean;
    theme: "light" | "dark";
    locale: "de" | "en";
    shoppingCart: Dish[];
    filteredDishes: Dish[];
}

