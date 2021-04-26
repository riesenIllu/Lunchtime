import {Action} from "../modules/Action";
import {State} from "../State";
import { StateStore } from "../modules/StateStore";

export class Login extends Action<State, boolean>{

    public execute(input: boolean): Partial<State> {
        return {loggedIn: input};
    }
    
}
StateStore.registerAction(Login);