export default class ExternalPromise<T> {
    resolve: (d?: T) => any;
    reject: (err?: any) => any;
    promise: Promise<T>;
    constructor();
}
