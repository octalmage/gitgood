/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'octalmage.gitgood.gitgood'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateGoal {
  creator: string
  label: string
  comparison: number
  exp: number
  createdAt: number
}

export interface MsgCreateGoalResponse {
  id: number
}

export interface MsgUpdateGoal {
  creator: string
  id: number
  label: string
  comparison: number
  exp: number
  createdAt: number
}

export interface MsgUpdateGoalResponse {}

export interface MsgDeleteGoal {
  creator: string
  id: number
}

export interface MsgDeleteGoalResponse {}

export interface MsgCreateStat {
  creator: string
  statType: number
  initial: number
  final: number
  owner: string
}

export interface MsgCreateStatResponse {
  id: number
}

export interface MsgUpdateStat {
  creator: string
  id: number
  statType: number
  initial: number
  final: number
  owner: string
}

export interface MsgUpdateStatResponse {}

export interface MsgDeleteStat {
  creator: string
  id: number
}

export interface MsgDeleteStatResponse {}

export interface MsgCreateTeam {
  creator: string
  name: string
  users: string[]
}

export interface MsgCreateTeamResponse {
  id: number
}

export interface MsgUpdateTeam {
  creator: string
  id: number
  name: string
  users: string[]
}

export interface MsgUpdateTeamResponse {}

export interface MsgDeleteTeam {
  creator: string
  id: number
}

export interface MsgDeleteTeamResponse {}

const baseMsgCreateGoal: object = { creator: '', label: '', comparison: 0, exp: 0, createdAt: 0 }

export const MsgCreateGoal = {
  encode(message: MsgCreateGoal, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.label !== '') {
      writer.uint32(18).string(message.label)
    }
    if (message.comparison !== 0) {
      writer.uint32(24).int32(message.comparison)
    }
    if (message.exp !== 0) {
      writer.uint32(32).int32(message.exp)
    }
    if (message.createdAt !== 0) {
      writer.uint32(40).int32(message.createdAt)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateGoal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateGoal } as MsgCreateGoal
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.label = reader.string()
          break
        case 3:
          message.comparison = reader.int32()
          break
        case 4:
          message.exp = reader.int32()
          break
        case 5:
          message.createdAt = reader.int32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateGoal {
    const message = { ...baseMsgCreateGoal } as MsgCreateGoal
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = String(object.label)
    } else {
      message.label = ''
    }
    if (object.comparison !== undefined && object.comparison !== null) {
      message.comparison = Number(object.comparison)
    } else {
      message.comparison = 0
    }
    if (object.exp !== undefined && object.exp !== null) {
      message.exp = Number(object.exp)
    } else {
      message.exp = 0
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt)
    } else {
      message.createdAt = 0
    }
    return message
  },

  toJSON(message: MsgCreateGoal): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.label !== undefined && (obj.label = message.label)
    message.comparison !== undefined && (obj.comparison = message.comparison)
    message.exp !== undefined && (obj.exp = message.exp)
    message.createdAt !== undefined && (obj.createdAt = message.createdAt)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateGoal>): MsgCreateGoal {
    const message = { ...baseMsgCreateGoal } as MsgCreateGoal
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label
    } else {
      message.label = ''
    }
    if (object.comparison !== undefined && object.comparison !== null) {
      message.comparison = object.comparison
    } else {
      message.comparison = 0
    }
    if (object.exp !== undefined && object.exp !== null) {
      message.exp = object.exp
    } else {
      message.exp = 0
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt
    } else {
      message.createdAt = 0
    }
    return message
  }
}

const baseMsgCreateGoalResponse: object = { id: 0 }

export const MsgCreateGoalResponse = {
  encode(message: MsgCreateGoalResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateGoalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateGoalResponse } as MsgCreateGoalResponse
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

  fromJSON(object: any): MsgCreateGoalResponse {
    const message = { ...baseMsgCreateGoalResponse } as MsgCreateGoalResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateGoalResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateGoalResponse>): MsgCreateGoalResponse {
    const message = { ...baseMsgCreateGoalResponse } as MsgCreateGoalResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateGoal: object = { creator: '', id: 0, label: '', comparison: 0, exp: 0, createdAt: 0 }

export const MsgUpdateGoal = {
  encode(message: MsgUpdateGoal, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.label !== '') {
      writer.uint32(26).string(message.label)
    }
    if (message.comparison !== 0) {
      writer.uint32(32).int32(message.comparison)
    }
    if (message.exp !== 0) {
      writer.uint32(40).int32(message.exp)
    }
    if (message.createdAt !== 0) {
      writer.uint32(48).int32(message.createdAt)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateGoal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateGoal } as MsgUpdateGoal
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.label = reader.string()
          break
        case 4:
          message.comparison = reader.int32()
          break
        case 5:
          message.exp = reader.int32()
          break
        case 6:
          message.createdAt = reader.int32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateGoal {
    const message = { ...baseMsgUpdateGoal } as MsgUpdateGoal
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = String(object.label)
    } else {
      message.label = ''
    }
    if (object.comparison !== undefined && object.comparison !== null) {
      message.comparison = Number(object.comparison)
    } else {
      message.comparison = 0
    }
    if (object.exp !== undefined && object.exp !== null) {
      message.exp = Number(object.exp)
    } else {
      message.exp = 0
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt)
    } else {
      message.createdAt = 0
    }
    return message
  },

  toJSON(message: MsgUpdateGoal): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.label !== undefined && (obj.label = message.label)
    message.comparison !== undefined && (obj.comparison = message.comparison)
    message.exp !== undefined && (obj.exp = message.exp)
    message.createdAt !== undefined && (obj.createdAt = message.createdAt)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateGoal>): MsgUpdateGoal {
    const message = { ...baseMsgUpdateGoal } as MsgUpdateGoal
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label
    } else {
      message.label = ''
    }
    if (object.comparison !== undefined && object.comparison !== null) {
      message.comparison = object.comparison
    } else {
      message.comparison = 0
    }
    if (object.exp !== undefined && object.exp !== null) {
      message.exp = object.exp
    } else {
      message.exp = 0
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt
    } else {
      message.createdAt = 0
    }
    return message
  }
}

const baseMsgUpdateGoalResponse: object = {}

export const MsgUpdateGoalResponse = {
  encode(_: MsgUpdateGoalResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateGoalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateGoalResponse } as MsgUpdateGoalResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateGoalResponse {
    const message = { ...baseMsgUpdateGoalResponse } as MsgUpdateGoalResponse
    return message
  },

  toJSON(_: MsgUpdateGoalResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateGoalResponse>): MsgUpdateGoalResponse {
    const message = { ...baseMsgUpdateGoalResponse } as MsgUpdateGoalResponse
    return message
  }
}

const baseMsgDeleteGoal: object = { creator: '', id: 0 }

export const MsgDeleteGoal = {
  encode(message: MsgDeleteGoal, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteGoal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteGoal } as MsgDeleteGoal
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteGoal {
    const message = { ...baseMsgDeleteGoal } as MsgDeleteGoal
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgDeleteGoal): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteGoal>): MsgDeleteGoal {
    const message = { ...baseMsgDeleteGoal } as MsgDeleteGoal
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgDeleteGoalResponse: object = {}

export const MsgDeleteGoalResponse = {
  encode(_: MsgDeleteGoalResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteGoalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteGoalResponse } as MsgDeleteGoalResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteGoalResponse {
    const message = { ...baseMsgDeleteGoalResponse } as MsgDeleteGoalResponse
    return message
  },

  toJSON(_: MsgDeleteGoalResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteGoalResponse>): MsgDeleteGoalResponse {
    const message = { ...baseMsgDeleteGoalResponse } as MsgDeleteGoalResponse
    return message
  }
}

const baseMsgCreateStat: object = { creator: '', statType: 0, initial: 0, final: 0, owner: '' }

export const MsgCreateStat = {
  encode(message: MsgCreateStat, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.statType !== 0) {
      writer.uint32(16).int32(message.statType)
    }
    if (message.initial !== 0) {
      writer.uint32(24).int32(message.initial)
    }
    if (message.final !== 0) {
      writer.uint32(32).int32(message.final)
    }
    if (message.owner !== '') {
      writer.uint32(42).string(message.owner)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateStat {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateStat } as MsgCreateStat
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.statType = reader.int32()
          break
        case 3:
          message.initial = reader.int32()
          break
        case 4:
          message.final = reader.int32()
          break
        case 5:
          message.owner = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateStat {
    const message = { ...baseMsgCreateStat } as MsgCreateStat
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.statType !== undefined && object.statType !== null) {
      message.statType = Number(object.statType)
    } else {
      message.statType = 0
    }
    if (object.initial !== undefined && object.initial !== null) {
      message.initial = Number(object.initial)
    } else {
      message.initial = 0
    }
    if (object.final !== undefined && object.final !== null) {
      message.final = Number(object.final)
    } else {
      message.final = 0
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner)
    } else {
      message.owner = ''
    }
    return message
  },

  toJSON(message: MsgCreateStat): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.statType !== undefined && (obj.statType = message.statType)
    message.initial !== undefined && (obj.initial = message.initial)
    message.final !== undefined && (obj.final = message.final)
    message.owner !== undefined && (obj.owner = message.owner)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateStat>): MsgCreateStat {
    const message = { ...baseMsgCreateStat } as MsgCreateStat
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.statType !== undefined && object.statType !== null) {
      message.statType = object.statType
    } else {
      message.statType = 0
    }
    if (object.initial !== undefined && object.initial !== null) {
      message.initial = object.initial
    } else {
      message.initial = 0
    }
    if (object.final !== undefined && object.final !== null) {
      message.final = object.final
    } else {
      message.final = 0
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner
    } else {
      message.owner = ''
    }
    return message
  }
}

const baseMsgCreateStatResponse: object = { id: 0 }

export const MsgCreateStatResponse = {
  encode(message: MsgCreateStatResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateStatResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateStatResponse } as MsgCreateStatResponse
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

  fromJSON(object: any): MsgCreateStatResponse {
    const message = { ...baseMsgCreateStatResponse } as MsgCreateStatResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateStatResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateStatResponse>): MsgCreateStatResponse {
    const message = { ...baseMsgCreateStatResponse } as MsgCreateStatResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateStat: object = { creator: '', id: 0, statType: 0, initial: 0, final: 0, owner: '' }

export const MsgUpdateStat = {
  encode(message: MsgUpdateStat, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.statType !== 0) {
      writer.uint32(24).int32(message.statType)
    }
    if (message.initial !== 0) {
      writer.uint32(32).int32(message.initial)
    }
    if (message.final !== 0) {
      writer.uint32(40).int32(message.final)
    }
    if (message.owner !== '') {
      writer.uint32(50).string(message.owner)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateStat {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateStat } as MsgUpdateStat
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.statType = reader.int32()
          break
        case 4:
          message.initial = reader.int32()
          break
        case 5:
          message.final = reader.int32()
          break
        case 6:
          message.owner = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateStat {
    const message = { ...baseMsgUpdateStat } as MsgUpdateStat
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.statType !== undefined && object.statType !== null) {
      message.statType = Number(object.statType)
    } else {
      message.statType = 0
    }
    if (object.initial !== undefined && object.initial !== null) {
      message.initial = Number(object.initial)
    } else {
      message.initial = 0
    }
    if (object.final !== undefined && object.final !== null) {
      message.final = Number(object.final)
    } else {
      message.final = 0
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner)
    } else {
      message.owner = ''
    }
    return message
  },

  toJSON(message: MsgUpdateStat): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.statType !== undefined && (obj.statType = message.statType)
    message.initial !== undefined && (obj.initial = message.initial)
    message.final !== undefined && (obj.final = message.final)
    message.owner !== undefined && (obj.owner = message.owner)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateStat>): MsgUpdateStat {
    const message = { ...baseMsgUpdateStat } as MsgUpdateStat
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.statType !== undefined && object.statType !== null) {
      message.statType = object.statType
    } else {
      message.statType = 0
    }
    if (object.initial !== undefined && object.initial !== null) {
      message.initial = object.initial
    } else {
      message.initial = 0
    }
    if (object.final !== undefined && object.final !== null) {
      message.final = object.final
    } else {
      message.final = 0
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner
    } else {
      message.owner = ''
    }
    return message
  }
}

const baseMsgUpdateStatResponse: object = {}

export const MsgUpdateStatResponse = {
  encode(_: MsgUpdateStatResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateStatResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateStatResponse } as MsgUpdateStatResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateStatResponse {
    const message = { ...baseMsgUpdateStatResponse } as MsgUpdateStatResponse
    return message
  },

  toJSON(_: MsgUpdateStatResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateStatResponse>): MsgUpdateStatResponse {
    const message = { ...baseMsgUpdateStatResponse } as MsgUpdateStatResponse
    return message
  }
}

const baseMsgDeleteStat: object = { creator: '', id: 0 }

export const MsgDeleteStat = {
  encode(message: MsgDeleteStat, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteStat {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteStat } as MsgDeleteStat
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteStat {
    const message = { ...baseMsgDeleteStat } as MsgDeleteStat
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgDeleteStat): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteStat>): MsgDeleteStat {
    const message = { ...baseMsgDeleteStat } as MsgDeleteStat
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgDeleteStatResponse: object = {}

export const MsgDeleteStatResponse = {
  encode(_: MsgDeleteStatResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteStatResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteStatResponse } as MsgDeleteStatResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteStatResponse {
    const message = { ...baseMsgDeleteStatResponse } as MsgDeleteStatResponse
    return message
  },

  toJSON(_: MsgDeleteStatResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteStatResponse>): MsgDeleteStatResponse {
    const message = { ...baseMsgDeleteStatResponse } as MsgDeleteStatResponse
    return message
  }
}

const baseMsgCreateTeam: object = { creator: '', name: '', users: '' }

export const MsgCreateTeam = {
  encode(message: MsgCreateTeam, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    for (const v of message.users) {
      writer.uint32(34).string(v!)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTeam {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateTeam } as MsgCreateTeam
    message.users = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.name = reader.string()
          break
        case 4:
          message.users.push(reader.string())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateTeam {
    const message = { ...baseMsgCreateTeam } as MsgCreateTeam
    message.users = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.users !== undefined && object.users !== null) {
      for (const e of object.users) {
        message.users.push(String(e))
      }
    }
    return message
  },

  toJSON(message: MsgCreateTeam): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.name !== undefined && (obj.name = message.name)
    if (message.users) {
      obj.users = message.users.map((e) => e)
    } else {
      obj.users = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateTeam>): MsgCreateTeam {
    const message = { ...baseMsgCreateTeam } as MsgCreateTeam
    message.users = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.users !== undefined && object.users !== null) {
      for (const e of object.users) {
        message.users.push(e)
      }
    }
    return message
  }
}

const baseMsgCreateTeamResponse: object = { id: 0 }

export const MsgCreateTeamResponse = {
  encode(message: MsgCreateTeamResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTeamResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateTeamResponse } as MsgCreateTeamResponse
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

  fromJSON(object: any): MsgCreateTeamResponse {
    const message = { ...baseMsgCreateTeamResponse } as MsgCreateTeamResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateTeamResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateTeamResponse>): MsgCreateTeamResponse {
    const message = { ...baseMsgCreateTeamResponse } as MsgCreateTeamResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateTeam: object = { creator: '', id: 0, name: '', users: '' }

export const MsgUpdateTeam = {
  encode(message: MsgUpdateTeam, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name)
    }
    for (const v of message.users) {
      writer.uint32(34).string(v!)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateTeam {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateTeam } as MsgUpdateTeam
    message.users = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.name = reader.string()
          break
        case 4:
          message.users.push(reader.string())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateTeam {
    const message = { ...baseMsgUpdateTeam } as MsgUpdateTeam
    message.users = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.users !== undefined && object.users !== null) {
      for (const e of object.users) {
        message.users.push(String(e))
      }
    }
    return message
  },

  toJSON(message: MsgUpdateTeam): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.name !== undefined && (obj.name = message.name)
    if (message.users) {
      obj.users = message.users.map((e) => e)
    } else {
      obj.users = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateTeam>): MsgUpdateTeam {
    const message = { ...baseMsgUpdateTeam } as MsgUpdateTeam
    message.users = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.users !== undefined && object.users !== null) {
      for (const e of object.users) {
        message.users.push(e)
      }
    }
    return message
  }
}

const baseMsgUpdateTeamResponse: object = {}

export const MsgUpdateTeamResponse = {
  encode(_: MsgUpdateTeamResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateTeamResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateTeamResponse } as MsgUpdateTeamResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateTeamResponse {
    const message = { ...baseMsgUpdateTeamResponse } as MsgUpdateTeamResponse
    return message
  },

  toJSON(_: MsgUpdateTeamResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateTeamResponse>): MsgUpdateTeamResponse {
    const message = { ...baseMsgUpdateTeamResponse } as MsgUpdateTeamResponse
    return message
  }
}

const baseMsgDeleteTeam: object = { creator: '', id: 0 }

export const MsgDeleteTeam = {
  encode(message: MsgDeleteTeam, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteTeam {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteTeam } as MsgDeleteTeam
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteTeam {
    const message = { ...baseMsgDeleteTeam } as MsgDeleteTeam
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgDeleteTeam): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteTeam>): MsgDeleteTeam {
    const message = { ...baseMsgDeleteTeam } as MsgDeleteTeam
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgDeleteTeamResponse: object = {}

export const MsgDeleteTeamResponse = {
  encode(_: MsgDeleteTeamResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteTeamResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteTeamResponse } as MsgDeleteTeamResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteTeamResponse {
    const message = { ...baseMsgDeleteTeamResponse } as MsgDeleteTeamResponse
    return message
  },

  toJSON(_: MsgDeleteTeamResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteTeamResponse>): MsgDeleteTeamResponse {
    const message = { ...baseMsgDeleteTeamResponse } as MsgDeleteTeamResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateGoal(request: MsgCreateGoal): Promise<MsgCreateGoalResponse>
  UpdateGoal(request: MsgUpdateGoal): Promise<MsgUpdateGoalResponse>
  DeleteGoal(request: MsgDeleteGoal): Promise<MsgDeleteGoalResponse>
  CreateStat(request: MsgCreateStat): Promise<MsgCreateStatResponse>
  UpdateStat(request: MsgUpdateStat): Promise<MsgUpdateStatResponse>
  DeleteStat(request: MsgDeleteStat): Promise<MsgDeleteStatResponse>
  CreateTeam(request: MsgCreateTeam): Promise<MsgCreateTeamResponse>
  UpdateTeam(request: MsgUpdateTeam): Promise<MsgUpdateTeamResponse>
  DeleteTeam(request: MsgDeleteTeam): Promise<MsgDeleteTeamResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateGoal(request: MsgCreateGoal): Promise<MsgCreateGoalResponse> {
    const data = MsgCreateGoal.encode(request).finish()
    const promise = this.rpc.request('octalmage.gitgood.gitgood.Msg', 'CreateGoal', data)
    return promise.then((data) => MsgCreateGoalResponse.decode(new Reader(data)))
  }

  UpdateGoal(request: MsgUpdateGoal): Promise<MsgUpdateGoalResponse> {
    const data = MsgUpdateGoal.encode(request).finish()
    const promise = this.rpc.request('octalmage.gitgood.gitgood.Msg', 'UpdateGoal', data)
    return promise.then((data) => MsgUpdateGoalResponse.decode(new Reader(data)))
  }

  DeleteGoal(request: MsgDeleteGoal): Promise<MsgDeleteGoalResponse> {
    const data = MsgDeleteGoal.encode(request).finish()
    const promise = this.rpc.request('octalmage.gitgood.gitgood.Msg', 'DeleteGoal', data)
    return promise.then((data) => MsgDeleteGoalResponse.decode(new Reader(data)))
  }

  CreateStat(request: MsgCreateStat): Promise<MsgCreateStatResponse> {
    const data = MsgCreateStat.encode(request).finish()
    const promise = this.rpc.request('octalmage.gitgood.gitgood.Msg', 'CreateStat', data)
    return promise.then((data) => MsgCreateStatResponse.decode(new Reader(data)))
  }

  UpdateStat(request: MsgUpdateStat): Promise<MsgUpdateStatResponse> {
    const data = MsgUpdateStat.encode(request).finish()
    const promise = this.rpc.request('octalmage.gitgood.gitgood.Msg', 'UpdateStat', data)
    return promise.then((data) => MsgUpdateStatResponse.decode(new Reader(data)))
  }

  DeleteStat(request: MsgDeleteStat): Promise<MsgDeleteStatResponse> {
    const data = MsgDeleteStat.encode(request).finish()
    const promise = this.rpc.request('octalmage.gitgood.gitgood.Msg', 'DeleteStat', data)
    return promise.then((data) => MsgDeleteStatResponse.decode(new Reader(data)))
  }

  CreateTeam(request: MsgCreateTeam): Promise<MsgCreateTeamResponse> {
    const data = MsgCreateTeam.encode(request).finish()
    const promise = this.rpc.request('octalmage.gitgood.gitgood.Msg', 'CreateTeam', data)
    return promise.then((data) => MsgCreateTeamResponse.decode(new Reader(data)))
  }

  UpdateTeam(request: MsgUpdateTeam): Promise<MsgUpdateTeamResponse> {
    const data = MsgUpdateTeam.encode(request).finish()
    const promise = this.rpc.request('octalmage.gitgood.gitgood.Msg', 'UpdateTeam', data)
    return promise.then((data) => MsgUpdateTeamResponse.decode(new Reader(data)))
  }

  DeleteTeam(request: MsgDeleteTeam): Promise<MsgDeleteTeamResponse> {
    const data = MsgDeleteTeam.encode(request).finish()
    const promise = this.rpc.request('octalmage.gitgood.gitgood.Msg', 'DeleteTeam', data)
    return promise.then((data) => MsgDeleteTeamResponse.decode(new Reader(data)))
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
