/// <reference types="../typings" />
/**
 * @namespace Requester.v2.listen
 * @intdocs
 */
export declare class Listen {
    /**
     * Generates Listen Protocol. See [Phoenix RCP](https://github.jibo.com/phoenix/jibo-command-protocol) for `JIBO` docs.
     * @method Requester.v2.listen#generateProtocol
     * @param {(string|string[])} ruleContext - Robust Parser Rules / Dialog Flow Agents we're listening for.
     * @param {JIBO.v2.behaviors.Intent[]} intents - Dialog Flow intents
     * @returns {JIBO.v2.behaviors.Listen}
     */
    static generateProtocol(rules: string | string[], intents?: JIBO.v2.behaviors.Intent[]): JIBO.v2.behaviors.Listen;
}
