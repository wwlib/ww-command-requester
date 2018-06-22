/// <reference types="../typings" />
import RequestToken from '../../../../tokens/RequestToken';
import RequestAPI from '../../../RequestAPI';
/**
 * @class SayToken
 * @extends RequestToken
 * @hideconstructor
 */
export declare class SayToken extends RequestToken<JIBO.v1.SayRequest> {
}
/**
 * Internal Say class
 * @class CommandRequester.expression.Say
 * @intdocs
 */
export declare class Say extends RequestAPI<JIBO.v1.SayRequest, SayToken> {
    /**
     * Generate Say Protocol
     * @method CommandRequester.expression.Say#generateProtocol
     * @param {string} esml_uri - ESML to speak or URI of sound to say
     * @param {JIBO.v1.SpeakOptions} [speakOptions] Options to configure , can be used in conjunction with ESML strings.
     * @param {JIBO.v1.AutoRuleConfig} [autoRuleConfig] Configuration for AutoRules , can be used in conjunction with ESML strings.
     * @returns {SayRequest}
     * @intdocs
     */
    static generateProtocol(esmlUri: string, speakOptions?: JIBO.v1.SpeakOptions, autoRuleConfig?: JIBO.v1.AutoRuleConfig): JIBO.v1.SayRequest;
    /**
     * Create SayToken from SayRequest protocol.
     * @method CommandRequester.expression.Say#generateToken
     * @param {SayRequest} protocol - SayRequest protocol to generate a SayToken from.
     * @param {boolean} [andSend=false] - `true` if the generated SayToken should also be sent as a request.
     * @return {SayToken}
     * @intdocs
     */
    generateToken(protocol: JIBO.v1.SayRequest, andSend?: boolean): SayToken;
}
