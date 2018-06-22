/// <reference types="../typings" />
import ExternalPromise from '../utils/ExternalPromise';
/**
 * Every request has a token with a completion promise and any events relative to that command.
 * @class RequestToken
 */
export default abstract class RequestToken<C extends JIBO.v1.BaseCommand, Result = any> {
    protected _complete: ExternalPromise<Result>;
    /**
     * Request completion promise.
     * @method RequestToken#complete
     */
    readonly complete: Promise<Result>;
    /**
     * Cancel the request.
     * @method RequestToken#cancel
     */
    cancel(): void;
}
