/// <reference types="../typings" />
import RequestToken from '../../../../tokens/RequestToken';
import RequestAPI from '../../../RequestAPI';
/**
 * Target options for Look
 * @typedef CommandRequester.expression.TargetMode
 * @prop Position
 * @prop Angle
 * @prop Entity
 * @prop Scren
 * @intdocs
 */
export declare enum TargetMode {
    Position = 0,
    Angle = 1,
    Entity = 2,
    ScreenCoords = 3,
}
export interface LookAtAchievedResult {
    AngleTarget: JIBO.v1.AngleVector;
    PositionTarget: JIBO.v1.Vector3;
}
export interface LookAtTrackLostResult {
    EntityTarget: JIBO.v1.LookAtEntity;
    AngleTarget: JIBO.v1.AngleVector;
    PositionTarget: JIBO.v1.Vector3;
}
/**
 * @class LookToken
 * @extends RequestToken
 * @hideconstructor
 */
export declare class LookToken extends RequestToken<JIBO.v1.LookAtRequest, LookAtAchievedResult | LookAtTrackLostResult> {
}
/**
 * Internal Look class
 * @class CommandRequester.expression.Look
 * @intdocs
 */
export declare class Look extends RequestAPI<JIBO.v1.LookAtRequest, LookToken> {
    /**
     * Generate Look Protocol
     * @method CommandRequester.expression.Look#generateProtocol
     * @param {CommandRequester.expression.TargetMode} targetMode - How we are targetting our target (depends on the target type)
     * @param {(CommandRequester.Vector2|CommandRequester.Vector3|CommandRequester.expression.LookAtEntity)} target - What we're looking at (Entity, Angle or Point in space)
     * @param {boolean} levelHead - `true` to keep Jibo's head level while he moves.
     * @param {boolean} [shouldTrack=false] - If we should track the target entity (Entity-Mode only)
     * @returns {LookAtRequest}
     * @intdocs
     */
    static generateProtocol(targetMode: TargetMode, target: JIBO.v1.Vector2 | JIBO.v1.Vector3 | JIBO.v1.LookAtEntity | JIBO.v1.AngleVector, levelHead: boolean, shouldTrack?: boolean): JIBO.v1.LookAtRequest;
    /**
     * Create LookToken from LookAtRequest protocol.
     * @method CommandRequester.expression.Look#generateToken
     * @param {LookAtRequest} protocol - LookAtRequest protocol to generate a LookToken from.
     * @param {boolean} [andSend=false] - `true` if the generated LookToken should also be sent as a request.
     * @return {LookToken}
     * @intdocs
     */
    generateToken(protocol: JIBO.v1.LookAtRequest, andSend?: boolean): LookToken;
}
