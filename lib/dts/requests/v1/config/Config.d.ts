import { CommandRequester } from '../../../CommandRequester';
import { GetConfigToken, SetConfigToken } from './requesters/Config';
/**
 * Commands for working with Jibo's settings and configurations
 * @namespace CommandRequester.config
 */
export declare class Config {
    private configRequester;
    constructor(requester: CommandRequester);
    /**
     * Get robot configuration options.
     * @method CommandRequester.config#get
     * @return {GetConfigToken}
     */
    get(): GetConfigToken;
    /**
     * Set robot configuration options.
     * @method CommandRequester.config#set
     * @param  {CommandRequester.config.SetConfigOptions}  options Options for settable configurations
     * @return {SetConfigToken}
     */
    set(options: CommandRequester.config.SetConfigOptions): SetConfigToken;
}
