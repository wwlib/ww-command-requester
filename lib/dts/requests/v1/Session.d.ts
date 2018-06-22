/// <reference types="../typings" />
import RequestToken from '../../tokens/RequestToken';
import RequestAPI from '../RequestAPI';
/**
 * @class SessionToken
 * @description Response token for the {@link Session} class.
 * @extends RequestToken
 * @hideconstructor
 * @intdocs
 */
export declare class SessionToken extends RequestToken<JIBO.v1.SessionRequest, JIBO.v1.SessionResponse> {
}
/**
 * @namespace CommandRequester.session
 * @intdocs
 */
export declare class Session extends RequestAPI<JIBO.v1.SessionRequest, SessionToken> {
    /**
     * Generate Session Protocol
     * @method CommandRequester.session#generateProtocol
     * @returns {SessionRequest}
     * @intdocs
     */
    static generateProtocol(): JIBO.v1.SessionRequest;
    /**
     * Start the session.
     * @method CommandRequester.session#startSession
     * @return {SessionToken}
     */
    start(): SessionToken;
    /**
     * @method CommandRequester.session#generateToken
     * @description Create SessionToken from SessionRequest protocol.
     * @param {SessionRequest} protocol - SessionRequest protocol to generate a SessionToken from.
     * @param {boolean} [andSend=false] - `True` if the generated SessionToken should also be sent as a request.
     * @return {SessionToken}
     * @intdocs
     */
    generateToken(protocol: JIBO.v1.SessionRequest, andSend?: boolean): SessionToken;
}
