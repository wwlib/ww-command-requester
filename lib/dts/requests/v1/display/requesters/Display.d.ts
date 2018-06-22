/// <reference types="../typings" />
import RequestToken from '../../../../tokens/RequestToken';
import RequestAPI from '../../../RequestAPI';
import { Event } from '../../../../events/Event';
/**
 * @class DisplayToken
 * @extends RequestToken
 * @hideconstructor
 */
export declare class DisplayToken extends RequestToken<JIBO.v1.DisplayRequest> {
    /**
     * Emitted when a display view is opened.
     * @name DisplayToken#opened
     * @type {Event}
     */
    opened: Event<void>;
}
/**
 * Internal Display class
 * @class CommandRequester.display.Display
 * @intdocs
 */
export declare class Display extends RequestAPI<JIBO.v1.DisplayRequest, DisplayToken> {
    /**
     * Generate Display Protocol
     * @method CommandRequester.display.Display#generateProtocol
     * @param {(CommandRequester.display#EyeView | CommandRequester.display#TextView | CommandRequester.display#ImageView)} view - View to replace the existing one with.
     * @param  {DisplayTransitionType} [openTransition] Transition type to open.
     * @param  {DisplayTransitionType} [closeTransition] Transition type to close.
     * @returns {DisplayRequest}
     * @intdocs
     */
    static generateProtocol(view: JIBO.v1.EyeView | JIBO.v1.TextView | JIBO.v1.ImageView, openTransition?: JIBO.v1.DisplayTransitions.DisplayTransitionType, closeTransition?: JIBO.v1.DisplayTransitions.DisplayTransitionType): JIBO.v1.DisplayRequest;
    /**
     * Create DisplayToken from DisplayRequest protocol.
     * @method CommandRequester.display.Display#generateToken
     * @param {DisplayRequest} protocol - DisplayRequest protocol to generate a DisplayToken from.
     * @param {boolean} [andSend=false] - `true` if the generated DisplayToken should also be sent as a request.
     * @return {DisplayToken}
     * @intdocs
     */
    generateToken(protocol: JIBO.v1.DisplayRequest, andSend?: boolean): DisplayToken;
}
