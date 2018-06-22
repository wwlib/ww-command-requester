import { v1 } from './requests';
import Expression = v1.expression.Expression;
import Display = v1.display.Display;
import Listen = v1.listen.Listen;
import Media = v1.media.Media;
import Perception = v1.perception.Perception;
import Assets = v1.assets.Assets;
import Config = v1.config.Config;
import { Event } from './events/Event';
import { HotWords } from './requests/v1/listen/requesters/HotWord';
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
export declare class CommandRequester {
    assets: Assets;
    config: Config;
    display: Display;
    expression: Expression;
    listen: Listen;
    media: Media;
    perception: Perception;
    /**
     * ID for the app
     * @name CommandRequester#AppID
     * @type string
     * @intdocs
     */
    AppID: string;
    /**
     * Event emitted when the connection is closed by the robot or a connection issue as
     * <br /> ```Event<{code:number, reason:string}>```
     * @name CommandRequester#disconnected
     * @type Event<number, string>
     */
    disconnected: Event<{
        code: number;
        reason: string;
    }>;
    private session;
    private sessionId;
    private robotVersion;
    private connection;
    private robotName;
    private inProgressTokens;
    constructor();
    /**
     * Connect to the specified robot. Overridden in the native languages
     * @method CommandRequester#connect
     * @param  {string}        robotName your-friendly-robot-name
     * @return {Promise<void>}
     * @intdocs
     */
    connect(robotName: string, options?: any): Promise<void>;
    /**
     * Disconnect all active robot connections.
     * Overridden in the native languages.
     * @method CommandRequester#disconnect
     * @intdocs
     */
    disconnect(): void;
    private generateTransactionID();
    private onMessage(data);
}
export declare namespace CommandRequester {
    /**
     * Definition for making Jibo twist to a certain angle
     * @interface CommandRequester.AngleVector
     * @prop theta {number} Twist/horizontal angle
     * @prop psi {number} Vertical angle
     */
    interface AngleVector {
        theta: number;
        psi: number;
    }
    /**
     * Definition for a point on Jibo's screen
     * @interface CommandRequester.Vector2
     * @prop x {number} Horizontal pixels
     * @prop y {number} Vertical pixels
     */
    interface Vector2 {
        x: number;
        y: number;
    }
    /**
     * Definition for a 3D point in space
     * @interface CommandRequester.Vector3
     * @prop x {number} Meters forward
     * @prop y {number} Meters left
     * @prop z {number} Meters up
     */
    interface Vector3 {
        x: number;
        y: number;
        z: number;
    }
    namespace listen {
        export import HotWord = HotWords;
    }
    namespace media {
        /**
         * Which camera to use
         * @typedef CommandRequester.media.Camera
         * @prop left {'Left'} Default; Use for photo-taking
         * @prop right {'Right'} Unsupported
         */
        enum Camera {
            left = "Left",
            right = "Right",
        }
        /**
         * Enum of photo resolution options
         * @typedef CommandRequester.media.CameraResolution
         * @prop high {'highRes'} Currently unsupported
         * @prop med {'medRes'} Higher res than default
         * @prop low {'lowRes'} Default
         * @prop micro {'microRes'} Lower res than default
         */
        enum CameraResolution {
            high = "highRes",
            med = "medRes",
            low = "lowRes",
            micro = "microRes",
        }
        /**
         * Enum of video type options
         * @typedef CommandRequester.media.VideoType
         * @prop normal {'NORMAL'} Default
         * @prop debug {'DEBUG'} Currently unsupported
         */
        enum VideoType {
            normal = "NORMAL",
            /** Currently unsupported */
            debug = "DEBUG",
        }
    }
    namespace config {
        /**
         * Robot configuration options that can be set by your app
         * @interface CommandRequester.config.SetConfigOptions
         * @prop mixer {number} Volume between 0 (mute) and 1 (loudest)
         */
        interface SetConfigOptions {
            mixer: number;
        }
    }
    namespace expression {
        /**
         * What type of lookAt Jibo should perform:
         * <br /> `"ANGLE" | "ENTITY" | "POSITION" | "CAMERA"`
         * @typedef CommandRequester.expression.LookAtTargetType
         */
        type LookAtTargetType = "ANGLE" | "ENTITY" | "POSITION" | "CAMERA";
        /**
         * Base interface for lookAt targets
         * @interface CommandRequester.expression.BaseLookAtTarget
         * @prop type {CommandRequester.expression.LookAtTargetType} Type of lookAt to perform
         * @prop levelHead {boolean} `true` to keep Jibo's head level while he moves
         */
        interface BaseLookAtTarget {
            type: LookAtTargetType;
            levelHead: boolean;
        }
        /**
         * Interface for looking towards an angle.
         * @interface CommandRequester.expression.Angle
         * @extends CommandRequester.expression.BaseLookAtTarget
         * @prop type="ANGLE" {CommandRequester.expression.LookAtTargetType}
         * @prop angle {CommandRequester.AngleVector} Angle to twist to look towards.
         */
        interface Angle extends BaseLookAtTarget {
            type: "ANGLE";
            angle: AngleVector;
        }
        /**
         * Interface for looking at a face (entity)
         * @interface CommandRequester.expression.LookAtEntity
         * @extends CommandRequester.expression.BaseLookAtTarget
         * @prop type="ENTITY" {CommandRequester.expression.LookAtTargetType}
         * @prop target {number} ID of the face (entity) to look toward.
         */
        interface LookAtEntity extends BaseLookAtTarget {
            type: "ENTITY";
            target: number;
        }
        /**
         * Interface for looking towards a 3D position in space
         * @interface CommandRequester.expression.Position
         * @extends CommandRequester.expression.BaseLookAtTarget
         * @prop type="POSITION" {CommandRequester.expression.LookAtTargetType}
         * @prop position {CommandRequester.Vector3} 3D point in space to look toward
         */
        interface Position extends BaseLookAtTarget {
            type: "POSITION";
            position: Vector3;
        }
        /**
         * Interface for looking towards a 2D position relative to Jibo's screen
         * @interface CommandRequester.expression.ScreenCoords
         * @extends CommandRequester.expression.BaseLookAtTarget
         * @prop type="CAMERA" {CommandRequester.expression.LookAtTargetType}
         * @prop coords {CommandRequester.Vector2} 2D pixel point on Jibo's screen to look toward
         */
        interface ScreenCoords extends BaseLookAtTarget {
            type: "CAMERA";
            coords: Vector2;
        }
        /**
         * Type of lookAt target
         * @typedef CommandRequester.expression.LookAtTarget
         * @prop Angle {CommandRequester.expression.Angle} Twist/angle target
         * @prop LookAtEntity {CommandRequester.expression.LookAtEntity} Face target
         * @prop Position {CommandRequester.expression.Position} 3D position target
         * @prop ScreenCoords {CommandRequester.expression.ScreenCoords} 2D pixel target
         */
        type LookAtTarget = Angle | LookAtEntity | Position | ScreenCoords;
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
        enum AttentionMode {
            Off = "OFF",
            Idle = "IDLE",
            Disengage = "DISENGAGE",
            Engaged = "ENGAGED",
            Speaking = "SPEAKING",
            Fixated = "FIXATED",
            Attractable = "ATTRACTABLE",
            Menu = "MENU",
            Command = "COMMAND",
        }
    }
    namespace display {
        /**
         * Options for listening for screen gestures
         * @interface CommandRequester.display.ScreenGestureFilter
         * @prop [area] {CommandRequester.display.Circle | CommandRequester.display.Rectangle} Area in which to listen for a screen gesture
         * @prop [type] {CommandRequester.display.ScreenGestureType} Type of gesture to listen for
         */
        interface ScreenGestureFilter {
            area?: Circle | Rectangle;
            type?: ScreenGestureType;
        }
        /**
         * Definition for a circular area on Jibo's screen
         * @interface CommandRequester.display.Circle
         * @prop radius {number} Radius of the circle in pixels
         * @prop x {number} Horizontal coordinate of the circle's center in pixels
         * @prop y {number} Vertical coordinate of the circle's center in pixels
         */
        interface Circle {
            radius: number;
            x: number;
            y: number;
        }
        /**
         * Definition for a rectangular area on Jibo's screen
         * @interface CommandRequester.display.Rectangle
         * @prop height {number} Height of the rectangle in pixels
         * @prop width {number} Width of the rectangle in pixels
         * @prop x {number} Horizontal coordinate of the top-left corner of the rectangle in pixels
         * @prop y {number} Vertical coordinate of the top-left corner of the rectangle in pixels
         */
        interface Rectangle {
            height: number;
            width: number;
            x: number;
            y: number;
        }
        /**
         * Enum of screen gesture types
         * @typedef CommandRequester.display.ScreenGestureType
         * @prop Tap 'TAP' A tap on Jibo's screen
         * @prop SwipeUp 'SWIPEUP' A swipe from bottom to top on Jibo's screen
         * @prop SwipeDown 'SWIPEDOWN' A swipe from top to bottom on Jibo's screen
         * @prop SwipeLeft 'SWIPELEFT' A swipe from right to left on Jibo's screen
         * @prop SwipeRight 'SWIPERIGHT' A swipe from left to right on Jibo's screen
         */
        enum ScreenGestureType {
            Tap = "TAP",
            SwipeUp = "SWIPEUP",
            SwipeDown = "SWIPEDOWN",
            SwipeLeft = "SWIPELEFT",
            SwipeRight = "SWIPERIGHT",
        }
        /**
         * Data object for image info
         * @interface CommandRequester.display.ImageData
         * @prop name {string} Provide a unique name for the asset in the local cache
         * @prop [set] {string} Previously defined name of set of asssets to add this asset to
         * @prop src {string} URL to the image
         */
        interface ImageData {
            name: string;
            set?: string;
            src: string;
        }
    }
}
