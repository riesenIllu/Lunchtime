import React from "react";
import { Styles, DefaultTheme, ClassNameMap, makeStyles } from "@material-ui/styles";
import {Application, LocaleKeys, LocaleLanguageKeys} from "../Application";



export abstract class Base<Props extends {} = {}, State extends {} = {}, Style extends Styles<DefaultTheme,Props,keyof Style & string> = {}> 
    extends React.Component<Props, State>{

    protected useStyle?: (props: Props) => ClassNameMap<keyof Style & string>;

    private localeLanguage: LocaleLanguageKeys;

    constructor(props: Props){
        super(props);
        this.localeLanguage = Application.stateStore.getState("locale");
        Application.stateStore.subscribe("locale", (locale) => {
            this.localeLanguage = locale;
        });
    }

    protected abstract get style(): Style;

    public componentDidMount(): void {
        if(this.style){
            this.useStyle = makeStyles(this.style);
        }
    }


    protected locale(localeKeyOrString: LocaleKeys): string{
        var result = Application.locales.get(this.localeLanguage)?.get(localeKeyOrString as LocaleKeys);
        return result || localeKeyOrString;
    }
    
}