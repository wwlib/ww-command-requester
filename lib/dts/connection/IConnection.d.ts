/// <reference types="../typings" />
import { Event } from '../events/Event';
export interface ConnectionEvent {
    robot: string;
}
export interface DisconnectEvent extends ConnectionEvent {
    code: number;
    reason: string;
}
export interface MessageEvent {
    robot: string;
    data: JIBO.v1.AllResponses;
}
export default interface IConnection {
    connected: Event<ConnectionEvent>;
    disconnected: Event<DisconnectEvent>;
    message: Event<MessageEvent>;
    close(): void;
    isConnected(robot: string): boolean;
    sendTo(name: string, command: JIBO.v1.Command): void;
}
