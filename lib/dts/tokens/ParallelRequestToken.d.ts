import RequestToken from './RequestToken';
export declare enum ParallelMode {
    All = 0,
    AllowFailures = 1,
    First = 2,
}
export default class ParallelRequestToken {
    tokens: RequestToken<any, any>[];
    private _complete;
    readonly complete: Promise<any[]>;
    constructor(tokens: RequestToken<any, any>[], mode: ParallelMode);
    cancelAll(): void;
}
