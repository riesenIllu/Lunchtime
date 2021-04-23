import {Action} from "../Action";
import {State} from "../State";
import {createMuiTheme, Theme as MuiTheme} from "@material-ui/core/styles";
import { StateStore } from "../StateStore";

export class Theme extends Action<State, string>{

    public execute(input: string): Partial<State> {
        return {theme: input};
    }
    
}
StateStore.registerAction(Theme);