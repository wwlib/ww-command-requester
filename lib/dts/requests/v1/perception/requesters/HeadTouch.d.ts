/// <reference types="../typings" />
import RequestToken from '../../../../tokens/RequestToken';
import RequestAPI from '../../../RequestAPI';
import { Event } from '../../../../events/Event';
/**
 * @class HeadTouchToken
 * @extends RequestToken
 * @hideconstructor
 */
export declare class HeadTouchToken extends RequestToken<JIBO.v1.HeadTouchRequest> {
    /**
     * One or more of Jibo's touchpad sensors was touched.
     * See {@link https://app-toolkit.jibo.com/images/JiboHeadSensors.png} for a diagram of the location of
     * the six sensors
     * @name HeadTouchToken#HeadTouchEvent
     * @type {Event}
     */
    update: Event<boolean[]>;
}
/**
 * Internal HeadTouch class
 * @class CommandRequester.perception.subscribe.HeadTouch
 * @intdocs
 */
export declare class HeadTouch extends RequestAPI<JIBO.v1.HeadTouchRequest, HeadTouchToken> {
    /**
     * Generate Head Touch Protocol
     * @method CommandRequester.perception.subscribe.HeadTouch#generateProtocol
     * @returns {HeadTouchRequest}
     * @intdocs
     */
    static generateProtocol(): JIBO.v1.HeadTouchRequest;
    /**
     * Create HeadTouchToken from HeadTouchRequest protocol.
     * @method CommandRequester.perception.subscribe.HeadTouch#generateToken
     * @param {HeadTouchRequest} protocol - HeadTouchRequest protocol to generate a HeadTouchToken from.
     * @param {boolean} [andSend=false] - `true` if the generated HeadTouchToken should also be sent as a request.
     * @return {HeadTouchToken}
     * @intdocs
     */
    generateToken(protocol: JIBO.v1.HeadTouchRequest, andSend?: boolean): HeadTouchToken;
}
