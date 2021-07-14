/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { Achievement } from '../gitgood/achievement'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { Goal } from '../gitgood/goal'
import { Stat } from '../gitgood/stat'
import { Team } from '../gitgood/team'

export const protobufPackage = 'octalmage.gitgood.gitgood'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetAchievementRequest {
  id: number
}

export interface QueryGetAchievementResponse {
  Achievement: Achievement | undefined
}

export interface QueryAllAchievementRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllAchievementResponse {
  Achievement: Achievement[]
  pagination: PageResponse | undefined
}

export interface QueryGetGoalRequest {
  id: number
}

export interface QueryGetGoalResponse {
  Goal: Goal | undefined
}

export interface QueryAllGoalRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllGoalResponse {
  Goal: Goal[]
  pagination: PageResponse | undefined
}

export interface QueryGetStatRequest {
  id: number
}

export interface QueryGetStatResponse {
  Stat: Stat | undefined
}

export interface QueryAllStatRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllStatResponse {
  Stat: Stat[]
  pagination: PageResponse | undefined
}

export interface QueryGetTeamRequest {
  id: number
}

export interface QueryGetTeamResponse {
  Team: Team | undefined
}

export interface QueryAllTeamRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllTeamResponse {
  Team: Team[]
  pagination: PageResponse | undefined
}

const baseQueryGetAchievementRequest: object = { id: 0 }

export const QueryGetAchievementRequest = {
  encode(message: QueryGetAchievementRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAchievementRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetAchievementRequest } as QueryGetAchievementRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetAchievementRequest {
    const message = { ...baseQueryGetAchievementRequest } as QueryGetAchievementRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetAchievementRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetAchievementRequest>): QueryGetAchievementRequest {
    const message = { ...baseQueryGetAchievementRequest } as QueryGetAchievementRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetAchievementResponse: object = {}

export const QueryGetAchievementResponse = {
  encode(message: QueryGetAchievementResponse, writer: Writer = Writer.create()): Writer {
    if (message.Achievement !== undefined) {
      Achievement.encode(message.Achievement, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAchievementResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetAchievementResponse } as QueryGetAchievementResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Achievement = Achievement.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetAchievementResponse {
    const message = { ...baseQueryGetAchievementResponse } as QueryGetAchievementResponse
    if (object.Achievement !== undefined && object.Achievement !== null) {
      message.Achievement = Achievement.fromJSON(object.Achievement)
    } else {
      message.Achievement = undefined
    }
    return message
  },

  toJSON(message: QueryGetAchievementResponse): unknown {
    const obj: any = {}
    message.Achievement !== undefined && (obj.Achievement = message.Achievement ? Achievement.toJSON(message.Achievement) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetAchievementResponse>): QueryGetAchievementResponse {
    const message = { ...baseQueryGetAchievementResponse } as QueryGetAchievementResponse
    if (object.Achievement !== undefined && object.Achievement !== null) {
      message.Achievement = Achievement.fromPartial(object.Achievement)
    } else {
      message.Achievement = undefined
    }
    return message
  }
}

const baseQueryAllAchievementRequest: object = {}

export const QueryAllAchievementRequest = {
  encode(message: QueryAllAchievementRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllAchievementRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllAchievementRequest } as QueryAllAchievementRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllAchievementRequest {
    const message = { ...baseQueryAllAchievementRequest } as QueryAllAchievementRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllAchievementRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllAchievementRequest>): QueryAllAchievementRequest {
    const message = { ...baseQueryAllAchievementRequest } as QueryAllAchievementRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllAchievementResponse: object = {}

export const QueryAllAchievementResponse = {
  encode(message: QueryAllAchievementResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Achievement) {
      Achievement.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllAchievementResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllAchievementResponse } as QueryAllAchievementResponse
    message.Achievement = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Achievement.push(Achievement.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllAchievementResponse {
    const message = { ...baseQueryAllAchievementResponse } as QueryAllAchievementResponse
    message.Achievement = []
    if (object.Achievement !== undefined && object.Achievement !== null) {
      for (const e of object.Achievement) {
        message.Achievement.push(Achievement.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllAchievementResponse): unknown {
    const obj: any = {}
    if (message.Achievement) {
      obj.Achievement = message.Achievement.map((e) => (e ? Achievement.toJSON(e) : undefined))
    } else {
      obj.Achievement = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllAchievementResponse>): QueryAllAchievementResponse {
    const message = { ...baseQueryAllAchievementResponse } as QueryAllAchievementResponse
    message.Achievement = []
    if (object.Achievement !== undefined && object.Achievement !== null) {
      for (const e of object.Achievement) {
        message.Achievement.push(Achievement.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetGoalRequest: object = { id: 0 }

export const QueryGetGoalRequest = {
  encode(message: QueryGetGoalRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetGoalRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetGoalRequest } as QueryGetGoalRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetGoalRequest {
    const message = { ...baseQueryGetGoalRequest } as QueryGetGoalRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetGoalRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetGoalRequest>): QueryGetGoalRequest {
    const message = { ...baseQueryGetGoalRequest } as QueryGetGoalRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetGoalResponse: object = {}

export const QueryGetGoalResponse = {
  encode(message: QueryGetGoalResponse, writer: Writer = Writer.create()): Writer {
    if (message.Goal !== undefined) {
      Goal.encode(message.Goal, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetGoalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetGoalResponse } as QueryGetGoalResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Goal = Goal.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetGoalResponse {
    const message = { ...baseQueryGetGoalResponse } as QueryGetGoalResponse
    if (object.Goal !== undefined && object.Goal !== null) {
      message.Goal = Goal.fromJSON(object.Goal)
    } else {
      message.Goal = undefined
    }
    return message
  },

  toJSON(message: QueryGetGoalResponse): unknown {
    const obj: any = {}
    message.Goal !== undefined && (obj.Goal = message.Goal ? Goal.toJSON(message.Goal) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetGoalResponse>): QueryGetGoalResponse {
    const message = { ...baseQueryGetGoalResponse } as QueryGetGoalResponse
    if (object.Goal !== undefined && object.Goal !== null) {
      message.Goal = Goal.fromPartial(object.Goal)
    } else {
      message.Goal = undefined
    }
    return message
  }
}

const baseQueryAllGoalRequest: object = {}

export const QueryAllGoalRequest = {
  encode(message: QueryAllGoalRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllGoalRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllGoalRequest } as QueryAllGoalRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllGoalRequest {
    const message = { ...baseQueryAllGoalRequest } as QueryAllGoalRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllGoalRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllGoalRequest>): QueryAllGoalRequest {
    const message = { ...baseQueryAllGoalRequest } as QueryAllGoalRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllGoalResponse: object = {}

export const QueryAllGoalResponse = {
  encode(message: QueryAllGoalResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Goal) {
      Goal.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllGoalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllGoalResponse } as QueryAllGoalResponse
    message.Goal = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Goal.push(Goal.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllGoalResponse {
    const message = { ...baseQueryAllGoalResponse } as QueryAllGoalResponse
    message.Goal = []
    if (object.Goal !== undefined && object.Goal !== null) {
      for (const e of object.Goal) {
        message.Goal.push(Goal.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllGoalResponse): unknown {
    const obj: any = {}
    if (message.Goal) {
      obj.Goal = message.Goal.map((e) => (e ? Goal.toJSON(e) : undefined))
    } else {
      obj.Goal = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllGoalResponse>): QueryAllGoalResponse {
    const message = { ...baseQueryAllGoalResponse } as QueryAllGoalResponse
    message.Goal = []
    if (object.Goal !== undefined && object.Goal !== null) {
      for (const e of object.Goal) {
        message.Goal.push(Goal.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetStatRequest: object = { id: 0 }

export const QueryGetStatRequest = {
  encode(message: QueryGetStatRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetStatRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetStatRequest } as QueryGetStatRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetStatRequest {
    const message = { ...baseQueryGetStatRequest } as QueryGetStatRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetStatRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetStatRequest>): QueryGetStatRequest {
    const message = { ...baseQueryGetStatRequest } as QueryGetStatRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetStatResponse: object = {}

export const QueryGetStatResponse = {
  encode(message: QueryGetStatResponse, writer: Writer = Writer.create()): Writer {
    if (message.Stat !== undefined) {
      Stat.encode(message.Stat, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetStatResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetStatResponse } as QueryGetStatResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Stat = Stat.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetStatResponse {
    const message = { ...baseQueryGetStatResponse } as QueryGetStatResponse
    if (object.Stat !== undefined && object.Stat !== null) {
      message.Stat = Stat.fromJSON(object.Stat)
    } else {
      message.Stat = undefined
    }
    return message
  },

  toJSON(message: QueryGetStatResponse): unknown {
    const obj: any = {}
    message.Stat !== undefined && (obj.Stat = message.Stat ? Stat.toJSON(message.Stat) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetStatResponse>): QueryGetStatResponse {
    const message = { ...baseQueryGetStatResponse } as QueryGetStatResponse
    if (object.Stat !== undefined && object.Stat !== null) {
      message.Stat = Stat.fromPartial(object.Stat)
    } else {
      message.Stat = undefined
    }
    return message
  }
}

const baseQueryAllStatRequest: object = {}

export const QueryAllStatRequest = {
  encode(message: QueryAllStatRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllStatRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllStatRequest } as QueryAllStatRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllStatRequest {
    const message = { ...baseQueryAllStatRequest } as QueryAllStatRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllStatRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllStatRequest>): QueryAllStatRequest {
    const message = { ...baseQueryAllStatRequest } as QueryAllStatRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllStatResponse: object = {}

export const QueryAllStatResponse = {
  encode(message: QueryAllStatResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Stat) {
      Stat.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllStatResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllStatResponse } as QueryAllStatResponse
    message.Stat = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Stat.push(Stat.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllStatResponse {
    const message = { ...baseQueryAllStatResponse } as QueryAllStatResponse
    message.Stat = []
    if (object.Stat !== undefined && object.Stat !== null) {
      for (const e of object.Stat) {
        message.Stat.push(Stat.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllStatResponse): unknown {
    const obj: any = {}
    if (message.Stat) {
      obj.Stat = message.Stat.map((e) => (e ? Stat.toJSON(e) : undefined))
    } else {
      obj.Stat = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllStatResponse>): QueryAllStatResponse {
    const message = { ...baseQueryAllStatResponse } as QueryAllStatResponse
    message.Stat = []
    if (object.Stat !== undefined && object.Stat !== null) {
      for (const e of object.Stat) {
        message.Stat.push(Stat.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetTeamRequest: object = { id: 0 }

export const QueryGetTeamRequest = {
  encode(message: QueryGetTeamRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetTeamRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetTeamRequest } as QueryGetTeamRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetTeamRequest {
    const message = { ...baseQueryGetTeamRequest } as QueryGetTeamRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetTeamRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetTeamRequest>): QueryGetTeamRequest {
    const message = { ...baseQueryGetTeamRequest } as QueryGetTeamRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetTeamResponse: object = {}

export const QueryGetTeamResponse = {
  encode(message: QueryGetTeamResponse, writer: Writer = Writer.create()): Writer {
    if (message.Team !== undefined) {
      Team.encode(message.Team, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetTeamResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetTeamResponse } as QueryGetTeamResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Team = Team.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetTeamResponse {
    const message = { ...baseQueryGetTeamResponse } as QueryGetTeamResponse
    if (object.Team !== undefined && object.Team !== null) {
      message.Team = Team.fromJSON(object.Team)
    } else {
      message.Team = undefined
    }
    return message
  },

  toJSON(message: QueryGetTeamResponse): unknown {
    const obj: any = {}
    message.Team !== undefined && (obj.Team = message.Team ? Team.toJSON(message.Team) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetTeamResponse>): QueryGetTeamResponse {
    const message = { ...baseQueryGetTeamResponse } as QueryGetTeamResponse
    if (object.Team !== undefined && object.Team !== null) {
      message.Team = Team.fromPartial(object.Team)
    } else {
      message.Team = undefined
    }
    return message
  }
}

const baseQueryAllTeamRequest: object = {}

export const QueryAllTeamRequest = {
  encode(message: QueryAllTeamRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllTeamRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllTeamRequest } as QueryAllTeamRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllTeamRequest {
    const message = { ...baseQueryAllTeamRequest } as QueryAllTeamRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllTeamRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllTeamRequest>): QueryAllTeamRequest {
    const message = { ...baseQueryAllTeamRequest } as QueryAllTeamRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllTeamResponse: object = {}

export const QueryAllTeamResponse = {
  encode(message: QueryAllTeamResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Team) {
      Team.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllTeamResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllTeamResponse } as QueryAllTeamResponse
    message.Team = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Team.push(Team.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllTeamResponse {
    const message = { ...baseQueryAllTeamResponse } as QueryAllTeamResponse
    message.Team = []
    if (object.Team !== undefined && object.Team !== null) {
      for (const e of object.Team) {
        message.Team.push(Team.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllTeamResponse): unknown {
    const obj: any = {}
    if (message.Team) {
      obj.Team = message.Team.map((e) => (e ? Team.toJSON(e) : undefined))
    } else {
      obj.Team = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllTeamResponse>): QueryAllTeamResponse {
    const message = { ...baseQueryAllTeamResponse } as QueryAllTeamResponse
    message.Team = []
    if (object.Team !== undefined && object.Team !== null) {
      for (const e of object.Team) {
        message.Team.push(Team.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a achievement by id. */
  Achievement(request: QueryGetAchievementRequest): Promise<QueryGetAchievementResponse>
  /** Queries a list of achievement items. */
  AchievementAll(request: QueryAllAchievementRequest): Promise<QueryAllAchievementResponse>
  /** Queries a goal by id. */
  Goal(request: QueryGetGoalRequest): Promise<QueryGetGoalResponse>
  /** Queries a list of goal items. */
  GoalAll(request: QueryAllGoalRequest): Promise<QueryAllGoalResponse>
  /** Queries a stat by id. */
  Stat(request: QueryGetStatRequest): Promise<QueryGetStatResponse>
  /** Queries a list of stat items. */
  StatAll(request: QueryAllStatRequest): Promise<QueryAllStatResponse>
  /** Queries a team by id. */
  Team(request: QueryGetTeamRequest): Promise<QueryGetTeamResponse>
  /** Queries a list of team items. */
  TeamAll(request: QueryAllTeamRequest): Promise<QueryAllTeamResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Achievement(request: QueryGetAchievementRequest): Promise<QueryGetAchievementResponse> {
    const data = QueryGetAchievementRequest.encode(request).finish()
    const promise = this.rpc.request('octalmage.gitgood.gitgood.Query', 'Achievement', data)
    return promise.then((data) => QueryGetAchievementResponse.decode(new Reader(data)))
  }

  AchievementAll(request: QueryAllAchievementRequest): Promise<QueryAllAchievementResponse> {
    const data = QueryAllAchievementRequest.encode(request).finish()
    const promise = this.rpc.request('octalmage.gitgood.gitgood.Query', 'AchievementAll', data)
    return promise.then((data) => QueryAllAchievementResponse.decode(new Reader(data)))
  }

  Goal(request: QueryGetGoalRequest): Promise<QueryGetGoalResponse> {
    const data = QueryGetGoalRequest.encode(request).finish()
    const promise = this.rpc.request('octalmage.gitgood.gitgood.Query', 'Goal', data)
    return promise.then((data) => QueryGetGoalResponse.decode(new Reader(data)))
  }

  GoalAll(request: QueryAllGoalRequest): Promise<QueryAllGoalResponse> {
    const data = QueryAllGoalRequest.encode(request).finish()
    const promise = this.rpc.request('octalmage.gitgood.gitgood.Query', 'GoalAll', data)
    return promise.then((data) => QueryAllGoalResponse.decode(new Reader(data)))
  }

  Stat(request: QueryGetStatRequest): Promise<QueryGetStatResponse> {
    const data = QueryGetStatRequest.encode(request).finish()
    const promise = this.rpc.request('octalmage.gitgood.gitgood.Query', 'Stat', data)
    return promise.then((data) => QueryGetStatResponse.decode(new Reader(data)))
  }

  StatAll(request: QueryAllStatRequest): Promise<QueryAllStatResponse> {
    const data = QueryAllStatRequest.encode(request).finish()
    const promise = this.rpc.request('octalmage.gitgood.gitgood.Query', 'StatAll', data)
    return promise.then((data) => QueryAllStatResponse.decode(new Reader(data)))
  }

  Team(request: QueryGetTeamRequest): Promise<QueryGetTeamResponse> {
    const data = QueryGetTeamRequest.encode(request).finish()
    const promise = this.rpc.request('octalmage.gitgood.gitgood.Query', 'Team', data)
    return promise.then((data) => QueryGetTeamResponse.decode(new Reader(data)))
  }

  TeamAll(request: QueryAllTeamRequest): Promise<QueryAllTeamResponse> {
    const data = QueryAllTeamRequest.encode(request).finish()
    const promise = this.rpc.request('octalmage.gitgood.gitgood.Query', 'TeamAll', data)
    return promise.then((data) => QueryAllTeamResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
