/// <reference types="../typings" />
import RequestToken from '../../../../tokens/RequestToken';
import RequestAPI from '../../../RequestAPI';
/**
 * @class SetConfigToken
 * @extends RequestToken
 * @hideconstructor
 */
export declare class SetConfigToken extends RequestToken<JIBO.v1.SetConfigRequest> {
}
/**
 * @class GetConfigToken
 * @extends RequestToken
 * @hideconstructor
 */
export declare class GetConfigToken extends RequestToken<JIBO.v1.GetConfigRequest, JIBO.v1.ConfigEvent> {
}
/**
 * Internal only Config class
 * @class CommandRequester.config.Config
 * @intdocs
 */
export declare class Config extends RequestAPI<JIBO.v1.GetConfigRequest | JIBO.v1.SetConfigRequest, GetConfigToken | SetConfigToken> {
    /**
     * Generate Get Config Protocol
     * @method CommandRequester.config.Config#generateProtocol
     * @returns {SetConfigRequest | GetConfigRequest}
     * @intdocs
     */
    static generateProtocol(options?: JIBO.v1.SetConfigOptions): JIBO.v1.GetConfigRequest | JIBO.v1.SetConfigRequest;
    /**
     * Create ConfigToken from ConfigRequest protocol.
     * @method CommandRequester.config.Config#generateToken
     * @param {GetConfigRequest | SetConfigRequest} protocol - ConfigRequest protocol to generate a ConfigToken from.
     * @param {boolean} [andSend=false] - `true` if the generated ConfigToken should also be sent as a request.
     * @return {GetConfigToken | SetConfigRequest}
     * @intdocs
     */
    generateToken(protocol: JIBO.v1.GetConfigRequest | JIBO.v1.SetConfigRequest, andSend?: boolean): GetConfigToken | SetConfigToken;
    /**
     * Send ConfigToken request.
     * <p>NOTE: Implementation in base class {@link RequestAPI}</p>
     * @method CommandRequester.config.Config#sendToken
     * @param {GetConfigToken | SetConfigToken} token - ConfigToken to send.
     * @intdocs
     */
    sendToken(token: GetConfigToken | SetConfigToken): void;
}
