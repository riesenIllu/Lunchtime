export abstract class Action<TState = {}, TInput = any, TOutput extends Partial<TState> = Partial<TState>>{
    public readonly _input_type_!: TInput;
    
    public abstract execute(input: TInput): TOutput;
}

export type ActionCtor<TAction extends Action = Action> = new () => TAction;