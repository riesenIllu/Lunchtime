import {createMuiTheme, Theme} from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import blue from "@material-ui/core/colors/blue";

const baseTheme = {
    palette: {
        primary: {
            main: purple[500],
        },
        secondary:{
            main: blue[500]
        }
    }
}

const themes : {[key: string]: {}} = {
    light: {

    },
    dark: {

    }
}

export function getTheme(themeKey = "light"): Theme{
    var combinedTheme = Object.assign(baseTheme, themes[themeKey]);
    return createMuiTheme(combinedTheme);
}