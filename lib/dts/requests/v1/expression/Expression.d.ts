/// <reference types="../typings" />
import { LookToken, Look } from './requesters/Look';
import { SayToken, Say } from './requesters/Say';
import { AttentionToken, Attention } from './requesters/Attention';
import { CommandRequester } from '../../../CommandRequester';
/**
 * Commands for working with Jibo's verbal and physical modes of expression
 * @namespace CommandRequester.expression
 */
export declare class Expression {
    attentionRequest: Attention;
    lookRequest: Look;
    sayRequest: Say;
    constructor(requester: CommandRequester);
    /**
     * Make Jibo turn to look at the specified target
     * @method CommandRequester.expression#look
     * @param  {CommandRequester.expression.LookAtTarget} target Target to look at
     * @param  {boolean} [shouldTrack] Currently unsupported
     * @param  {boolean} [levelHead=true] `true` to keep Jibo's head level while he moves
     * @return {LookToken}
     */
    look(lookAtTarget: CommandRequester.expression.LookAtTarget, shouldTrack?: boolean, levelHead?: boolean): LookToken;
    /**
     * Make Jibo speak.
     * @method CommandRequester.expression#say
     * @param {string} text Plain text or Embodied Speech Markup Language to say. See {@link https://app-toolkit.jibo.com/esml/}.
     * @return {SayToken}
     */
    say(text: string, speakOptions?: JIBO.v1.SpeakOptions, autoRuleConfig?: JIBO.v1.AutoRuleConfig): SayToken;
    /**
     * Set Jibo's attention mode.
     * @method CommandRequester.expression#setAttention
     * @param {CommandRequester.expression.AttentionMode} mode Attention mode to which to set the robot
     * @return {AttentionToken}
     */
    setAttention(mode: CommandRequester.expression.AttentionMode): AttentionToken;
}
