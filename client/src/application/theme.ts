import {createMuiTheme, Theme} from "@material-ui/core/styles";

const baseTheme = {
    palette: {
        primary: {
            main: "#d50057"
        }
    }
}

const themes : {[key: string]: {}} = {
    light: {
        palette: {
            secondary: {
                main: "#ffffff"
            }
        }
    },
    dark: {
        palette: {
            secondary: {
                main: "#000000"
            }
        }
        
    }
}

export function getTheme(themeKey = "light"): Theme{
    var combinedTheme = Object.assign(baseTheme, themes[themeKey]);
    return createMuiTheme(combinedTheme);
}