import { CommandRequester } from '../../../CommandRequester';
import { MotionToken } from './requesters/Motion';
import { HeadTouchToken } from './requesters/HeadTouch';
import { FaceTrackToken } from './requesters/FaceTrack';
/**
 * Commands for working with Jibo's sensory input
 * @namespace CommandRequester.perception
 */
export declare class Perception {
    /**
     * Commands for subcribing to perception events
     * @namespace CommandRequester.perception.subscribe
     */
    subscribe: any;
    constructor(requester: CommandRequester);
}
export declare class Subscriptions {
    private motionRequest;
    private headTouchRequest;
    private faceTrackRequest;
    constructor(requester: CommandRequester);
    /**
     * @method CommandRequester.perception.subscribe#headTouch
     * @description Listen for head touch.
     * @return {HeadTouchToken}
     */
    headTouch(): HeadTouchToken;
    /**
     * Subcribe to motion events in Jibo's field of vision
     * @method CommandRequester.perception.subscribe#motion
     * @return {MotionToken}
     */
    motion(): MotionToken;
    /**
     * Subscribe to face-finding events in Jibo's field of vision
     * @method CommandRequester.perception.subscribe#face
     * @return {FaceTrackToken}
     */
    face(): FaceTrackToken;
}
