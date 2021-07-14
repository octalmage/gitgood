/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'octalmage.gitgood.gitgood';
const baseGoal = { creator: '', id: 0, label: '', comparison: 0, exp: 0, createdAt: 0 };
export const Goal = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.label !== '') {
            writer.uint32(26).string(message.label);
        }
        if (message.comparison !== 0) {
            writer.uint32(32).int32(message.comparison);
        }
        if (message.exp !== 0) {
            writer.uint32(40).int32(message.exp);
        }
        if (message.createdAt !== 0) {
            writer.uint32(48).int32(message.createdAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGoal };
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
                    message.label = reader.string();
                    break;
                case 4:
                    message.comparison = reader.int32();
                    break;
                case 5:
                    message.exp = reader.int32();
                    break;
                case 6:
                    message.createdAt = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGoal };
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
        if (object.label !== undefined && object.label !== null) {
            message.label = String(object.label);
        }
        else {
            message.label = '';
        }
        if (object.comparison !== undefined && object.comparison !== null) {
            message.comparison = Number(object.comparison);
        }
        else {
            message.comparison = 0;
        }
        if (object.exp !== undefined && object.exp !== null) {
            message.exp = Number(object.exp);
        }
        else {
            message.exp = 0;
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
        message.label !== undefined && (obj.label = message.label);
        message.comparison !== undefined && (obj.comparison = message.comparison);
        message.exp !== undefined && (obj.exp = message.exp);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGoal };
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
        if (object.label !== undefined && object.label !== null) {
            message.label = object.label;
        }
        else {
            message.label = '';
        }
        if (object.comparison !== undefined && object.comparison !== null) {
            message.comparison = object.comparison;
        }
        else {
            message.comparison = 0;
        }
        if (object.exp !== undefined && object.exp !== null) {
            message.exp = object.exp;
        }
        else {
            message.exp = 0;
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
