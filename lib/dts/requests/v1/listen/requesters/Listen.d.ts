/// <reference types="../typings" />
import RequestToken from '../../../../tokens/RequestToken';
import { Event } from '../../../../events/Event';
import RequestAPI from '../../../RequestAPI';
/**
 * @class ListenToken
 * @extends RequestToken
 * @hideconstructor
 */
export declare class ListenToken extends RequestToken<JIBO.v1.ListenRequest, JIBO.v1.ListenResultEvent | JIBO.v1.ListenStopEvent> {
    /**
     * Listen token was updated
     * @name ListenToken#update
     * @type {Event}
     */
    update: Event<JIBO.v1.ListenResultEvent>;
}
/**
 * Internal Listen class
 * @class CommandRequester.listen.Listen
 * @intdocs
 */
export declare class Listen extends RequestAPI<JIBO.v1.ListenRequest, ListenToken> {
    /**
     * Generate Listen Protocol
     * @method CommandRequester.listen.Listen#generateProtocol
     * @param {number} [maxSpeechTimeout=15] - Max speech timeout (in seconds)
     * @param {number} [maxNoSpeechTimeout=15] - Max no speech timeout (in seconds)
     * @param {string} [languageCode='en-US'] - Language code
     * @returns {ListenRequest}
     * @intdocs
     */
    static generateProtocol(maxSpeechTimeout?: number, maxNoSpeechTimeout?: number, languageCode?: string): JIBO.v1.ListenRequest;
    /**
     * Create ListenToken from ListenRequest protocol.
     * @method CommandRequester.listen.Listen#generateToken
     * @param {ListenRequest} protocol - ListenRequest protocol to generate a ListenToken from.
     * @param {boolean} [andSend=false] - `true` if the generated ListenToken should also be sent as a request.
     * @return {ListenToken}
     * @intdocs
     */
    generateToken(protocol: JIBO.v1.ListenRequest, andSend?: boolean): ListenToken;
}
