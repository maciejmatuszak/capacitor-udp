import {WebPlugin} from '@capacitor/core';

export class UdpPluginWeb extends WebPlugin implements IUdpPlugin {
    constructor() {
        super({
            name: 'UdpPlugin',
            platforms: ['web']
        });
    }

    closeAllSockets(): Promise<{}> {
        return Promise.reject("Unimplemented");
    }

    // @ts-ignore
    create(options?: { properties?: { name?: string; bufferSize?: number } }): Promise<{ socketId: number; ipv4: string; ipv6: string }> {
        return new Promise<{ socketId: number; ipv4: string; ipv6: string }>((_resolve, reject) => {
          reject("unimplemented")
        });
    }

    // @ts-ignore
    bind(options: { socketId: number; address: string; port: number }): Promise<{}> {
        return undefined;
    }

    // @ts-ignore
    close(options: { socketId: number }): Promise<{}> {
        return undefined;
    }

    // @ts-ignore
    getInfo(options: { socketId: number }): Promise<{ socketId: number; bufferSize: number; name: string | null; paused: boolean; localAddress?: string; localPort?: number }> {
        return undefined;
    }

    getJoinedGroups(): Promise<{ groups: [string] }> {
        return undefined;
    }


    getSockets(): Promise<{ sockets: [{ socketId: number; bufferSize: number; name: string | null; paused: boolean; localAddress?: string; localPort?: number }] }> {
        return undefined;
    }

    // @ts-ignore
    joinGroup(options: { socketId: number; address: string }): Promise<{}> {
        return undefined;
    }

    // @ts-ignore
    leaveGroup(options: { socketId: number; address: string }): Promise<{}> {
        return undefined;
    }

    // @ts-ignore
    send(options: { socketId: number; address: string; port: number; buffer: string }): Promise<{}> {
        return undefined;
    }

    // @ts-ignore
    setBroadcast(options: { socketId: number; enabled: boolean }): Promise<{}> {
        return undefined;
    }

    // @ts-ignore
    setMulticastLoopbackMode(options: { socketId: number; enabled: boolean }): Promise<{}> {
        return undefined;
    }

    // @ts-ignore
    setMulticastTimeToLive(options: { socketId: number; ttl: number }): Promise<{}> {
        return undefined;
    }

    // @ts-ignore
    setPaused(options: { socketId: number; paused: boolean }): Promise<{}> {
        return undefined;
    }

    // @ts-ignore
    update(options: { socketId: number; properties: { name?: string; bufferSize?: number } }): Promise<{}> {
        return undefined;
    }


}

const UdpPlugin = new UdpPluginWeb();

export {UdpPlugin};
import {registerWebPlugin} from '@capacitor/core';
import {IUdpPlugin} from "./definitions";

registerWebPlugin(UdpPlugin);
