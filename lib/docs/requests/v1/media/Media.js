/**
 * Commands for working with Jibo's media
 * @namespace CommandRequester.media
 */

    /**
     * Commands for capturing media from Jibo's cameras
     * @namespace CommandRequester.media.capture
     */

    /**
     * Take a photo
     * @method CommandRequester.media.capture#photo
     * @param  {CommandRequester.media.Camera} [camera=left] Which camera to use
     * @param  {CommandRequester.media.CameraResolution} [resolution=low] Choose a resolution.
     * @param  {boolean} [distortion=true] `false` for fisheye lense.
     * @return {PhotoToken}
     */

    /**
     * Stream what Jibo currently sees
     * @method CommandRequester.media.capture#video
     * @param  {CommandRequester.media.VideoType} [videoType=normal] Choose a video type
     * @param  {number} [duration=0] How long to stream for. Currently unsupported. Call `cancel()` to stop streaming
     * @return {VideoToken}
     */