/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { Achievement } from '../gitgood/achievement';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Goal } from '../gitgood/goal';
import { Stat } from '../gitgood/stat';
import { Team } from '../gitgood/team';
export const protobufPackage = 'octalmage.gitgood.gitgood';
const baseQueryGetAchievementRequest = { id: 0 };
export const QueryGetAchievementRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetAchievementRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetAchievementRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetAchievementRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetAchievementResponse = {};
export const QueryGetAchievementResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Achievement !== undefined) {
            Achievement.encode(message.Achievement, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetAchievementResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Achievement = Achievement.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetAchievementResponse };
        if (object.Achievement !== undefined && object.Achievement !== null) {
            message.Achievement = Achievement.fromJSON(object.Achievement);
        }
        else {
            message.Achievement = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Achievement !== undefined && (obj.Achievement = message.Achievement ? Achievement.toJSON(message.Achievement) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetAchievementResponse };
        if (object.Achievement !== undefined && object.Achievement !== null) {
            message.Achievement = Achievement.fromPartial(object.Achievement);
        }
        else {
            message.Achievement = undefined;
        }
        return message;
    }
};
const baseQueryAllAchievementRequest = {};
export const QueryAllAchievementRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllAchievementRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllAchievementRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllAchievementRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllAchievementResponse = {};
export const QueryAllAchievementResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Achievement) {
            Achievement.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllAchievementResponse };
        message.Achievement = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Achievement.push(Achievement.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllAchievementResponse };
        message.Achievement = [];
        if (object.Achievement !== undefined && object.Achievement !== null) {
            for (const e of object.Achievement) {
                message.Achievement.push(Achievement.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Achievement) {
            obj.Achievement = message.Achievement.map((e) => (e ? Achievement.toJSON(e) : undefined));
        }
        else {
            obj.Achievement = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllAchievementResponse };
        message.Achievement = [];
        if (object.Achievement !== undefined && object.Achievement !== null) {
            for (const e of object.Achievement) {
                message.Achievement.push(Achievement.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetGoalRequest = { id: 0 };
export const QueryGetGoalRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetGoalRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetGoalRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetGoalRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetGoalResponse = {};
export const QueryGetGoalResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Goal !== undefined) {
            Goal.encode(message.Goal, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetGoalResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Goal = Goal.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetGoalResponse };
        if (object.Goal !== undefined && object.Goal !== null) {
            message.Goal = Goal.fromJSON(object.Goal);
        }
        else {
            message.Goal = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Goal !== undefined && (obj.Goal = message.Goal ? Goal.toJSON(message.Goal) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetGoalResponse };
        if (object.Goal !== undefined && object.Goal !== null) {
            message.Goal = Goal.fromPartial(object.Goal);
        }
        else {
            message.Goal = undefined;
        }
        return message;
    }
};
const baseQueryAllGoalRequest = {};
export const QueryAllGoalRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllGoalRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllGoalRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllGoalRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllGoalResponse = {};
export const QueryAllGoalResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Goal) {
            Goal.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllGoalResponse };
        message.Goal = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Goal.push(Goal.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllGoalResponse };
        message.Goal = [];
        if (object.Goal !== undefined && object.Goal !== null) {
            for (const e of object.Goal) {
                message.Goal.push(Goal.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Goal) {
            obj.Goal = message.Goal.map((e) => (e ? Goal.toJSON(e) : undefined));
        }
        else {
            obj.Goal = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllGoalResponse };
        message.Goal = [];
        if (object.Goal !== undefined && object.Goal !== null) {
            for (const e of object.Goal) {
                message.Goal.push(Goal.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetStatRequest = { id: 0 };
export const QueryGetStatRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetStatRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetStatRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetStatRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetStatResponse = {};
export const QueryGetStatResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Stat !== undefined) {
            Stat.encode(message.Stat, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetStatResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Stat = Stat.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetStatResponse };
        if (object.Stat !== undefined && object.Stat !== null) {
            message.Stat = Stat.fromJSON(object.Stat);
        }
        else {
            message.Stat = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Stat !== undefined && (obj.Stat = message.Stat ? Stat.toJSON(message.Stat) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetStatResponse };
        if (object.Stat !== undefined && object.Stat !== null) {
            message.Stat = Stat.fromPartial(object.Stat);
        }
        else {
            message.Stat = undefined;
        }
        return message;
    }
};
const baseQueryAllStatRequest = {};
export const QueryAllStatRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllStatRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllStatRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllStatRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllStatResponse = {};
export const QueryAllStatResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Stat) {
            Stat.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllStatResponse };
        message.Stat = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Stat.push(Stat.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllStatResponse };
        message.Stat = [];
        if (object.Stat !== undefined && object.Stat !== null) {
            for (const e of object.Stat) {
                message.Stat.push(Stat.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Stat) {
            obj.Stat = message.Stat.map((e) => (e ? Stat.toJSON(e) : undefined));
        }
        else {
            obj.Stat = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllStatResponse };
        message.Stat = [];
        if (object.Stat !== undefined && object.Stat !== null) {
            for (const e of object.Stat) {
                message.Stat.push(Stat.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetTeamRequest = { id: 0 };
export const QueryGetTeamRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetTeamRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetTeamRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetTeamRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetTeamResponse = {};
export const QueryGetTeamResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Team !== undefined) {
            Team.encode(message.Team, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetTeamResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Team = Team.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetTeamResponse };
        if (object.Team !== undefined && object.Team !== null) {
            message.Team = Team.fromJSON(object.Team);
        }
        else {
            message.Team = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Team !== undefined && (obj.Team = message.Team ? Team.toJSON(message.Team) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetTeamResponse };
        if (object.Team !== undefined && object.Team !== null) {
            message.Team = Team.fromPartial(object.Team);
        }
        else {
            message.Team = undefined;
        }
        return message;
    }
};
const baseQueryAllTeamRequest = {};
export const QueryAllTeamRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllTeamRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllTeamRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllTeamRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllTeamResponse = {};
export const QueryAllTeamResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Team) {
            Team.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllTeamResponse };
        message.Team = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Team.push(Team.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllTeamResponse };
        message.Team = [];
        if (object.Team !== undefined && object.Team !== null) {
            for (const e of object.Team) {
                message.Team.push(Team.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Team) {
            obj.Team = message.Team.map((e) => (e ? Team.toJSON(e) : undefined));
        }
        else {
            obj.Team = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllTeamResponse };
        message.Team = [];
        if (object.Team !== undefined && object.Team !== null) {
            for (const e of object.Team) {
                message.Team.push(Team.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Achievement(request) {
        const data = QueryGetAchievementRequest.encode(request).finish();
        const promise = this.rpc.request('octalmage.gitgood.gitgood.Query', 'Achievement', data);
        return promise.then((data) => QueryGetAchievementResponse.decode(new Reader(data)));
    }
    AchievementAll(request) {
        const data = QueryAllAchievementRequest.encode(request).finish();
        const promise = this.rpc.request('octalmage.gitgood.gitgood.Query', 'AchievementAll', data);
        return promise.then((data) => QueryAllAchievementResponse.decode(new Reader(data)));
    }
    Goal(request) {
        const data = QueryGetGoalRequest.encode(request).finish();
        const promise = this.rpc.request('octalmage.gitgood.gitgood.Query', 'Goal', data);
        return promise.then((data) => QueryGetGoalResponse.decode(new Reader(data)));
    }
    GoalAll(request) {
        const data = QueryAllGoalRequest.encode(request).finish();
        const promise = this.rpc.request('octalmage.gitgood.gitgood.Query', 'GoalAll', data);
        return promise.then((data) => QueryAllGoalResponse.decode(new Reader(data)));
    }
    Stat(request) {
        const data = QueryGetStatRequest.encode(request).finish();
        const promise = this.rpc.request('octalmage.gitgood.gitgood.Query', 'Stat', data);
        return promise.then((data) => QueryGetStatResponse.decode(new Reader(data)));
    }
    StatAll(request) {
        const data = QueryAllStatRequest.encode(request).finish();
        const promise = this.rpc.request('octalmage.gitgood.gitgood.Query', 'StatAll', data);
        return promise.then((data) => QueryAllStatResponse.decode(new Reader(data)));
    }
    Team(request) {
        const data = QueryGetTeamRequest.encode(request).finish();
        const promise = this.rpc.request('octalmage.gitgood.gitgood.Query', 'Team', data);
        return promise.then((data) => QueryGetTeamResponse.decode(new Reader(data)));
    }
    TeamAll(request) {
        const data = QueryAllTeamRequest.encode(request).finish();
        const promise = this.rpc.request('octalmage.gitgood.gitgood.Query', 'TeamAll', data);
        return promise.then((data) => QueryAllTeamResponse.decode(new Reader(data)));
    }
}
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
