enum DishType{
    NONE,
    HALAL,
    VEGETERIAN,
    VEGAN,
    _COUNT
}

export type Ingredients = string[];

export interface Dish{
    id: number;
    name: string;
    price: number | string; //FIXME: type sollte number sein, dummy daten sind fehlerhaft
    type: DishType,
    ingredients: Ingredients;
}

export interface Order{
    date: Date;
    dishes: Dish[];
    price: number;
}

export interface UserProfile{
    name: string;
    email: string;
    favorites: Dish[];
    paypal: string;
    orderHistory: Order[];
    deliverer: boolean;
}


