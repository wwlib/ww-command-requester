/// <reference types="../typings" />
import RequestToken from '../../../../tokens/RequestToken';
import { CommandRequester } from '../../../../CommandRequester';
import RequestAPI from '../../../RequestAPI';
import { Event } from '../../../../events/Event';
/**
 * @class FaceTrackToken
 * @extends RequestToken
 * @hideconstructor
 */
export declare class FaceTrackToken extends RequestToken<JIBO.v1.EntityRequest, never> {
    /**
     * Update on location of face being tracked.
     * @name FaceTrackToken#update
     * @type {Event}
     */
    update: Event<JIBO.v1.TrackedEntity[]>;
    /**
     * New face being tracked.
     * @name FaceTrackToken#gained
     * @type {Event}
     */
    gained: Event<JIBO.v1.TrackedEntity[]>;
    /**
     * Currently tracked face was lost.
     * @name FaceTrackToken#lost
     * @type {Event}
     */
    lost: Event<JIBO.v1.TrackedEntity[]>;
    constructor(owner: CommandRequester, protocol: JIBO.v1.EntityRequest);
}
/**
 * Internal FaceTrack class
 * @class CommandRequester.perception.subscribe.FaceTrack
 * @intdocs
 */
export declare class FaceTrack extends RequestAPI<JIBO.v1.EntityRequest, FaceTrackToken> {
    /**
     * Generate Face Track Protocol
     * @method CommandRequester.perception.subscribe.FaceTrack#generateProtocol
     * @returns {EntityRequest}
     * @intdocs
     */
    static generateProtocol(): JIBO.v1.EntityRequest;
    /**
     * Create FaceTrackToken from EntityRequest protocol.
     * @method CommandRequester.perception.subscribe.FaceTrack#generateToken
     * @param {EntityRequest} protocol - EntityRequest protocol to generate a FaceTrackToken from.
     * @param {boolean} [andSend=false] - `true` if the generated FaceTrackToken should also be sent as a request.
     * @return {FaceTrackToken}
     * @intdocs
     */
    generateToken(protocol: JIBO.v1.EntityRequest, andSend?: boolean): FaceTrackToken;
}
