/// <reference types="../typings" />
import { CommandRequester } from '../../../CommandRequester';
import { DisplayToken } from './requesters/Display';
import { ScreenGestureToken } from './requesters/Gesture';
/**
 * Commands for working with Jibo's screen
 * @namespace CommandRequester.display
 */
export declare class Display {
    private displayRequest;
    /**
     * Commands for subscribing to screen-related events
     * @namespace CommandRequester.display.subscribe
     */
    subscribe: Subscriptions;
    constructor(requester: CommandRequester);
    /**
     * Create a view that displays Jibo's eye on screen
     * @method CommandRequester.display#EyeView
     * @param {string} name Unique name for the EyeView
     */
    EyeView(name: string): JIBO.v1.EyeView;
    /**
     * Create a view to display an image on Jibo's screen
     * @method CommandRequester.display#ImageView
     * @param {string} name Unique name for the ImageView
     * @param {CommandRequester.display.ImageData} data ImageData for the image to be created in the view
     */
    ImageView(name: string, data: CommandRequester.display.ImageData): JIBO.v1.ImageView;
    /**
     * Create a view to display text on Jibo's screen
     * @method CommandRequester.display#TextView
     * @param {string} name Unique name for the TextView
     * @param {string} text Text to be displayed
     */
    TextView(name: string, text: string): JIBO.v1.TextView;
    /**
     * Create an empty view on Jibo's screen
     * @method CommandRequester.display#EmptyView
     * @param  {string} name Unique name of view.
     */
    EmptyView(name: string): JIBO.v1.EmptyView;
    /**
     * Replace the existing view with the one given.
     * @method CommandRequester.display#swap
     * @param  {CommandRequester.display#EyeView | CommandRequester.display#TextView | CommandRequester.display#ImageView} view
     * View to replace the existing one with.
     * @return {DisplayToken}
     */
    swap(view: JIBO.v1.EyeView | JIBO.v1.TextView | JIBO.v1.ImageView, openTransition?: JIBO.v1.DisplayTransitions.DisplayTransitionType, closeTransition?: JIBO.v1.DisplayTransitions.DisplayTransitionType): DisplayToken;
}
export declare class Subscriptions {
    private gestureRequest;
    constructor(requester: CommandRequester);
    /**
     * Listen for screen touch input
     * @method CommandRequester.display.subscribe#gesture
     * @param  {CommandRequester.display.ScreenGestureFilter} [filter={}] Data for screen touch info
     * @return {ScreenGestureToken}
     */
    gesture(filter?: CommandRequester.display.ScreenGestureFilter): ScreenGestureToken;
}
