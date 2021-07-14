/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'octalmage.gitgood.gitgood';
const baseStat = { creator: '', id: 0, statType: 0, initial: 0, final: 0, owner: '', createdAt: 0 };
export const Stat = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.statType !== 0) {
            writer.uint32(24).int32(message.statType);
        }
        if (message.initial !== 0) {
            writer.uint32(32).int32(message.initial);
        }
        if (message.final !== 0) {
            writer.uint32(40).int32(message.final);
        }
        if (message.owner !== '') {
            writer.uint32(50).string(message.owner);
        }
        if (message.createdAt !== 0) {
            writer.uint32(56).int64(message.createdAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStat };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.statType = reader.int32();
                    break;
                case 4:
                    message.initial = reader.int32();
                    break;
                case 5:
                    message.final = reader.int32();
                    break;
                case 6:
                    message.owner = reader.string();
                    break;
                case 7:
                    message.createdAt = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseStat };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.statType !== undefined && object.statType !== null) {
            message.statType = Number(object.statType);
        }
        else {
            message.statType = 0;
        }
        if (object.initial !== undefined && object.initial !== null) {
            message.initial = Number(object.initial);
        }
        else {
            message.initial = 0;
        }
        if (object.final !== undefined && object.final !== null) {
            message.final = Number(object.final);
        }
        else {
            message.final = 0;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = Number(object.createdAt);
        }
        else {
            message.createdAt = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.statType !== undefined && (obj.statType = message.statType);
        message.initial !== undefined && (obj.initial = message.initial);
        message.final !== undefined && (obj.final = message.final);
        message.owner !== undefined && (obj.owner = message.owner);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseStat };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.statType !== undefined && object.statType !== null) {
            message.statType = object.statType;
        }
        else {
            message.statType = 0;
        }
        if (object.initial !== undefined && object.initial !== null) {
            message.initial = object.initial;
        }
        else {
            message.initial = 0;
        }
        if (object.final !== undefined && object.final !== null) {
            message.final = object.final;
        }
        else {
            message.final = 0;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        }
        else {
            message.createdAt = 0;
        }
        return message;
    }
};
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
