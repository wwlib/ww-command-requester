/// <reference types="../typings" />
import { CommandRequester } from '../CommandRequester';
import RequestToken from '../tokens/RequestToken';
export default abstract class RequestAPI<R extends JIBO.v1.BaseCommand, T extends RequestToken<R>> {
    protected owner: CommandRequester;
    constructor(owner: CommandRequester);
    abstract generateToken(protocol: R): T;
    sendToken(token: T): void;
}
