export interface Handler<Type> {
    (data?: Type): void;
}
export declare enum EmitterMode {
    ALL_HANDLERS = "ALL_HANDLERS",
    FIRST_HANDLER = "FIRST_HANDLER",
    LAST_HANDLER = "LAST_HANDLER",
}
export declare class Event<Type> {
    name: string;
    private _onceEvents;
    private _events;
    private _maxListeners;
    private _emitterMode;
    constructor(name: string);
    listeners(): Handler<Type>[];
    setMaxListeners(n: number): this;
    getMaxListeners(): number;
    once(handler: Handler<Type>): this;
    on(handler: Handler<Type>): this;
    removeLastListener(): void;
    removeFirstListener(): void;
    addListener(handler: Handler<Type>): this;
    removeListener(handler: Handler<Type>): this;
    off(handler: Handler<Type>): this;
    removeAllListeners(): this;
    emit(data?: Type): boolean;
    setMode(mode: EmitterMode): void;
    waitFor(timeoutMs?: number): Promise<Type>;
    listenerCount(): number;
}
