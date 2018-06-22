/// <reference types="../typings" />
import RequestToken from '../../../../tokens/RequestToken';
import { CommandRequester } from '../../../../CommandRequester';
import RequestAPI from '../../../RequestAPI';
import { Event } from '../../../../events/Event';
/**
 * @class ScreenGestureToken
 * @extends RequestToken
 * @hideconstructor
 */
export declare class ScreenGestureToken extends RequestToken<JIBO.v1.ScreenGestureRequest> {
    /**
     * Tap screen gesture. Event is `{x: number, y: number}` of tap location.
     * @name ScreenGestureToken#tap
     * @type {Event<CommandRequester.Vector2>}
     */
    tap: Event<JIBO.v1.Vector2>;
    /**
     * Swipe screen gesture. Type is direction of swipe.
     * @name ScreenGestureToken#swipe
     * @type {Event<SwipeDirection>}
     */
    swipe: Event<JIBO.v1.SwipeDirections.SwipeDirectionType>;
}
/**
 * Internal Gesture class
 * @class CommandRequester.display.subscribe.Gesture
 * @intdocs
 */
export declare class Gesture extends RequestAPI<JIBO.v1.ScreenGestureRequest, ScreenGestureToken> {
    owner: any;
    constructor(requester: CommandRequester);
    /**
     * Generate Screen Gesture Protocol
     * @method CommandRequester.display.subscribe.Gesture#generateProtocol
     * @param {CommandRequester.display.ScreenGestureFilter} [filter={}]
     * @returns {ScreenGestureRequest}
     * @intdocs
     */
    static generateProtocol(filter?: JIBO.v1.ScreenGestureFilter): JIBO.v1.ScreenGestureRequest;
    /**
     * Create ScreenGestureToken from ScreenGestureRequest protocol.
     * @method CommandRequester.display.subscribe.Gesture#generateToken
     * @param {ScreenGestureRequest} protocol - ScreenGestureRequest protocol to generate a ScreenGestureToken from.
     * @param {boolean} [andSend=false] - `true` if the generated ScreenGestureToken should also be sent as a request.
     * @return {ScreenGestureToken}
     * @intdocs
     */
    generateToken(protocol: JIBO.v1.ScreenGestureRequest, andSend?: boolean): ScreenGestureToken;
}
