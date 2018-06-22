/// <reference types="../typings" />
import RequestToken from '../../../../tokens/RequestToken';
import { CommandRequester } from '../../../../CommandRequester';
import RequestAPI from '../../../RequestAPI';
/**
 * @class AttentionToken
 * @extends RequestToken
 * @hideconstructor
 */
export declare class AttentionToken extends RequestToken<JIBO.v1.AttentionRequest> {
}
/**
 * Internal Attention class
 * @class CommandRequester.expression.Attention
 * @intdocs
 */
export declare class Attention extends RequestAPI<JIBO.v1.AttentionRequest, AttentionToken> {
    /**
     * Generate Attention Protocol
     * @method CommandRequester.expression.Attention#generateProtocol
     * @param {CommandRequester.expression.AttentionMode} mode - New attenion mode for the robot
     * @returns {JIBO.v1.AttentionRequest}
     * @intdocs
     */
    static generateProtocol(mode: CommandRequester.expression.AttentionMode): JIBO.v1.AttentionRequest;
    /**
     * Create AttentionToken from AttentionRequest protocol.
     * @method CommandRequester.expression.Attention#generateToken
     * @param {AttentionRequest} protocol - AttentionRequest protocol to generate an AttentionToken from.
     * @param {boolean} [andSend=false] - `true` if the generated AttentionToken should also be sent as a request.
     * @return {AttentionToken}
     * @intdocs
     */
    generateToken(protocol: JIBO.v1.AttentionRequest, andSend?: boolean): AttentionToken;
}
