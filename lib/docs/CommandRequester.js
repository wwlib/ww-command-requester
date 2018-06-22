/**
 * Entry point for the Remote Client Protocol
 * @class CommandRequester
 * @example
 * const commandRequester = new CommandRequester();
 * commandRequester.disconnected.on((data) => {
 *     console.log('Connection closed because', data);
 * });
 * await commandRequester.connect(robotName);
 */

    /**
     * Event emitted when the connection is closed by the robot or a connection issue as
     * <br /> ```Event<{code:number, reason:string}>``` 
     * @name CommandRequester#disconnected
     * @type Event<number, string>
     */

    /**
     * @private
     */

    /**
     * @private
     */

    /**
     * Definition for making Jibo twist to a certain angle
     * @interface CommandRequester.AngleVector
     * @prop theta {number} Twist/horizontal angle
     * @prop psi {number} Vertical angle
     */

    /**
     * Definition for a point on Jibo's screen
     * @interface CommandRequester.Vector2
     * @prop x {number} Horizontal pixels
     * @prop y {number} Vertical pixels
     */

    /**
     * Definition for a 3D point in space
     * @interface CommandRequester.Vector3
     * @prop x {number} Meters forward
     * @prop y {number} Meters left
     * @prop z {number} Meters up
     */

        /**
         * Which camera to use
         * @typedef CommandRequester.media.Camera
         * @prop left {'Left'} Default; Use for photo-taking 
         * @prop right {'Right'} Unsupported
         */

        /**
         * Enum of photo resolution options
         * @typedef CommandRequester.media.CameraResolution
         * @prop high {'highRes'} Currently unsupported
         * @prop med {'medRes'} Higher res than default
         * @prop low {'lowRes'} Default
         * @prop micro {'microRes'} Lower res than default
         */

        /**
         * Enum of video type options
         * @typedef CommandRequester.media.VideoType
         * @prop normal {'NORMAL'} Default
         * @prop debug {'DEBUG'} Currently unsupported
         */

            /** Currently unsupported */

        /**
         * Robot configuration options that can be set by your app
         * @interface CommandRequester.config.SetConfigOptions
         * @prop mixer {number} Volume between 0 (mute) and 1 (loudest)
         */

        /**
         * What type of lookAt Jibo should perform: 
         * <br /> `"ANGLE" | "ENTITY" | "POSITION" | "CAMERA"`
         * @typedef CommandRequester.expression.LookAtTargetType
         */

        /**
         * Base interface for lookAt targets
         * @interface CommandRequester.expression.BaseLookAtTarget
         * @prop type {CommandRequester.expression.LookAtTargetType} Type of lookAt to perform
         * @prop levelHead {boolean} `true` to keep Jibo's head level while he moves
         */

        /**
         * Interface for looking towards an angle.
         * @interface CommandRequester.expression.Angle
         * @extends CommandRequester.expression.BaseLookAtTarget
         * @prop type="ANGLE" {CommandRequester.expression.LookAtTargetType}
         * @prop angle {CommandRequester.AngleVector} Angle to twist to look towards.
         */

        /**
         * Interface for looking at a face (entity)
         * @interface CommandRequester.expression.LookAtEntity
         * @extends CommandRequester.expression.BaseLookAtTarget
         * @prop type="ENTITY" {CommandRequester.expression.LookAtTargetType}
         * @prop target {number} ID of the face (entity) to look toward.
         */

        /**
         * Interface for looking towards a 3D position in space
         * @interface CommandRequester.expression.Position
         * @extends CommandRequester.expression.BaseLookAtTarget
         * @prop type="POSITION" {CommandRequester.expression.LookAtTargetType}
         * @prop position {CommandRequester.Vector3} 3D point in space to look toward
         */

        /**
         * Interface for looking towards a 2D position relative to Jibo's screen
         * @interface CommandRequester.expression.ScreenCoords
         * @extends CommandRequester.expression.BaseLookAtTarget
         * @prop type="CAMERA" {CommandRequester.expression.LookAtTargetType}
         * @prop coords {CommandRequester.Vector2} 2D pixel point on Jibo's screen to look toward
         */

        /**
         * Type of lookAt target
         * @typedef CommandRequester.expression.LookAtTarget
         * @prop Angle {CommandRequester.expression.Angle} Twist/angle target
         * @prop LookAtEntity {CommandRequester.expression.LookAtEntity} Face target
         * @prop Position {CommandRequester.expression.Position} 3D position target
         * @prop ScreenCoords {CommandRequester.expression.ScreenCoords} 2D pixel target
         */

        /**
         * Enum of Jibo's available attention modes.
         * @typedef CommandRequester.expression.AttentionMode
         * @prop Off
         * @prop Idle
         * @prop Disengage
         * @prop Engaged
         * @prop Speaking
         * @prop Fixated
         * @prop Attractable
         * @prop Menu
         * @prop Command
         */

        /**
         * Options for listening for screen gestures
         * @interface CommandRequester.display.ScreenGestureFilter
         * @prop [area] {CommandRequester.display.Circle | CommandRequester.display.Rectangle} Area in which to listen for a screen gesture
         * @prop [type] {CommandRequester.display.ScreenGestureType} Type of gesture to listen for
         */

        /**
         * Definition for a circular area on Jibo's screen
         * @interface CommandRequester.display.Circle
         * @prop radius {number} Radius of the circle in pixels
         * @prop x {number} Horizontal coordinate of the circle's center in pixels
         * @prop y {number} Vertical coordinate of the circle's center in pixels
         */

        /**
         * Definition for a rectangular area on Jibo's screen
         * @interface CommandRequester.display.Rectangle
         * @prop height {number} Height of the rectangle in pixels
         * @prop width {number} Width of the rectangle in pixels
         * @prop x {number} Horizontal coordinate of the top-left corner of the rectangle in pixels
         * @prop y {number} Vertical coordinate of the top-left corner of the rectangle in pixels
         */

        /**
         * Enum of screen gesture types
         * @typedef CommandRequester.display.ScreenGestureType
         * @prop Tap 'TAP' A tap on Jibo's screen
         * @prop SwipeUp 'SWIPEUP' A swipe from bottom to top on Jibo's screen
         * @prop SwipeDown 'SWIPEDOWN' A swipe from top to bottom on Jibo's screen
         * @prop SwipeLeft 'SWIPELEFT' A swipe from right to left on Jibo's screen
         * @prop SwipeRight 'SWIPERIGHT' A swipe from left to right on Jibo's screen
         */

        /**
         * Data object for image info
         * @interface CommandRequester.display.ImageData
         * @prop name {string} Provide a unique name for the asset in the local cache
         * @prop [set] {string} Previously defined name of set of asssets to add this asset to
         * @prop src {string} URL to the image
         */