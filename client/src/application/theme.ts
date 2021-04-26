import {createMuiTheme, Theme} from "@material-ui/core/styles";


export function getTheme(themeKey: "light" | "dark" = "light"): Theme{
    var theme = {
        palette: {
            primary: {
                main: "#d50057"
            },
            secondary: {
                main: "#ffffff"
            },
            type: themeKey
        }
    }
    return createMuiTheme(theme);
}