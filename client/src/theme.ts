import {createMuiTheme, Theme} from "@material-ui/core/styles";

const baseTheme = {
    palette: {
        primary: {
            main: "#ffffff",
        },
        secondary:{
            main: "#000000"
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