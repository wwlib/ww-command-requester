/// <reference types="../typings" />
import RequestToken from '../../../../tokens/RequestToken';
import { CommandRequester } from '../../../../CommandRequester';
import { Event } from '../../../../events/Event';
import RequestAPI from '../../../RequestAPI';
export declare enum HotWords {
    "HEY_JIBO" = "hey jibo",
}
/**
 * @class HotWordToken
 * @extends RequestToken
 * @hideconstructor
 */
export declare class HotWordToken extends RequestToken<JIBO.v1.HotWordRequest> {
    /**
     * Heard "Hey Jibo"
     * @name HotWordToken#hotWordHeard
     * @type {Event}
     */
    hotWordHeard: Event<JIBO.v1.HotWordHeardEvent>;
    /**
     * Result of what Jibo head is available.
     * @name HotWordToken#listenResult
     * @type {Event<string>}
     */
    listenResult: Event<string>;
}
/**
 * Internal HotWord class
 * @class CommandRequester.listen.subscribe.HotWord
 * @intdocs
 */
export declare class HotWord extends RequestAPI<JIBO.v1.HotWordRequest, HotWordToken> {
    constructor(requester: CommandRequester);
    /**
     * Generate HotWord Protocol
     * @method CommandRequester.listen.subscribe.HotWord#generateProtocol
     * @param {boolean} [listen=false] - Whether to listen for additional speech input after "Hey Jibo" is heard.
     * @returns {HotWordRequest}
     * @intdocs
     */
    static generateProtocol(listen?: boolean, hotWord?: HotWords): JIBO.v1.HotWordRequest;
    /**
     * Create HotWordToken from HotWordRequest protocol.
     * @method CommandRequester.listen.subscribe.HotWord#generateToken
     * @param {HotWordRequest} protocol - HotWordRequest protocol to generate a HotWordToken from.
     * @param {boolean} [andSend=false] - `true` if the generated HotWordToken should also be sent as a request.
     * @return {HotWordToken}
     * @intdocs
     */
    generateToken(protocol: JIBO.v1.HotWordRequest, andSend?: boolean): HotWordToken;
    /**
     * Send HotWordToken request.
     * <p>NOTE: Implementation in base class {@link RequestAPI}</p>
     * @method CommandRequester.listen.subscribe.HotWord#sendToken
     * @param {HotWordToken} token - HotWordToken to send.
     * @intdocs
     */
    sendToken(token: HotWordToken): void;
}
