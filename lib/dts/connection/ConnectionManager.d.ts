/// <reference types="../typings" />
import { Event } from '../events/Event';
import { ConnectionEvent, DisconnectEvent, MessageEvent } from './IConnection';
export interface HandshakeMessage {
    type: 'handshake';
    status: 'OK';
    name: string;
}
export interface ConnectionSettings {
    hostname: string;
    port?: number;
    key?: string;
    cert?: string;
    fingerprint?: string;
}
export default class ConnectionManager {
    connected: Event<ConnectionEvent>;
    disconnected: Event<DisconnectEvent>;
    message: Event<MessageEvent>;
    private namedConnections;
    constructor();
    connect(robotName: string, options: any): Promise<ConnectionEvent>;
    close(): void;
    isConnected(name: string): boolean;
    sendTo(name: string, command: JIBO.v1.Command): void;
    private startWebSocket(settings, onError?);
    private onConnection(hostname, ws);
    private onClose(robot, code, reason);
}
