import {Action} from "../modules/Action";
import {State} from "../State";
import {createMuiTheme, Theme as MuiTheme} from "@material-ui/core/styles";
import { StateStore } from "../modules/StateStore";

export class Theme extends Action<State, string>{

    public execute(input: "light" | "dark"): Partial<State> {
        return {theme: input};
    }
    
}
StateStore.registerAction(Theme);