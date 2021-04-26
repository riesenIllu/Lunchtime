import {Action, ActionCtor} from "./Action";

export module state {

    export type Callback<TStates, K extends keyof TStates = keyof TStates> = (stateData: TStates[K]) => void;

    export class Subscription<TStates, K extends keyof TStates = keyof TStates> {
        
        private static index: number = 0;
        public readonly index: number;
        public readonly stateKey: K;
        public readonly callback: Callback<TStates, K>;


        constructor(state: K, callback: Callback<TStates, K>){
            this.index = Subscription.index++;
            this.stateKey = state;
            this.callback = callback;
        }
        
    }
}

export class StateStore<TState extends {}>{

    private static registeredActions: ActionCtor[];

    public static registerAction<TAction extends Action>(actionConstructor: ActionCtor<TAction>): void{
        if(!this.registeredActions){
            this.registeredActions = [];
        }
        this.registeredActions.push(actionConstructor);
    }

    private state: Map<keyof TState, any>;
    private subscriptions: Map<number, state.Subscription<TState, any>>;
    private actions!: Map<string, Action<TState>>;

    constructor(initialState: TState){
       this.state = this.initStates(initialState);
       this.actions = this.initActions();
       this.subscriptions = new Map();
    }

    private initStates(initialState: TState): Map<keyof TState, any>{
        var state = new Map();
        Object.keys(initialState).forEach(key => {
            if(!state.has(key)){
                state.set(key, initialState[key as keyof TState]);
            }
        })
        return state;
    }

    private initActions(): Map<string, Action<TState>>{
        var actions = new Map();
        StateStore.registeredActions?.forEach((aC) => {
            if(!actions.has(aC.name)) actions.set(aC.name, new aC());
        });
        return actions;
    }

    private setState<K extends keyof TState>(stateKey: K, stateData: TState[K]): void{
        this.state.set(stateKey, stateData);
        this.subscriptions.forEach(sub => {
            if(sub.stateKey === stateKey){
                sub.callback(stateData);
            }
        })
    }

    public getState<K extends keyof TState>(stateKey: K): TState[K]{
        return this.state.get(stateKey);
    }

    public subscribe<K extends keyof TState>(stateKey: K, callback: state.Callback<TState, K>): state.Subscription<TState, K> {
        var subscription = new state.Subscription(stateKey, callback);
        this.subscriptions.set(subscription.index, subscription);
        return subscription;
    }

    public unsubscribe<K extends keyof TState>(subscription: state.Subscription<TState, K>): void{
        this.subscriptions.delete(subscription.index);
    }

    //TODO: Lösung für unnötigen check finden
    public executeAction<TAction extends Action<TState>>(actionC: ActionCtor<TAction>, input: TAction["_input_type_"]): void{
        var newState = this.actions.get(actionC.name)?.execute(input);
        if(typeof newState === "object"){
            Object.keys(newState).forEach(key => {
                if(newState && newState.hasOwnProperty(key)) // newState check damit der TS Compiler zufrieden ist -_-
                this.setState(key as keyof TState, newState[key]);
            })
        }
    }

}