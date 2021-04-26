import {Action} from "../modules/Action";
import {State} from "../State";
import { StateStore } from "../modules/StateStore";
import { Dish } from "../Collections";
import { Application } from "../../Application";

export class AddToShoppingCart extends Action<State, Dish>{

    public execute(input: Dish): Partial<State> {
        var shoppingCart = Application.stateStore.getState("shoppingCart");
        shoppingCart.push(input);
        return {shoppingCart: shoppingCart};
    }
    
}
StateStore.registerAction(AddToShoppingCart);