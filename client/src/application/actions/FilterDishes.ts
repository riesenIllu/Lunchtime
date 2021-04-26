import {Action} from "../modules/Action";
import {State} from "../State";
import { StateStore } from "../modules/StateStore";
import { Dish } from "../Collections";
import { Application } from "../../Application";

export class FilterDishes extends Action<State, any>{

    public execute(input: any): Partial<State> {
        throw new Error("Method not implemented");
    }
    
}
StateStore.registerAction(FilterDishes);