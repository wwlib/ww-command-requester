/**
 * Commands for working with Jibo's screen
 * @namespace CommandRequester.display
 */

    /**
     * Commands for subscribing to screen-related events
     * @namespace CommandRequester.display.subscribe
     */

    /**
     * Create a view that displays Jibo's eye on screen
     * @method CommandRequester.display#EyeView
     * @param {string} name Unique name for the EyeView
     */

    /**
     * Create a view to display an image on Jibo's screen
     * @method CommandRequester.display#ImageView
     * @param {string} name Unique name for the ImageView
     * @param {CommandRequester.display.ImageData} data ImageData for the image to be created in the view
     */

    /**
     * Create a view to display text on Jibo's screen
     * @method CommandRequester.display#TextView
     * @param {string} name Unique name for the TextView
     * @param {string} text Text to be displayed
     */

    /**
     * Create an empty view on Jibo's screen
     * @method CommandRequester.display#EmptyView
     * @param  {string} name Unique name of view.
     */

    /**
     * Replace the existing view with the one given.
     * @method CommandRequester.display#swap
     * @param  {CommandRequester.display#EyeView | CommandRequester.display#TextView | CommandRequester.display#ImageView} view 
     * View to replace the existing one with.
     * @return {DisplayToken}
     */

    /**
     * Listen for screen touch input
     * @method CommandRequester.display.subscribe#gesture
     * @param  {CommandRequester.display.ScreenGestureFilter} [filter={}] Data for screen touch info
     * @return {ScreenGestureToken}
     */