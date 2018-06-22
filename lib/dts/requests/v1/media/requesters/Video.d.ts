/// <reference types="../typings" />
import RequestToken from '../../../../tokens/RequestToken';
import RequestAPI from '../../../RequestAPI';
import { Event } from '../../../../events/Event';
/**
 * @class VideoToken
 * @extends RequestToken
 * @hideconstructor
 */
export declare class VideoToken extends RequestToken<JIBO.v1.VideoRequest, never> {
    /**
     * URL for video stream is ready.
     * @name VideoToken#streamReady
     * @type {Event<string>}
     */
    streamReady: Event<string>;
}
/**
 * Internal Video class
 * @class CommandRequester.media.capture.Video
 * @intdocs
 */
export declare class Video extends RequestAPI<JIBO.v1.VideoRequest, VideoToken> {
    /**
     * Generate Video Protocol
     * @method CommandRequester.media.capture.Video#generateProtocol
     * @param {VideoType} [type=VideoType.Normal] - Choose a video type from the enum.
     * @param {number} [duration=0] - How long to record for (in ms).
     * @returns {VideoRequest}
     * @intdocs
     */
    static generateProtocol(type?: JIBO.v1.Videos.VideoType, duration?: number): JIBO.v1.VideoRequest;
    /**
     * Create VideoToken from VideoRequest protocol.
     * @method CommandRequester.media.capture.Video#generateToken
     * @param {VideoRequest} protocol - VideoRequest protocol to generate a VideoToken from.
     * @param {boolean} [andSend=false] - `true` if the generated VideoToken should also be sent as a request.
     * @return {VideoToken}
     * @intdocs
     */
    generateToken(protocol: JIBO.v1.VideoRequest, andSend?: boolean): VideoToken;
}
