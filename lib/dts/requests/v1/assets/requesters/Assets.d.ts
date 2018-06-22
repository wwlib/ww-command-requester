/// <reference types="../typings" />
import RequestToken from '../../../../tokens/RequestToken';
import RequestAPI from '../../../RequestAPI';
/**
 * @class FetchAssetToken
 * @extends RequestToken
 * @hideconstructor
 */
export declare class FetchAssetToken extends RequestToken<JIBO.v1.FetchAssetRequest, JIBO.v1.FetchAssetEvent> {
}
/**
 * @class UnloadAssetToken
 * @extends RequestToken
 * @hideconstructor
 */
export declare class UnloadAssetToken extends RequestToken<JIBO.v1.UnloadAssetRequest, JIBO.v1.UnloadAssetEvent> {
}
/**
 * Internal only class for Assets
 * @class CommandRequester.assets.Assets
 * @intdocs
 */
export declare class Assets extends RequestAPI<JIBO.v1.FetchAssetRequest | JIBO.v1.UnloadAssetRequest, FetchAssetToken | UnloadAssetToken> {
    /**
     * Generate loadAsset Protocol
     * @method CommandRequester.assets.Assets#generateLoadProtocol
     * @param {string} uri - URI of the asset to be fetched.
     * @param {string} name - Name given to the asset for later reference (must be unique).
     * @returns {FetchAssetRequest}
     * @intdocs
     */
    static generateLoadProtocol(uri: string, name: string): JIBO.v1.FetchAssetRequest;
    /**
     * Generate unloadAsset Protocol
     * @method CommandRequester.assets.Assets#generateUnloadProtocol
     * @param {string} name - Name given to the asset for later reference (must be unique).
     * @returns {UnloadAssetRequest}
     * @intdocs
     */
    static generateUnloadProtocol(name: string): JIBO.v1.UnloadAssetRequest;
    /**
     * @method CommandRequester.assets.Assets#generateToken
     * @description Create FetchAssetToken from FetchAssetRequest protocol.
     * @param {FetchAssetRequest | UnloadAssetRequest} protocol - FetchAssetRequest protocol to generate a FetchAssetToken from.
     * @param {boolean} [andSend=false] - `true` if the generated FetchAssetToken should also be sent as a request.
     * @return {FetchAssetToken}
     * @intdocs
     */
    generateToken(protocol: JIBO.v1.FetchAssetRequest | JIBO.v1.UnloadAssetRequest, andSend?: boolean): FetchAssetToken | UnloadAssetToken;
}
