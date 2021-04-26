import React from "react";
import {Application, LocaleKeys, LocaleLanguageKeys} from "../Application";
import {state} from "../application/modules/StateStore";
import {State as ApplicationState} from "../application/State";
import { withStyles } from "@material-ui/core";



export abstract class Base<Props extends {} = {}, State extends {} = {}, Style extends {} = {}> 
    extends React.Component<Props, State>{

    // protected classes?: ClassNameMap<keyof Style & string>;

    private localeLanguage: LocaleLanguageKeys;
    protected subscriptions: state.Subscription<ApplicationState>[];

    constructor(props: Props){
        super(props);
        this.subscriptions = [];
        this.localeLanguage = Application.stateStore.getState("locale");
        this.subscribeToState("locale", (locale) => {
            this.localeLanguage = locale;
        });
    }

    protected subscribeToState<K extends keyof ApplicationState>(stateKey: K, callback: state.Callback<ApplicationState, K>): void{
        this.subscriptions.push(Application.stateStore.subscribe(stateKey, callback) as any);
    }

    public componentWillUnmount(): void{
        this.subscriptions.forEach(subscription => {
            Application.stateStore.unsubscribe(subscription);
        })
        this.subscriptions = [];
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