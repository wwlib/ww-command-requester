/**
 * Every request has a token with a completion promise and any events relative to that command.
 * @class RequestToken
 */

    /**
     * Protocol data to be sent along the websocket.
     * @private
     */

    /**
     * Unique id for this request, and any responses to it.
     * @private
     */

    /**
     * Internal flag for the CommandRequester to know that it no longer needs to track the token. Must
     * be updated by subclasses when `complete` resolves.
     * @private
     */

    /**
     * For subclasses to know where to send cancel requests
     * @private
     */

    /**
     * Request completion promise.
     * @method RequestToken#complete
     */

    /** @private */

    /**
     * Cancel the request.
     * @method RequestToken#cancel
     */

    /**
     * Internal listener method for handling responses
     * @private
     */

    /**
     * Internal listener method for handling responses
     * @private
     */