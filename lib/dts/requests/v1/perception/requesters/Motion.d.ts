/// <reference types="../typings" />
import { CommandRequester } from '../../../../CommandRequester';
import RequestAPI from '../../../RequestAPI';
import RequestToken from '../../../../tokens/RequestToken';
import { Event } from '../../../../events/Event';
/**
 * @class MotionToken
 * @extends RequestToken
 * @hideconstructor
 */
export declare class MotionToken extends RequestToken<JIBO.v1.MotionRequest, never> {
    /**
     * @name MotionToken#update
     * @type {Event}
     */
    update: Event<JIBO.v1.MotionEntity[]>;
    constructor(owner: CommandRequester, protocol: JIBO.v1.MotionRequest);
}
/**
 * Internal Motion class
 * @class CommandRequester.perception.subscribe.Motion
 * @intdocs
 */
export declare class Motion extends RequestAPI<JIBO.v1.MotionRequest, MotionToken> {
    /**
     * Generate Motion Track Protocol
     * @method CommandRequester.perception.subscribe.Motion#generateProtocol
     * @returns {MotionRequest}
     * @intdocs
     */
    static generateProtocol(): JIBO.v1.MotionRequest;
    /**
     * Create MotionToken from MotionRequest protocol.
     * @method CommandRequester.perception.subscribe.Motion#generateToken
     * @param {MotionRequest} protocol - MotionRequest protocol to generate a MotionToken from.
     * @param {boolean} [andSend=false] - `true` if the generated MotionToken should also be sent as a request.
     * @return {MotionToken}
     * @intdocs
     */
    generateToken(protocol: JIBO.v1.MotionRequest, andSend?: boolean): MotionToken;
}
