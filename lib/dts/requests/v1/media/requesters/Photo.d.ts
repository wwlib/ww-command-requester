/// <reference types="../typings" />
import RequestToken from '../../../../tokens/RequestToken';
import RequestAPI from '../../../RequestAPI';
/**
 * @class PhotoToken
 * @extends RequestToken
 * @hideconstructor
 */
export declare class PhotoToken extends RequestToken<JIBO.v1.TakePhotoRequest, JIBO.v1.TakePhotoEvent> {
}
/**
 * Internal Photo class
 * @class CommandRequester.media.capture.Photo
 * @intdocs
 */
export declare class Photo extends RequestAPI<JIBO.v1.TakePhotoRequest, PhotoToken> {
    /**
     * Generate Photo Protocol
     * @method CommandRequester.media.capture.Photo#generateProtocol
     * @param {Camera} [camera=left] - Which camera to use -- left or right.
     * @param {CameraResolution} [resolution=LowRes] - Choose a resolution.
     * @param {boolean} [removeDistortion=true] - Use `false` for fisheye lense.
     * @returns {TakePhotoRequest}
     * @intdocs
     */
    static generateProtocol(camera?: JIBO.v1.Cameras.CameraType, resolution?: JIBO.v1.CameraResolutions.CameraResolutionType, removeDistortion?: boolean): JIBO.v1.TakePhotoRequest;
    /**
     * Create PhotoToken from TakePhotoRequest protocol.
     * @method CommandRequester.media.capture.Photo#generateToken
     * @param {TakePhotoRequest} protocol - TakePhotoRequest protocol to generate a PhotoToken from.
     * @param {boolean} [andSend=false] - `true` if the generated PhotoToken should also be sent as a request.
     * @return {PhotoToken}
     * @intdocs
     */
    generateToken(protocol: JIBO.v1.TakePhotoRequest, andSend?: boolean): PhotoToken;
}
