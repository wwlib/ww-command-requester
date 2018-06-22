import { CommandRequester } from '../../../CommandRequester';
import { Listen as ListenRequester, ListenToken } from './requesters/Listen';
import { HotWords, HotWordToken } from './requesters/HotWord';
/**
 * Commands for working with Jibo's listening capabilities
 * @namespace CommandRequester.listen
 */
export declare class Listen {
    listenRequest: ListenRequester;
    /**
     * Commands for subscribing to listen events
     * @namespace CommandRequester.listen.subscribe
     */
    subscribe: Subscriptions;
    constructor(requester: CommandRequester);
    /**
     * Request for the robot to listen.
     * @method CommandRequester.listen#start
     * @param  {number}   [maxSpeechTimeout = 15] Max seconds to listen for speech. If speech exceeds this limit, it will be ignored
     * (to prevent accidental listens, ie television in the background)
     * @param  {number}   [maxNoSpeechTimeout = 15] Max seconds to wait for speech to start
     * @param  {number}   [languageCode = en_US] Language to listen for. Only US English is currently supported.
     * @return {ListenToken}
     */
    start(maxSpeechTimeout?: number, maxNoSpeechTimeout?: number, languageCode?: string): ListenToken;
}
export declare class Subscriptions {
    private hotWordRequest;
    constructor(requester: CommandRequester);
    /**
     * Listen for "Hey Jibo" only
     * @method CommandRequester.listen.subscribe#hotWord
     * @param [listen=false] {boolean} Currently only `false` is supported.
     * Coming soon: `true` to automatically start a listen after hearing "Hey Jibo."
     * @param [hotword=HEY_JIBO] Currently only "Hey Jibo" is supported
     * @return {HotWordToken}
     */
    hotword(listen?: boolean, hotword?: HotWords): HotWordToken;
}
