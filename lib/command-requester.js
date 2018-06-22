(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.commandRequester = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.commandProtocol = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoEvents = {
    TakePhoto: 'onTakePhoto'
};
exports.VideoEvents = {
    VideoReady: 'onVideoReady'
};
exports.DisconnectReason = {
    4000: 'Skill closed by user',
    4001: 'Skill closed due to robot error',
    4002: 'Incoming connection is replacing previous connection',
    4003: 'Connection closed due to inactivity',
    4004: 'Session closed due to reconnection time out',
    4005: 'Session closed due to failed reconnection'
};
exports.DisconnectCode = {
    HeadTouchExit: 4000,
    RobotError: 4001,
    NewConnection: 4002,
    InactivityTimeout: 4003,
    ReconnectTimeout: 4004,
    ReconnectError: 4005,
};
exports.ResponseStrings = {
    200: 'OK',
    201: 'Created',
    202: 'Accepted',
    400: 'Bad Request',
    403: 'Forbidden',
    404: 'Not Found',
    406: 'Not Acceptable',
    407: 'Request Timeout',
    409: 'Conflict',
    412: 'Precondition Failed',
    500: 'Internal Error',
    503: 'Service Unavailable',
    505: 'Version Not Supported',
    506: 'Version Conflict'
};
exports.AttentionMode = {
    Off: 'OFF',
    Idle: 'IDLE',
    Disengage: 'DISENGAGE',
    Engaged: 'ENGAGED',
    Speaking: 'SPEAKING',
    Fixated: 'FIXATED',
    Attractable: 'ATTRACTABLE',
    Menu: 'MENU',
    Command: 'COMMAND'
};
exports.CommandTypes = {
    StartSession: 'StartSession',
    GetConfig: 'GetConfig',
    SetConfig: 'SetConfig',
    Cancel: 'Cancel',
    Display: 'Display',
    SetAttention: 'SetAttention',
    Say: 'Say',
    Listen: 'Listen',
    LookAt: 'LookAt',
    TakePhoto: 'TakePhoto',
    Video: 'Video',
    Subscribe: 'Subscribe',
    FetchAsset: 'FetchAsset',
    UnloadAsset: 'UnloadAsset'
};
exports.AsyncCommandEvent = {
    Start: "onStart",
    Stop: "onStop",
    Error: "onError",
};
exports.DisplayEvents = {
    ViewStateChange: 'onViewStateChange'
};
exports.ViewStates = {
    Opened: 'Opened',
    Closed: 'Closed'
};
exports.DisplayViewType = {
    Eye: 'Eye',
    Text: 'Text',
    Image: 'Image',
    Empty: 'Empty',
};
exports.LookAtEvents = {
    LookAtAchieved: 'onLookAtAchieved',
    TrackEntityLost: 'onTrackEntityLost'
};
exports.HotWordEvents = {
    HotWordHeard: 'onHotWordHeard',
    ListenResult: 'onListenResult'
};
exports.StreamTypes = {
    Entity: 'Entity',
    HotWord: 'HotWord',
    HeadTouch: 'HeadTouch',
    Motion: 'Motion',
    ScreenGesture: 'ScreenGesture'
};
exports.ListenEvents = {
    ListenResult: 'onListenResult'
};
exports.ListenStopReasons = {
    NoInput: 'NoInput',
    NoMatch: 'NoMatch',
    Interrupted: 'Interrupted'
};
exports.EntityTrackEvents = {
    TrackUpdate: 'onEntityUpdate',
    TrackLost: 'onEntityLost',
    TrackGained: 'onEntityGained',
};
exports.MotionEvents = {
    MotionDetected: 'onMotionDetected'
};
exports.HeadTouchEvents = {
    HeadTouched: 'onHeadTouch'
};
exports.ScreenGestureEvents = {
    Tap: 'onTap',
    Swipe: 'onSwipe'
};
exports.ConfigEvents = {
    onConfig: 'onConfig'
};
exports.FetchAssetEvents = {
    AssetReady: 'onAssetReady',
    AssetFailed: 'onAssetFailed'
};
exports.UnloadAssetEvents = {
    UnloadAssetDone: 'onUnloadAssetDone',
    UnloadAssetFailed: 'onUnloadAssetFailed'
};
exports.CameraResolution = {
    HighRes: 'highRes',
    MedRes: 'medRes',
    LowRes: 'lowRes',
    MicroRes: 'microRes'
};
exports.SwipeDirection = {
    Up: 'Up',
    Down: 'Down',
    Right: 'Right',
    Left: 'Left'
};
exports.Camera = {
    Left: 'left',
    Right: 'right'
};
exports.EntityType = {
    Person: 'person',
    Unknown: 'unknown'
};
exports.DisplayErrorDetails = {
    IdNotUnique: 'View id is not unique',
    MissingValues: 'View was not given required values',
    InvalidViewType: 'View type is not valid',
    AssetError: 'Unable to access assets for display',
};
exports.DisplayChangeType = {
    Swap: 'Swap',
};
exports.FetchAssetErrorDetails = {
    OutOfMemory: 'Out of memory',
    InvalidURI: 'Invalid or Inaccessible URI'
};
exports.UnloadAssetErrorDetails = {
    InvalidName: 'Invalid or Inaccessible Name'
};
exports.ResponseCode = {
    OK: 200,
    Created: 201,
    Accepted: 202,
    BadRequest: 400,
    Forbidden: 403,
    NotFound: 404,
    NotAcceptable: 406,
    RequestTimeout: 407,
    Conflict: 409,
    PreconditionFailed: 412,
    InternalError: 500,
    ServiceUnavailable: 503,
    VersionNotSupported: 505,
    VersionConflict: 506
};
exports.VideoType = {
    Normal: 'NORMAL',
    Debug: 'DEBUG'
};
exports.ProtocolVersions = {
    v1: '1.0',
    v2: '2.0'
};

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isEvent(message) {
    return message.hasOwnProperty('EventBody');
}
exports.isEvent = isEvent;
function isAcknowledgement(message) {
    return message.hasOwnProperty('Response');
}
exports.isAcknowledgement = isAcknowledgement;
function isAngleTarget(target) {
    return target.hasOwnProperty('Angle');
}
exports.isAngleTarget = isAngleTarget;
function isEntityTarget(target) {
    return target.hasOwnProperty('Entity');
}
exports.isEntityTarget = isEntityTarget;
function isPositionTarget(target) {
    return target.hasOwnProperty('Position');
}
exports.isPositionTarget = isPositionTarget;
function isCameraTarget(target) {
    return target.hasOwnProperty('ScreenCoords');
}
exports.isCameraTarget = isCameraTarget;

},{}],3:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./Enums"));
const typeguards = require("./TypeGuards");
exports.typeguards = typeguards;

},{"./Enums":1,"./TypeGuards":2}]},{},[3])(3)
});



},{"./Enums":undefined,"./TypeGuards":undefined}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConnectionManager_1 = require("./connection/ConnectionManager");
const requests_1 = require("./requests");
var Session = requests_1.v1.session.Session;
var Expression = requests_1.v1.expression.Expression;
var Display = requests_1.v1.display.Display;
var Listen = requests_1.v1.listen.Listen;
var Media = requests_1.v1.media.Media;
var Perception = requests_1.v1.perception.Perception;
var Assets = requests_1.v1.assets.Assets;
var Config = requests_1.v1.config.Config;
const command_protocol_1 = require("@jibo/command-protocol");
const Event_1 = require("./events/Event");
const UUID_1 = require("./UUID");
const HotWord_1 = require("./requests/v1/listen/requesters/HotWord");
class CommandRequester {
    constructor() {
        this.robotVersion = '1.0';
        this.AppID = '';
        this.sessionId = null;
        this.inProgressTokens = new Map();
        this.connection = new ConnectionManager_1.default();
        this.connection.message.on(this.onMessage.bind(this));
        this.connection.disconnected.on((data) => {
            this.disconnected.emit({ code: data.code, reason: data.reason });
        });
        this.assets = new Assets(this);
        this.config = new Config(this);
        this.display = new Display(this);
        this.expression = new Expression(this);
        this.listen = new Listen(this);
        this.media = new Media(this);
        this.perception = new Perception(this);
        this.session = new Session(this);
        this.disconnected = new Event_1.Event('Disconnected');
    }
    connect(robotName, options) {
        this.robotName = robotName;
        console.log('CommandRequester : connect');
        return this.connection.connect(robotName, options)
            .then(() => {
            console.log('CommandRequester : connected, start session');
            const token = this.session.start();
            return token.complete.then((result) => {
                console.log('CommandRequester : session started, result: ', result);
                this.robotVersion = result.ResponseBody.Version;
                this.sessionId = result.ResponseBody.SessionID;
            });
        });
    }
    disconnect() {
        this.connection.close();
    }
    generateTransactionID() {
        return UUID_1.generateTransactionID();
    }
    sendRequest(command) {
        const requestId = this.generateTransactionID();
        const header = {
            TransactionID: requestId,
            SessionID: this.sessionId,
            Version: this.robotVersion,
            Credentials: null,
            AppID: this.AppID
        };
        this.connection.sendTo(this.robotName, {
            ClientHeader: header,
            Command: command
        });
        return requestId;
    }
    sendToken(token) {
        token.requestId = this.sendRequest(token.protocol);
        if (!token.isComplete) {
            this.inProgressTokens.set(token.requestId, token);
        }
    }
    onMessage(data) {
        const response = data.data;
        let id = null;
        let ack = null;
        let event = null;
        if (command_protocol_1.typeguards.isAcknowledgement(response)) {
            id = response.ResponseHeader.TransactionID;
            ack = response;
        }
        else if (command_protocol_1.typeguards.isEvent(response)) {
            id = response.EventHeader.TransactionID;
            event = response;
        }
        else {
            return;
        }
        if (this.inProgressTokens.has(id)) {
            const token = this.inProgressTokens.get(id);
            if (ack) {
                token.handleAck(ack);
            }
            else {
                token.handleEvent(event);
            }
            if (token.isComplete) {
                this.inProgressTokens.delete(id);
            }
        }
    }
}
exports.CommandRequester = CommandRequester;
(function (CommandRequester) {
    let listen;
    (function (listen) {
        listen.HotWord = HotWord_1.HotWords;
    })(listen = CommandRequester.listen || (CommandRequester.listen = {}));
    let media;
    (function (media) {
        let Camera;
        (function (Camera) {
            Camera["left"] = "Left";
            Camera["right"] = "Right";
        })(Camera = media.Camera || (media.Camera = {}));
        let CameraResolution;
        (function (CameraResolution) {
            CameraResolution["high"] = "highRes";
            CameraResolution["med"] = "medRes";
            CameraResolution["low"] = "lowRes";
            CameraResolution["micro"] = "microRes";
        })(CameraResolution = media.CameraResolution || (media.CameraResolution = {}));
        let VideoType;
        (function (VideoType) {
            VideoType["normal"] = "NORMAL";
            VideoType["debug"] = "DEBUG";
        })(VideoType = media.VideoType || (media.VideoType = {}));
    })(media = CommandRequester.media || (CommandRequester.media = {}));
    let expression;
    (function (expression) {
        let AttentionMode;
        (function (AttentionMode) {
            AttentionMode["Off"] = "OFF";
            AttentionMode["Idle"] = "IDLE";
            AttentionMode["Disengage"] = "DISENGAGE";
            AttentionMode["Engaged"] = "ENGAGED";
            AttentionMode["Speaking"] = "SPEAKING";
            AttentionMode["Fixated"] = "FIXATED";
            AttentionMode["Attractable"] = "ATTRACTABLE";
            AttentionMode["Menu"] = "MENU";
            AttentionMode["Command"] = "COMMAND";
        })(AttentionMode = expression.AttentionMode || (expression.AttentionMode = {}));
    })(expression = CommandRequester.expression || (CommandRequester.expression = {}));
    let display;
    (function (display) {
        let ScreenGestureType;
        (function (ScreenGestureType) {
            ScreenGestureType["Tap"] = "TAP";
            ScreenGestureType["SwipeUp"] = "SWIPEUP";
            ScreenGestureType["SwipeDown"] = "SWIPEDOWN";
            ScreenGestureType["SwipeLeft"] = "SWIPELEFT";
            ScreenGestureType["SwipeRight"] = "SWIPERIGHT";
        })(ScreenGestureType = display.ScreenGestureType || (display.ScreenGestureType = {}));
    })(display = CommandRequester.display || (CommandRequester.display = {}));
})(CommandRequester = exports.CommandRequester || (exports.CommandRequester = {}));

},{"./UUID":3,"./connection/ConnectionManager":4,"./events/Event":5,"./requests":7,"./requests/v1/listen/requesters/HotWord":22,"@jibo/command-protocol":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateTransactionID() {
    if (typeof process === 'object') {
        const crypto = require('crypto');
        const hashSource = 'hi' + process.hrtime();
        return crypto.createHash('md5').update(hashSource).digest('hex');
    }
    return uuid.v4().split('-').join('');
}
exports.generateTransactionID = generateTransactionID;

},{"crypto":undefined}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = require("../events/Event");
const PORT = 8160;
const NODE = typeof process === 'object';
class ConnectionManager {
    constructor() {
        this.onConnection = this.onConnection.bind(this);
        this.onClose = this.onClose.bind(this);
        this.namedConnections = {};
        this.connected = new Event_1.Event('Connected');
        this.disconnected = new Event_1.Event('Disconnected');
        this.message = new Event_1.Event('Message Received');
    }
    connect(robotName, options) {
        if (this.isConnected(robotName)) {
            return Promise.resolve({ robot: robotName });
        }
        return new Promise((resolve, reject) => {
            this.connected.on(resolve);
            this.startWebSocket(Object.assign({ hostname: robotName }, options), (err) => {
                this.connected.off(resolve);
                reject(err);
            });
        });
    }
    close() {
        for (let robot in this.namedConnections) {
            this.namedConnections[robot].close();
        }
        this.namedConnections = {};
    }
    isConnected(name) {
        return name in this.namedConnections;
    }
    sendTo(name, command) {
        if (!this.isConnected(name)) {
            return;
        }
        if (NODE) {
            this.namedConnections[name].send(JSON.stringify(command));
        }
        else {
            this.namedConnections[name].send(JSON.stringify(command));
        }
    }
    startWebSocket(settings, onError) {
        const { hostname } = settings;
        const port = settings.port || PORT;
        const protocol = settings.cert ? 'wss' : 'ws';
        const connectionString = `${protocol}://${hostname}:${port}`;
        const options = settings.cert
            ? {
                key: settings.key,
                cert: settings.cert,
                rejectUnauthorized: false,
            }
            : {};
        if (this.namedConnections[hostname]) {
            try {
                this.namedConnections[hostname].close();
            }
            catch (e) {
            }
            this.namedConnections[hostname] = null;
        }
        try {
            let websocket;
            if (NODE) {
                const WebSocket = require('ws');
                websocket = this.namedConnections[hostname] = new WebSocket(connectionString, options);
            }
            else {
                websocket = this.namedConnections[hostname] = new WebSocket(connectionString);
            }
            const errorCallback = (e) => {
                if (onError) {
                    onError(e);
                }
                websocket.onerror = () => { return; };
                this.onClose(hostname, 0, 'Error in websocket');
                if (NODE) {
                    websocket.removeEventListener("error", errorCallback);
                }
                else {
                    websocket.removeEventListener("error", errorCallback);
                }
            };
            const onClose = (e) => this.onClose(hostname, e.code, e.reason);
            if (NODE) {
                websocket.addEventListener("error", errorCallback);
                websocket.addEventListener('open', () => {
                    this.onConnection(hostname, websocket);
                });
                websocket.addEventListener('close', onClose);
            }
            else {
                websocket.addEventListener("error", errorCallback);
                websocket.addEventListener('open', () => {
                    this.onConnection(hostname, websocket);
                });
                websocket.addEventListener('close', onClose);
            }
        }
        catch (err) {
            this.namedConnections[hostname] = null;
        }
    }
    onConnection(hostname, ws) {
        this.connected.emit({ robot: hostname });
        this.namedConnections[hostname] = ws;
        const listener = (message) => {
            if (message.data) {
                message = message.data;
            }
            let msg = JSON.parse(message.toString());
            this.message.emit({ robot: hostname, data: msg });
        };
        if (NODE) {
            ws.addEventListener('message', listener);
        }
        else {
            ws.addEventListener('message', listener);
        }
    }
    onClose(robot, code, reason) {
        if (this.namedConnections[robot]) {
            this.disconnected.emit({ robot, code, reason });
            this.namedConnections[robot].close();
            this.namedConnections[robot] = null;
        }
    }
}
exports.default = ConnectionManager;

},{"../events/Event":5,"ws":undefined}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmitterMode;
(function (EmitterMode) {
    EmitterMode["ALL_HANDLERS"] = "ALL_HANDLERS";
    EmitterMode["FIRST_HANDLER"] = "FIRST_HANDLER";
    EmitterMode["LAST_HANDLER"] = "LAST_HANDLER";
})(EmitterMode = exports.EmitterMode || (exports.EmitterMode = {}));
class Event {
    constructor(name) {
        this.name = name;
        this._onceEvents = new Map();
        this._events = [];
        this._maxListeners = 10;
        this._emitterMode = EmitterMode.ALL_HANDLERS;
    }
    listeners() {
        return this._events.slice();
    }
    setMaxListeners(n) {
        this._maxListeners = n;
        return this;
    }
    getMaxListeners() {
        return this._maxListeners;
    }
    once(handler) {
        let handlerWrapper = this._onceEvents.get(handler);
        if (!handlerWrapper) {
            handlerWrapper = (data) => {
                this._onceEvents.delete(handler);
                this.removeListener(handlerWrapper);
                handler(data);
            };
            this._onceEvents.set(handler, handlerWrapper);
        }
        return this.on(handlerWrapper);
    }
    on(handler) {
        if (this._events.length >= this._maxListeners) {
            console.warn(`Event '${this.name}': Max listeners ${this._maxListeners} reached. `, new Error().stack);
        }
        this._events.push(handler);
        return this;
    }
    removeLastListener() {
        this._events.splice(this._events.length - 1, 1);
    }
    removeFirstListener() {
        this._events.splice(0, 1);
    }
    addListener(handler) {
        return this.on(handler);
    }
    removeListener(handler) {
        let index = this._events.indexOf(handler);
        while (index !== -1) {
            this._events.splice(index, 1);
            index = this._events.indexOf(handler, index);
        }
        const onceHandler = this._onceEvents.get(handler);
        if (onceHandler) {
            let index = this._events.indexOf(onceHandler);
            while (index !== -1) {
                this._events.splice(index, 1);
                index = this._events.indexOf(onceHandler, index);
            }
            this._onceEvents.delete(handler);
        }
        return this;
    }
    off(handler) {
        return this.removeListener(handler);
    }
    removeAllListeners() {
        this._events = [];
        this._onceEvents.clear();
        return this;
    }
    emit(data) {
        if (this._emitterMode === EmitterMode.ALL_HANDLERS) {
            let copy = this.listeners();
            for (let i = 0; i < copy.length; i++) {
                let handler = copy[i];
                handler(data);
            }
        }
        else if (this._emitterMode === EmitterMode.LAST_HANDLER) {
            let handler = this._events[this._events.length - 1];
            if (handler) {
                handler(data);
            }
            return !!handler;
        }
        else if (this._emitterMode === EmitterMode.FIRST_HANDLER) {
            let handler = this._events[0];
            if (handler) {
                handler(data);
            }
            return !!handler;
        }
        return this._events.length > 0;
    }
    setMode(mode) {
        if (!EmitterMode[mode]) {
            throw new Error("Emitter mode of typed events must be ALL_HANDLERS, FIRST_HANDLER, or LAST_HANDLER");
        }
        this._emitterMode = mode;
    }
    waitFor(timeoutMs = -1) {
        return new Promise((resolve, reject) => {
            let timeoutHandle;
            const eventHandler = data => {
                if (timeoutHandle) {
                    clearTimeout(timeoutHandle);
                }
                resolve(data);
            };
            if (timeoutMs > 0) {
                timeoutHandle = setTimeout(() => {
                    this.removeListener(eventHandler);
                    reject('TIMEOUT');
                }, timeoutMs);
            }
            this.once(eventHandler);
        });
    }
    listenerCount() {
        return this._events.length;
    }
}
exports.Event = Event;

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RequestAPI {
    constructor(owner) {
        this.owner = owner;
    }
    sendToken(token) {
        this.owner.sendToken(token);
    }
}
exports.default = RequestAPI;

},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const v1 = require("./v1");
exports.v1 = v1;
const v2 = require("./v2");
exports.v2 = v2;

},{"./v1":20,"./v2":37}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RequestToken_1 = require("../../tokens/RequestToken");
const RequestAPI_1 = require("../RequestAPI");
const command_protocol_1 = require("@jibo/command-protocol");
class SessionToken extends RequestToken_1.default {
    constructor(owner, protocol) {
        super(owner, protocol);
    }
    handleAck(ack) {
        if (ack.Response.ResponseCode >= 400) {
            this.isComplete = true;
            this._complete.reject(ack.Response);
            return;
        }
        if (ack.Response.ResponseCode === command_protocol_1.ResponseCode.OK) {
            this.isComplete = true;
            this._complete.resolve(ack.Response);
            return;
        }
    }
    handleEvent(event) {
    }
}
exports.SessionToken = SessionToken;
class Session extends RequestAPI_1.default {
    static generateProtocol() {
        return {
            Type: command_protocol_1.CommandTypes.StartSession
        };
    }
    start() {
        const protocol = Session.generateProtocol();
        return this.generateToken(protocol, true);
    }
    generateToken(protocol, andSend = false) {
        const token = new SessionToken(this.owner, protocol);
        if (andSend) {
            super.sendToken(token);
        }
        return token;
    }
}
exports.Session = Session;

},{"../../tokens/RequestToken":43,"../RequestAPI":6,"@jibo/command-protocol":1}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Assets_1 = require("./requesters/Assets");
class Assets {
    constructor(requester) {
        this.assetsRequester = new Assets_1.Assets(requester);
    }
    load(uri, name) {
        const protocol = Assets_1.Assets.generateLoadProtocol(uri, name);
        return this.assetsRequester.generateToken(protocol, true);
    }
    unload(name) {
        const protocol = Assets_1.Assets.generateUnloadProtocol(name);
        return this.assetsRequester.generateToken(protocol, true);
    }
}
exports.Assets = Assets;

},{"./requesters/Assets":10}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RequestToken_1 = require("../../../../tokens/RequestToken");
const RequestAPI_1 = require("../../../RequestAPI");
const command_protocol_1 = require("@jibo/command-protocol");
class FetchAssetToken extends RequestToken_1.default {
    constructor(owner, protocol) {
        super(owner, protocol);
    }
    handleAck(ack) {
        if (ack.Response.ResponseCode >= 400) {
            this.isComplete = true;
            this._complete.reject(ack.Response);
            return;
        }
    }
    handleEvent(event) {
        const message = event.EventBody;
        switch (message.Event) {
            case command_protocol_1.FetchAssetEvents.AssetReady:
                this.isComplete = true;
                this._complete.resolve(message);
                break;
            case command_protocol_1.FetchAssetEvents.AssetFailed:
                this.isComplete = true;
                this._complete.reject(message);
                break;
        }
    }
}
exports.FetchAssetToken = FetchAssetToken;
class UnloadAssetToken extends RequestToken_1.default {
    constructor(owner, protocol) {
        super(owner, protocol);
    }
    handleAck(ack) {
        if (ack.Response.ResponseCode >= 400) {
            this.isComplete = true;
            this._complete.reject(ack.Response);
            return;
        }
    }
    handleEvent(event) {
        const message = event.EventBody;
        switch (message.Event) {
            case command_protocol_1.UnloadAssetEvents.UnloadAssetDone:
                this.isComplete = true;
                this._complete.resolve(message);
                break;
            case command_protocol_1.UnloadAssetEvents.UnloadAssetFailed:
                this.isComplete = true;
                this._complete.reject(message);
                break;
        }
    }
}
exports.UnloadAssetToken = UnloadAssetToken;
class Assets extends RequestAPI_1.default {
    static generateLoadProtocol(uri, name) {
        return {
            Type: command_protocol_1.CommandTypes.FetchAsset,
            URI: uri,
            Name: name
        };
    }
    static generateUnloadProtocol(name) {
        return {
            Type: command_protocol_1.CommandTypes.UnloadAsset,
            Name: name
        };
    }
    generateToken(protocol, andSend = false) {
        let token;
        if (protocol.Type === command_protocol_1.CommandTypes.FetchAsset) {
            token = new FetchAssetToken(this.owner, protocol);
        }
        else if (protocol.Type === command_protocol_1.CommandTypes.UnloadAsset) {
            token = new UnloadAssetToken(this.owner, protocol);
        }
        if (andSend) {
            super.sendToken(token);
        }
        return token;
    }
}
exports.Assets = Assets;

},{"../../../../tokens/RequestToken":43,"../../../RequestAPI":6,"@jibo/command-protocol":1}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = require("./requesters/Config");
class Config {
    constructor(requester) {
        this.configRequester = new Config_1.Config(requester);
    }
    get() {
        const protocol = Config_1.Config.generateProtocol();
        return this.configRequester.generateToken(protocol, true);
    }
    set(options) {
        const protocol = Config_1.Config.generateProtocol({
            Mixer: options.mixer,
        });
        return this.configRequester.generateToken(protocol, true);
    }
}
exports.Config = Config;

},{"./requesters/Config":12}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RequestToken_1 = require("../../../../tokens/RequestToken");
const RequestAPI_1 = require("../../../RequestAPI");
const command_protocol_1 = require("@jibo/command-protocol");
class SetConfigToken extends RequestToken_1.default {
    constructor(owner, protocol) {
        super(owner, protocol);
    }
    handleAck(ack) {
        if (ack.Response.ResponseCode >= 400) {
            this.isComplete = true;
            this._complete.reject(ack.Response);
            return;
        }
    }
    handleEvent(event) {
        switch (event.EventBody.Event) {
            case command_protocol_1.AsyncCommandEvent.Stop:
                this.isComplete = true;
                this._complete.resolve();
                break;
            case command_protocol_1.AsyncCommandEvent.Error:
                this.isComplete = true;
                this._complete.reject(event.EventBody);
                break;
        }
    }
}
exports.SetConfigToken = SetConfigToken;
class GetConfigToken extends RequestToken_1.default {
    constructor(owner, protocol) {
        super(owner, protocol);
    }
    handleAck(ack) {
        if (ack.Response.ResponseCode >= 400) {
            this.isComplete = true;
            this._complete.reject(ack.Response);
            return;
        }
    }
    handleEvent(event) {
        let message = event.EventBody;
        switch (message.Event) {
            case command_protocol_1.ConfigEvents.onConfig:
                this.isComplete = true;
                this._complete.resolve(message);
                break;
        }
    }
}
exports.GetConfigToken = GetConfigToken;
class Config extends RequestAPI_1.default {
    static generateProtocol(options) {
        if (options) {
            return {
                Type: command_protocol_1.CommandTypes.SetConfig,
                Options: options
            };
        }
        return {
            Type: command_protocol_1.CommandTypes.GetConfig
        };
    }
    generateToken(protocol, andSend = false) {
        let token;
        if (protocol.Type === command_protocol_1.CommandTypes.GetConfig) {
            token = new GetConfigToken(this.owner, protocol);
        }
        else if (protocol.Type === command_protocol_1.CommandTypes.SetConfig) {
            token = new SetConfigToken(this.owner, protocol);
        }
        if (andSend) {
            super.sendToken(token);
        }
        return token;
    }
    sendToken(token) {
        this.owner.sendToken(token);
    }
}
exports.Config = Config;

},{"../../../../tokens/RequestToken":43,"../../../RequestAPI":6,"@jibo/command-protocol":1}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CommandRequester_1 = require("../../../CommandRequester");
const command_protocol_1 = require("@jibo/command-protocol");
const Display_1 = require("./requesters/Display");
const Gesture_1 = require("./requesters/Gesture");
class Display {
    constructor(requester) {
        this.displayRequest = new Display_1.Display(requester);
        this.subscribe = new Subscriptions(requester);
    }
    EyeView(name) {
        return {
            Type: command_protocol_1.DisplayViewType.Eye,
            Name: name
        };
    }
    ImageView(name, data) {
        return {
            Type: command_protocol_1.DisplayViewType.Image,
            Name: name,
            Image: data
        };
    }
    TextView(name, text) {
        return {
            Type: command_protocol_1.DisplayViewType.Text,
            Name: name,
            Text: text
        };
    }
    EmptyView(name) {
        return {
            Type: command_protocol_1.DisplayViewType.Empty,
            Name: name,
        };
    }
    swap(view, openTransition, closeTransition) {
        const protocol = Display_1.Display.generateProtocol(view, openTransition, closeTransition);
        return this.displayRequest.generateToken(protocol, true);
    }
}
exports.Display = Display;
class Subscriptions {
    constructor(requester) {
        this.gestureRequest = new Gesture_1.Gesture(requester);
    }
    gesture(filter = {}) {
        const filterType = filter
            ? CommandRequester_1.CommandRequester.display.ScreenGestureType[filter.type]
            : undefined;
        const protocol = Gesture_1.Gesture.generateProtocol({
            Area: filter.area,
            Type: filterType,
        });
        return this.gestureRequest.generateToken(protocol, true);
    }
}
exports.Subscriptions = Subscriptions;

},{"../../../CommandRequester":2,"./requesters/Display":14,"./requesters/Gesture":15,"@jibo/command-protocol":1}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RequestToken_1 = require("../../../../tokens/RequestToken");
const RequestAPI_1 = require("../../../RequestAPI");
const Event_1 = require("../../../../events/Event");
const command_protocol_1 = require("@jibo/command-protocol");
class DisplayToken extends RequestToken_1.default {
    constructor(owner, protocol) {
        super(owner, protocol);
        this.opened = new Event_1.Event('Opened');
    }
    handleAck(ack) {
        if (ack.Response.ResponseCode >= 400) {
            this.isComplete = true;
            this._complete.reject(ack.Response);
            return;
        }
    }
    handleEvent(event) {
        const eventData = event.EventBody;
        switch (eventData.Event) {
            case command_protocol_1.AsyncCommandEvent.Stop:
                this.isComplete = true;
                this._complete.resolve();
                break;
            case command_protocol_1.AsyncCommandEvent.Error:
                this.isComplete = true;
                this._complete.reject(eventData);
                break;
            case command_protocol_1.DisplayEvents.ViewStateChange:
                switch (eventData.State) {
                    case command_protocol_1.ViewStates.Opened:
                        this.opened.emit();
                        break;
                }
        }
    }
}
exports.DisplayToken = DisplayToken;
class Display extends RequestAPI_1.default {
    static generateProtocol(view, openTransition, closeTransition) {
        return {
            Type: command_protocol_1.CommandTypes.Display,
            View: view,
            OpenTransition: openTransition,
            CloseTransition: closeTransition
        };
    }
    generateToken(protocol, andSend = false) {
        const token = new DisplayToken(this.owner, protocol);
        if (andSend) {
            super.sendToken(token);
        }
        return token;
    }
}
exports.Display = Display;

},{"../../../../events/Event":5,"../../../../tokens/RequestToken":43,"../../../RequestAPI":6,"@jibo/command-protocol":1}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RequestToken_1 = require("../../../../tokens/RequestToken");
const RequestAPI_1 = require("../../../RequestAPI");
const Event_1 = require("../../../../events/Event");
const command_protocol_1 = require("@jibo/command-protocol");
class ScreenGestureToken extends RequestToken_1.default {
    constructor(owner, protocol) {
        super(owner, protocol);
        this.tap = new Event_1.Event(command_protocol_1.ScreenGestureEvents.Tap);
        this.swipe = new Event_1.Event(command_protocol_1.ScreenGestureEvents.Swipe);
    }
    handleAck(ack) {
        if (ack.Response.ResponseCode >= 400) {
            this.isComplete = true;
            this._complete.reject(ack.Response);
            return;
        }
    }
    handleEvent(event) {
        const eventData = event.EventBody;
        switch (eventData.Event) {
            case command_protocol_1.AsyncCommandEvent.Stop:
                this.isComplete = true;
                this._complete.resolve();
                break;
            case command_protocol_1.AsyncCommandEvent.Error:
                this.isComplete = true;
                this._complete.reject(eventData);
                break;
            case command_protocol_1.ScreenGestureEvents.Tap:
                this.tap.emit(eventData.Coordinate);
                break;
            case command_protocol_1.ScreenGestureEvents.Swipe:
                this.swipe.emit(eventData.Direction);
                break;
        }
    }
}
exports.ScreenGestureToken = ScreenGestureToken;
class Gesture extends RequestAPI_1.default {
    constructor(requester) {
        super(requester);
    }
    static generateProtocol(filter = {}) {
        return {
            Type: command_protocol_1.CommandTypes.Subscribe,
            StreamType: command_protocol_1.StreamTypes.ScreenGesture,
            StreamFilter: filter
        };
    }
    generateToken(protocol, andSend = false) {
        const token = new ScreenGestureToken(this.owner, protocol);
        if (andSend) {
            super.sendToken(token);
        }
        return token;
    }
}
exports.Gesture = Gesture;

},{"../../../../events/Event":5,"../../../../tokens/RequestToken":43,"../../../RequestAPI":6,"@jibo/command-protocol":1}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Look_1 = require("./requesters/Look");
const Say_1 = require("./requesters/Say");
const Attention_1 = require("./requesters/Attention");
class Expression {
    constructor(requester) {
        this.attentionRequest = new Attention_1.Attention(requester);
        this.lookRequest = new Look_1.Look(requester);
        this.sayRequest = new Say_1.Say(requester);
    }
    look(lookAtTarget, shouldTrack, levelHead = true) {
        let protocol;
        switch (lookAtTarget.type) {
            case "ANGLE":
                const angle = [lookAtTarget.angle.theta, lookAtTarget.angle.psi];
                protocol = Look_1.Look.generateProtocol(Look_1.TargetMode.Angle, angle, levelHead, false);
                break;
            case "POSITION":
                const position = [lookAtTarget.position.x, lookAtTarget.position.y, lookAtTarget.position.z];
                protocol = Look_1.Look.generateProtocol(Look_1.TargetMode.Position, position, levelHead, false);
                break;
            case "ENTITY":
                const target = lookAtTarget.target;
                protocol = Look_1.Look.generateProtocol(Look_1.TargetMode.Entity, target, levelHead, false);
                break;
            case "CAMERA":
                const coords = [lookAtTarget.coords.x, lookAtTarget.coords.y];
                protocol = Look_1.Look.generateProtocol(Look_1.TargetMode.ScreenCoords, coords, levelHead, shouldTrack);
                break;
        }
        return this.lookRequest.generateToken(protocol, true);
    }
    say(text, speakOptions, autoRuleConfig) {
        const protocol = Say_1.Say.generateProtocol(text, speakOptions, autoRuleConfig);
        return this.sayRequest.generateToken(protocol, true);
    }
    setAttention(mode) {
        const protocol = Attention_1.Attention.generateProtocol(mode);
        return this.attentionRequest.generateToken(protocol, true);
    }
}
exports.Expression = Expression;

},{"./requesters/Attention":17,"./requesters/Look":18,"./requesters/Say":19}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RequestToken_1 = require("../../../../tokens/RequestToken");
const RequestAPI_1 = require("../../../RequestAPI");
const command_protocol_1 = require("@jibo/command-protocol");
class AttentionToken extends RequestToken_1.default {
    constructor(owner, protocol) {
        super(owner, protocol);
    }
    handleAck(ack) {
        if (ack.Response.ResponseCode >= 400) {
            this.isComplete = true;
            this._complete.reject(ack.Response);
            return;
        }
    }
    handleEvent(event) {
        switch (event.EventBody.Event) {
            case command_protocol_1.AsyncCommandEvent.Stop:
                this.isComplete = true;
                this._complete.resolve();
                break;
            case command_protocol_1.AsyncCommandEvent.Error:
                this.isComplete = true;
                this._complete.reject(event.EventBody);
                break;
        }
    }
}
exports.AttentionToken = AttentionToken;
class Attention extends RequestAPI_1.default {
    static generateProtocol(mode) {
        return {
            Type: command_protocol_1.CommandTypes.SetAttention,
            Mode: mode,
        };
    }
    generateToken(protocol, andSend = false) {
        const token = new AttentionToken(this.owner, protocol);
        if (andSend) {
            super.sendToken(token);
        }
        return token;
    }
}
exports.Attention = Attention;

},{"../../../../tokens/RequestToken":43,"../../../RequestAPI":6,"@jibo/command-protocol":1}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RequestToken_1 = require("../../../../tokens/RequestToken");
const RequestAPI_1 = require("../../../RequestAPI");
const command_protocol_1 = require("@jibo/command-protocol");
var TargetMode;
(function (TargetMode) {
    TargetMode[TargetMode["Position"] = 0] = "Position";
    TargetMode[TargetMode["Angle"] = 1] = "Angle";
    TargetMode[TargetMode["Entity"] = 2] = "Entity";
    TargetMode[TargetMode["ScreenCoords"] = 3] = "ScreenCoords";
})(TargetMode = exports.TargetMode || (exports.TargetMode = {}));
class LookToken extends RequestToken_1.default {
    constructor(owner, protocol) {
        super(owner, protocol);
    }
    handleAck(ack) {
        if (ack.Response.ResponseCode >= 400) {
            this.isComplete = true;
            this._complete.reject(ack.Response);
            return;
        }
    }
    handleEvent(event) {
        const eventData = event.EventBody;
        switch (eventData.Event) {
            case command_protocol_1.AsyncCommandEvent.Stop:
                this.isComplete = true;
                this._complete.resolve();
                break;
            case command_protocol_1.AsyncCommandEvent.Error:
                this.isComplete = true;
                this._complete.reject(eventData);
                break;
            case command_protocol_1.LookAtEvents.LookAtAchieved:
                this.isComplete = true;
                this._complete.resolve(eventData);
                break;
            case command_protocol_1.LookAtEvents.TrackEntityLost:
                this.isComplete = true;
                this._complete.resolve(eventData);
                break;
        }
    }
}
exports.LookToken = LookToken;
class Look extends RequestAPI_1.default {
    static generateProtocol(targetMode, target, levelHead, shouldTrack = false) {
        let lookAtTarget;
        switch (targetMode) {
            case TargetMode.Position:
                lookAtTarget = { Position: target };
                break;
            case TargetMode.Angle:
                lookAtTarget = { Angle: target };
                break;
            case TargetMode.Entity:
                lookAtTarget = { Entity: target };
                break;
            case TargetMode.ScreenCoords:
                lookAtTarget = { ScreenCoords: target };
                break;
        }
        return {
            Type: command_protocol_1.CommandTypes.LookAt,
            LookAtTarget: lookAtTarget,
            TrackFlag: shouldTrack,
            LevelHeadFlag: levelHead
        };
    }
    generateToken(protocol, andSend = false) {
        const token = new LookToken(this.owner, protocol);
        if (andSend) {
            super.sendToken(token);
        }
        return token;
    }
}
exports.Look = Look;

},{"../../../../tokens/RequestToken":43,"../../../RequestAPI":6,"@jibo/command-protocol":1}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RequestToken_1 = require("../../../../tokens/RequestToken");
const RequestAPI_1 = require("../../../RequestAPI");
const command_protocol_1 = require("@jibo/command-protocol");
class SayToken extends RequestToken_1.default {
    constructor(owner, protocol) {
        super(owner, protocol);
    }
    handleAck(ack) {
        if (ack.Response.ResponseCode >= 400) {
            this.isComplete = true;
            this._complete.reject(ack.Response);
            return;
        }
    }
    handleEvent(event) {
        switch (event.EventBody.Event) {
            case command_protocol_1.AsyncCommandEvent.Stop:
                this.isComplete = true;
                this._complete.resolve();
                break;
            case command_protocol_1.AsyncCommandEvent.Error:
                this.isComplete = true;
                this._complete.reject(event.EventBody);
                break;
        }
    }
}
exports.SayToken = SayToken;
class Say extends RequestAPI_1.default {
    static generateProtocol(esmlUri, speakOptions, autoRuleConfig) {
        return {
            Type: command_protocol_1.CommandTypes.Say,
            ESML: esmlUri,
            SpeakOptions: speakOptions,
            AutoRuleConfig: autoRuleConfig
        };
    }
    generateToken(protocol, andSend = false) {
        const token = new SayToken(this.owner, protocol);
        if (andSend) {
            super.sendToken(token);
        }
        return token;
    }
}
exports.Say = Say;

},{"../../../../tokens/RequestToken":43,"../../../RequestAPI":6,"@jibo/command-protocol":1}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assets = require("./assets/Assets");
exports.assets = assets;
const config = require("./config/Config");
exports.config = config;
const display = require("./display/Display");
exports.display = display;
const expression = require("./expression/Expression");
exports.expression = expression;
const listen = require("./listen/Listen");
exports.listen = listen;
const media = require("./media/Media");
exports.media = media;
const session = require("./Session");
exports.session = session;
const perception = require("./perception/Perception");
exports.perception = perception;

},{"./Session":8,"./assets/Assets":9,"./config/Config":11,"./display/Display":13,"./expression/Expression":16,"./listen/Listen":21,"./media/Media":24,"./perception/Perception":27}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Listen_1 = require("./requesters/Listen");
const HotWord_1 = require("./requesters/HotWord");
class Listen {
    constructor(requester) {
        this.listenRequest = new Listen_1.Listen(requester);
        this.subscribe = new Subscriptions(requester);
    }
    start(maxSpeechTimeout = 15, maxNoSpeechTimeout = 15, languageCode = 'en-US') {
        const protocol = Listen_1.Listen.generateProtocol(maxSpeechTimeout, maxNoSpeechTimeout, languageCode);
        return this.listenRequest.generateToken(protocol, true);
    }
}
exports.Listen = Listen;
class Subscriptions {
    constructor(requester) {
        this.hotWordRequest = new HotWord_1.HotWord(requester);
    }
    hotword(listen = false, hotword = HotWord_1.HotWords.HEY_JIBO) {
        const protocol = HotWord_1.HotWord.generateProtocol(listen, hotword);
        return this.hotWordRequest.generateToken(protocol, true);
    }
}
exports.Subscriptions = Subscriptions;

},{"./requesters/HotWord":22,"./requesters/Listen":23}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RequestToken_1 = require("../../../../tokens/RequestToken");
const Event_1 = require("../../../../events/Event");
const RequestAPI_1 = require("../../../RequestAPI");
const command_protocol_1 = require("@jibo/command-protocol");
var HotWords;
(function (HotWords) {
    HotWords["HEY_JIBO"] = "hey jibo";
})(HotWords = exports.HotWords || (exports.HotWords = {}));
class HotWordToken extends RequestToken_1.default {
    constructor(owner, protocol) {
        super(owner, protocol);
        this.hotWordHeard = new Event_1.Event('Heard hot word');
        this.listenResult = new Event_1.Event('Listen complete');
    }
    handleAck(ack) {
        if (ack.Response.ResponseCode >= 400) {
            this.isComplete = true;
            this._complete.reject(ack.Response);
            return;
        }
    }
    handleEvent(event) {
        const message = event.EventBody;
        switch (message.Event) {
            case command_protocol_1.HotWordEvents.HotWordHeard:
                this.hotWordHeard.emit(message);
                break;
        }
    }
}
exports.HotWordToken = HotWordToken;
class HotWord extends RequestAPI_1.default {
    constructor(requester) {
        super(requester);
    }
    static generateProtocol(listen = false, hotWord = HotWords.HEY_JIBO) {
        return {
            Type: command_protocol_1.CommandTypes.Subscribe,
            StreamType: command_protocol_1.StreamTypes.HotWord,
            StreamFilter: {},
            Listen: listen
        };
    }
    generateToken(protocol, andSend = false) {
        const token = new HotWordToken(this.owner, protocol);
        if (andSend) {
            super.sendToken(token);
        }
        return token;
    }
    sendToken(token) {
        this.owner.sendToken(token);
    }
}
exports.HotWord = HotWord;

},{"../../../../events/Event":5,"../../../../tokens/RequestToken":43,"../../../RequestAPI":6,"@jibo/command-protocol":1}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RequestToken_1 = require("../../../../tokens/RequestToken");
const Event_1 = require("../../../../events/Event");
const RequestAPI_1 = require("../../../RequestAPI");
const command_protocol_1 = require("@jibo/command-protocol");
class ListenToken extends RequestToken_1.default {
    constructor(owner, protocol) {
        super(owner, protocol);
        this.update = new Event_1.Event('Update of listen status');
    }
    handleAck(ack) {
        if (ack.Response.ResponseCode >= 400) {
            this.isComplete = true;
            this._complete.reject(ack.Response);
            return;
        }
    }
    handleEvent(event) {
        const eventData = event.EventBody;
        switch (eventData.Event) {
            case command_protocol_1.AsyncCommandEvent.Stop:
                this.isComplete = true;
                this._complete.reject(eventData);
                break;
            case command_protocol_1.ListenEvents.ListenResult:
                this.isComplete = true;
                this._complete.resolve(eventData);
                this.update.emit(eventData);
                break;
            case command_protocol_1.AsyncCommandEvent.Error:
                this.isComplete = true;
                this._complete.reject(eventData);
                break;
        }
    }
}
exports.ListenToken = ListenToken;
class Listen extends RequestAPI_1.default {
    static generateProtocol(maxSpeechTimeout = 15, maxNoSpeechTimeout = 15, languageCode = 'en-US') {
        return {
            Type: command_protocol_1.CommandTypes.Listen,
            MaxSpeechTimeout: maxSpeechTimeout,
            MaxNoSpeechTimeout: maxNoSpeechTimeout,
            LanguageCode: languageCode
        };
    }
    generateToken(protocol, andSend = false) {
        const token = new ListenToken(this.owner, protocol);
        if (andSend) {
            super.sendToken(token);
        }
        return token;
    }
}
exports.Listen = Listen;

},{"../../../../events/Event":5,"../../../../tokens/RequestToken":43,"../../../RequestAPI":6,"@jibo/command-protocol":1}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Photo_1 = require("./requesters/Photo");
const Video_1 = require("./requesters/Video");
const CommandRequester_1 = require("../../../CommandRequester");
class Media {
    constructor(requester) {
        this.capture = new Capture(requester);
    }
}
exports.Media = Media;
class Capture {
    constructor(requester) {
        this.photoRequest = new Photo_1.Photo(requester);
        this.videoRequest = new Video_1.Video(requester);
    }
    photo(camera = CommandRequester_1.CommandRequester.media.Camera.left, resolution = CommandRequester_1.CommandRequester.media.CameraResolution.low, distortion = true) {
        const cameraType = CommandRequester_1.CommandRequester.media.Camera[camera];
        const protocol = Photo_1.Photo.generateProtocol(cameraType, resolution, distortion);
        return this.photoRequest.generateToken(protocol, true);
    }
    video(videoType = CommandRequester_1.CommandRequester.media.VideoType.normal, duration = 0) {
        const protocol = Video_1.Video.generateProtocol(videoType, duration);
        return this.videoRequest.generateToken(protocol, true);
    }
}
exports.Capture = Capture;

},{"../../../CommandRequester":2,"./requesters/Photo":25,"./requesters/Video":26}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RequestToken_1 = require("../../../../tokens/RequestToken");
const RequestAPI_1 = require("../../../RequestAPI");
const command_protocol_1 = require("@jibo/command-protocol");
class PhotoToken extends RequestToken_1.default {
    constructor(owner, protocol) {
        super(owner, protocol);
    }
    handleAck(ack) {
        if (ack.Response.ResponseCode >= command_protocol_1.ResponseCode.BadRequest) {
            this.isComplete = true;
            this._complete.reject(ack.Response);
            return;
        }
    }
    handleEvent(event) {
        const message = event.EventBody;
        if (message.Event === command_protocol_1.PhotoEvents.TakePhoto) {
            this.isComplete = true;
            this._complete.resolve(message);
        }
    }
}
exports.PhotoToken = PhotoToken;
class Photo extends RequestAPI_1.default {
    static generateProtocol(camera = 'left', resolution = 'lowRes', removeDistortion = true) {
        return {
            Type: command_protocol_1.CommandTypes.TakePhoto,
            Resolution: resolution,
            Camera: camera,
            Distortion: removeDistortion
        };
    }
    generateToken(protocol, andSend = false) {
        const token = new PhotoToken(this.owner, protocol);
        if (andSend) {
            super.sendToken(token);
        }
        return token;
    }
}
exports.Photo = Photo;

},{"../../../../tokens/RequestToken":43,"../../../RequestAPI":6,"@jibo/command-protocol":1}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RequestToken_1 = require("../../../../tokens/RequestToken");
const RequestAPI_1 = require("../../../RequestAPI");
const Event_1 = require("../../../../events/Event");
const command_protocol_1 = require("@jibo/command-protocol");
class VideoToken extends RequestToken_1.default {
    constructor(owner, protocol) {
        super(owner, protocol);
        this.streamReady = new Event_1.Event('Video ready for streaming');
    }
    handleAck(ack) {
        if (ack.Response.ResponseCode >= command_protocol_1.ResponseCode.BadRequest) {
            this.isComplete = true;
            this._complete.reject(ack.Response);
            return;
        }
    }
    handleEvent(event) {
        const eventData = event.EventBody;
        if (eventData.Event === command_protocol_1.VideoEvents.VideoReady) {
            this.streamReady.emit(eventData.URI);
        }
    }
}
exports.VideoToken = VideoToken;
class Video extends RequestAPI_1.default {
    static generateProtocol(type = 'NORMAL', duration = 0) {
        return {
            Type: command_protocol_1.CommandTypes.Video,
            Duration: duration,
            VideoType: type
        };
    }
    generateToken(protocol, andSend = false) {
        const token = new VideoToken(this.owner, protocol);
        if (andSend) {
            super.sendToken(token);
        }
        return token;
    }
}
exports.Video = Video;

},{"../../../../events/Event":5,"../../../../tokens/RequestToken":43,"../../../RequestAPI":6,"@jibo/command-protocol":1}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Motion_1 = require("./requesters/Motion");
const HeadTouch_1 = require("./requesters/HeadTouch");
const FaceTrack_1 = require("./requesters/FaceTrack");
class Perception {
    constructor(requester) {
        this.subscribe = new Subscriptions(requester);
    }
}
exports.Perception = Perception;
class Subscriptions {
    constructor(requester) {
        this.motionRequest = new Motion_1.Motion(requester);
        this.headTouchRequest = new HeadTouch_1.HeadTouch(requester);
        this.faceTrackRequest = new FaceTrack_1.FaceTrack(requester);
    }
    headTouch() {
        const protocol = HeadTouch_1.HeadTouch.generateProtocol();
        return this.headTouchRequest.generateToken(protocol, true);
    }
    motion() {
        const protocol = Motion_1.Motion.generateProtocol();
        return this.motionRequest.generateToken(protocol, true);
    }
    face() {
        const protocol = FaceTrack_1.FaceTrack.generateProtocol();
        return this.faceTrackRequest.generateToken(protocol, true);
    }
}
exports.Subscriptions = Subscriptions;

},{"./requesters/FaceTrack":28,"./requesters/HeadTouch":29,"./requesters/Motion":30}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RequestToken_1 = require("../../../../tokens/RequestToken");
const RequestAPI_1 = require("../../../RequestAPI");
const Event_1 = require("../../../../events/Event");
const command_protocol_1 = require("@jibo/command-protocol");
class FaceTrackToken extends RequestToken_1.default {
    constructor(owner, protocol) {
        super(owner, protocol);
        this.update = new Event_1.Event('Update of tracked entities');
        this.gained = new Event_1.Event('Entity found');
        this.lost = new Event_1.Event('Entity lost');
    }
    handleAck(ack) {
        if (ack.Response.ResponseCode >= 400) {
            this.isComplete = true;
            this._complete.reject(ack.Response);
            return;
        }
    }
    handleEvent(event) {
        const message = event.EventBody;
        switch (message.Event) {
            case command_protocol_1.EntityTrackEvents.TrackGained:
                this.gained.emit(message.Tracks);
                break;
            case command_protocol_1.EntityTrackEvents.TrackUpdate:
                this.update.emit(message.Tracks);
                break;
            case command_protocol_1.EntityTrackEvents.TrackLost:
                this.lost.emit(message.Tracks);
                break;
        }
    }
}
exports.FaceTrackToken = FaceTrackToken;
class FaceTrack extends RequestAPI_1.default {
    static generateProtocol() {
        return {
            Type: command_protocol_1.CommandTypes.Subscribe,
            StreamType: command_protocol_1.StreamTypes.Entity,
            StreamFilter: {}
        };
    }
    generateToken(protocol, andSend = false) {
        const token = new FaceTrackToken(this.owner, protocol);
        if (andSend) {
            super.sendToken(token);
        }
        return token;
    }
}
exports.FaceTrack = FaceTrack;

},{"../../../../events/Event":5,"../../../../tokens/RequestToken":43,"../../../RequestAPI":6,"@jibo/command-protocol":1}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RequestToken_1 = require("../../../../tokens/RequestToken");
const RequestAPI_1 = require("../../../RequestAPI");
const Event_1 = require("../../../../events/Event");
const command_protocol_1 = require("@jibo/command-protocol");
class HeadTouchToken extends RequestToken_1.default {
    constructor(owner, protocol) {
        super(owner, protocol);
        this.update = new Event_1.Event('Update of head touch status');
    }
    handleAck(ack) {
        if (ack.Response.ResponseCode >= 400) {
            this.isComplete = true;
            this._complete.reject(ack.Response);
            return;
        }
    }
    handleEvent(event) {
        const message = event.EventBody;
        switch (message.Event) {
            case command_protocol_1.AsyncCommandEvent.Stop:
                this.isComplete = true;
                this._complete.resolve();
                break;
            case command_protocol_1.AsyncCommandEvent.Error:
                this.isComplete = true;
                this._complete.reject();
                break;
            case command_protocol_1.HeadTouchEvents.HeadTouched:
                this.update.emit(message.Pads);
                break;
        }
    }
}
exports.HeadTouchToken = HeadTouchToken;
class HeadTouch extends RequestAPI_1.default {
    static generateProtocol() {
        return {
            Type: command_protocol_1.CommandTypes.Subscribe,
            StreamType: command_protocol_1.StreamTypes.HeadTouch,
            StreamFilter: {},
        };
    }
    generateToken(protocol, andSend = false) {
        const token = new HeadTouchToken(this.owner, protocol);
        if (andSend) {
            super.sendToken(token);
        }
        return token;
    }
}
exports.HeadTouch = HeadTouch;

},{"../../../../events/Event":5,"../../../../tokens/RequestToken":43,"../../../RequestAPI":6,"@jibo/command-protocol":1}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RequestAPI_1 = require("../../../RequestAPI");
const RequestToken_1 = require("../../../../tokens/RequestToken");
const Event_1 = require("../../../../events/Event");
const command_protocol_1 = require("@jibo/command-protocol");
class MotionToken extends RequestToken_1.default {
    constructor(owner, protocol) {
        super(owner, protocol);
        this.update = new Event_1.Event('Update of motion entities');
    }
    handleAck(ack) {
        if (ack.Response.ResponseCode >= 400) {
            this.isComplete = true;
            this._complete.reject(ack.Response);
            return;
        }
    }
    handleEvent(event) {
        const message = event.EventBody;
        switch (message.Event) {
            case command_protocol_1.MotionEvents.MotionDetected:
                this.update.emit(message.Motions);
                break;
        }
    }
}
exports.MotionToken = MotionToken;
class Motion extends RequestAPI_1.default {
    static generateProtocol() {
        return {
            Type: command_protocol_1.CommandTypes.Subscribe,
            StreamType: command_protocol_1.StreamTypes.Motion,
            StreamFilter: {}
        };
    }
    generateToken(protocol, andSend = false) {
        const token = new MotionToken(this.owner, protocol);
        if (andSend) {
            super.sendToken(token);
        }
        return token;
    }
}
exports.Motion = Motion;

},{"../../../../events/Event":5,"../../../../tokens/RequestToken":43,"../../../RequestAPI":6,"@jibo/command-protocol":1}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UUID_1 = require("../../UUID");
class Display {
    static generateProtocol(name, view, layer, visible, keepDisplay, onCancel, overlay) {
        return {
            id: UUID_1.generateTransactionID(),
            type: "DISPLAY",
            name,
            view,
            layer,
            overlay,
            visible,
            keepDisplay,
            onCancel
        };
    }
}
exports.Display = Display;

},{"../../UUID":3}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UUID_1 = require("../../UUID");
class Listen {
    static generateProtocol(rules, intents) {
        const contexts = Array.isArray(rules) ? rules : [rules];
        return {
            id: UUID_1.generateTransactionID(),
            type: "LISTEN",
            contexts,
            intents
        };
    }
}
exports.Listen = Listen;

},{"../../UUID":3}],33:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UUID_1 = require("../../UUID");
class Play {
    static generateProtocol(esml, config, options) {
        return {
            id: UUID_1.generateTransactionID(),
            type: "PLAY",
            autoRuleConfig: config,
            speakOptions: options,
            esml
        };
    }
}
exports.Play = Play;

},{"../../UUID":3}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UUID_1 = require("../../UUID");
class SLIM {
    static generateProtocol(config, options) {
        return {
            id: UUID_1.generateTransactionID(),
            type: "SLIM",
            config,
            options
        };
    }
}
exports.SLIM = SLIM;

},{"../../UUID":3}],35:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UUID_1 = require("../../../UUID");
class ImpactEmotion {
    static generateProtocol(valence, confidence) {
        return {
            id: UUID_1.generateTransactionID(),
            type: "IMPACT_EMOTION",
            valence,
            confidence
        };
    }
}
exports.ImpactEmotion = ImpactEmotion;

},{"../../../UUID":3}],36:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./ImpactEmotion"));

},{"./ImpactEmotion":35}],37:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structural = require("./structural");
exports.structural = structural;
const emotion = require("./emotion");
exports.emotion = emotion;
const perception = require("./perception");
exports.perception = perception;
const play = require("./Play");
exports.play = play;
const listen = require("./Listen");
exports.listen = listen;
const display = require("./Display");
exports.display = display;
const slim = require("./SLIM");
exports.slim = slim;

},{"./Display":31,"./Listen":32,"./Play":33,"./SLIM":34,"./emotion":36,"./perception":39,"./structural":42}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UUID_1 = require("../../../UUID");
class SetPresentPerson {
    static generateProtocol(looperId, source, confidence) {
        return {
            id: UUID_1.generateTransactionID(),
            type: "SET_PRESENT_PERSON",
            looperId,
            source,
            confidence
        };
    }
}
exports.SetPresentPerson = SetPresentPerson;

},{"../../../UUID":3}],39:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./SetPresentPerson"));

},{"./SetPresentPerson":38}],40:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UUID_1 = require("../../../UUID");
class Parallel {
    static generateProtocol(behaviors, succeedOnFirst = false) {
        return {
            id: UUID_1.generateTransactionID(),
            type: "PARALLEL",
            children: behaviors,
            succeedOnFirst
        };
    }
}
exports.Parallel = Parallel;

},{"../../../UUID":3}],41:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UUID_1 = require("../../../UUID");
class Sequence {
    static generateProtocol(behaviors) {
        return {
            id: UUID_1.generateTransactionID(),
            type: "SEQUENCE",
            children: behaviors
        };
    }
}
exports.Sequence = Sequence;

},{"../../../UUID":3}],42:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./Parallel"));
__export(require("./Sequence"));

},{"./Parallel":40,"./Sequence":41}],43:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExternalPromise_1 = require("../utils/ExternalPromise");
class RequestToken {
    constructor(owner, protocol) {
        this.owner = owner;
        this.protocol = protocol;
        this.isComplete = false;
        this._complete = new ExternalPromise_1.default();
    }
    get complete() {
        return this._complete.promise;
    }
    cancel() {
        if (this.isComplete) {
            return;
        }
        this.isComplete = true;
        this._complete.reject();
        const cancel = {
            Type: "Cancel",
            ID: this.requestId
        };
        this.owner.sendRequest(cancel);
    }
}
exports.default = RequestToken;

},{"../utils/ExternalPromise":44}],44:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExternalPromise {
    constructor() {
        this.promise = new Promise((res, rej) => {
            this.resolve = res;
            this.reject = rej;
        });
    }
}
exports.default = ExternalPromise;

},{}],45:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var CommandRequester_1 = require("./CommandRequester");
exports.CommandRequester = CommandRequester_1.CommandRequester;
__export(require("./requests"));
const enums = require("@jibo/command-protocol");
exports.enums = enums;
var Event_1 = require("./events/Event");
exports.Event = Event_1.Event;

},{"./CommandRequester":2,"./events/Event":5,"./requests":7,"@jibo/command-protocol":1}]},{},[45])(45)
});

//# sourceMappingURL=command-requester.js.map
