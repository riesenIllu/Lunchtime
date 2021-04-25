import {Action} from "../modules/Action";
import {State} from "../State";
import { StateStore } from "../modules/StateStore";

export class Login extends Action<State, null>{

    public execute(): Partial<State> {
        return {loggedIn: true};
    }
    
}
StateStore.registerAction(Login);