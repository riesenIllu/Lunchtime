import {Dish} from "./Collections";

export interface State{
    loggedIn: boolean;
    theme: string;
    locale: "de" | "en";
    shoppingCart: Dish[];
    filteredDishes: Dish[];
}

