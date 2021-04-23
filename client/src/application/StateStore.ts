module state {

    export type Callback<TStates, K extends keyof TStates> = (stateData: TStates[K]) => void;

    export class Subscription<TStates, K extends keyof TStates> {
        
        private static index: number;
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

export class StateStore<TStates extends {}>{

    public states!: Map<keyof TStates, any>;

    private subscriptions!: Map<number, state.Subscription<TStates, any>>;

    constructor(initialState: TStates){
       this.states = this.initStates(initialState);
       this.subscriptions = new Map();
    }

    private initStates(initialState: TStates): Map<keyof TStates, any>{
        var states = new Map();
        Object.keys(initialState).forEach(key => {
            if(!states.has(key)){
                states.set(key, initialState[key as keyof TStates]);
            }
        })
        return states;
    }

    public subscribe<K extends keyof TStates>(stateKey: K, callback: state.Callback<TStates, K>): state.Subscription<TStates, K> {
        var subscription = new state.Subscription(stateKey, callback);
        this.subscriptions.set(subscription.index, subscription);
        return subscription;
    }

    public unsubscribe<K extends keyof TStates>(subscription: state.Subscription<TStates, K>): void{
        this.subscriptions.delete(subscription.index);
    }

    public setState<K extends keyof TStates>(stateKey: K, stateData: TStates[K]): void{
        this.states.set(stateKey, stateData);
        this.subscriptions.forEach(sub => {
            if(sub.stateKey === stateKey){
                sub.callback(stateData);
            }
        })
    }

}