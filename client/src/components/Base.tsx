import React from "react";
import {Application, LocaleKeys, LocaleLanguageKeys} from "../Application";
import { withStyles } from "@material-ui/core";



export abstract class Base<Props extends {} = {}, State extends {} = {}, Style extends {} = {}> 
    extends React.Component<Props, State>{

    // protected classes?: ClassNameMap<keyof Style & string>;

    private localeLanguage: LocaleLanguageKeys;

    constructor(props: Props){
        super(props);
        this.localeLanguage = Application.stateStore.getState("locale");
        Application.stateStore.subscribe("locale", (locale) => {
            this.localeLanguage = locale;
        });
    }

    // protected abstract get style(): Style;

    // public componentDidMount(): void {
    //     if(this.style){
    //         this.classes = withStyles(this.style);
    //     }
    // }


    protected locale(localeKeyOrString: LocaleKeys): string{
        var result = Application.locales.get(this.localeLanguage)?.get(localeKeyOrString as LocaleKeys);
        return result || localeKeyOrString;
    }
    
}