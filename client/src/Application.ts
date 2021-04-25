import { StateStore } from "./application/modules/StateStore";
import { State } from "./application/State";
import { render } from "./components";
import locales from "./locales.json";

export type LocaleLanguageKeys = keyof typeof locales;
export type LocaleKeys = keyof typeof locales[LocaleLanguageKeys];

export class Application {
    public static stateStore: StateStore<State>;
    public static locales: Map<LocaleLanguageKeys, Map<keyof typeof locales[LocaleLanguageKeys], string>>;

    constructor(settings: Settings) {
        Application.stateStore = new StateStore(settings.initialState);
        this.initLocales();
        render(settings.renderContainer);
    }

    private initLocales(){
        Application.locales = new Map();
        Object.keys(locales).forEach(key => {
            var map = new Map();
            Object.keys(locales[key]).forEach(k => {
                map.set(k, locales[key][k]);
            })
            Application.locales.set(key as keyof typeof locales, map);
        });
    }
}

export interface Settings{
    initialState: State;
    renderContainer: Element | DocumentFragment;
}