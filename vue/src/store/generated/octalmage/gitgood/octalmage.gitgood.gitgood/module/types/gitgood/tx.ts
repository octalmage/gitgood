/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'octalmage.gitgood.gitgood'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateTeam {
  creator: string
  name: string
  users: string
}

export interface MsgCreateTeamResponse {
  id: number
}

export interface MsgUpdateTeam {
  creator: string
  id: number
  name: string
  users: string
}

export interface MsgUpdateTeamResponse {}

export interface MsgDeleteTeam {
  creator: string
  id: number
}

export interface MsgDeleteTeamResponse {}

const baseMsgCreateTeam: object = { creator: '', name: '', users: '' }

export const MsgCreateTeam = {
  encode(message: MsgCreateTeam, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.users !== '') {
      writer.uint32(26).string(message.users)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTeam {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateTeam } as MsgCreateTeam
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.name = reader.string()
          break
        case 3:
          message.users = reader.string()
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
      message.users = String(object.users)
    } else {
      message.users = ''
    }
    return message
  },

  toJSON(message: MsgCreateTeam): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.name !== undefined && (obj.name = message.name)
    message.users !== undefined && (obj.users = message.users)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateTeam>): MsgCreateTeam {
    const message = { ...baseMsgCreateTeam } as MsgCreateTeam
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
      message.users = object.users
    } else {
      message.users = ''
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
    if (message.users !== '') {
      writer.uint32(34).string(message.users)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateTeam {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateTeam } as MsgUpdateTeam
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
          message.users = reader.string()
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
      message.users = String(object.users)
    } else {
      message.users = ''
    }
    return message
  },

  toJSON(message: MsgUpdateTeam): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.name !== undefined && (obj.name = message.name)
    message.users !== undefined && (obj.users = message.users)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateTeam>): MsgUpdateTeam {
    const message = { ...baseMsgUpdateTeam } as MsgUpdateTeam
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
      message.users = object.users
    } else {
      message.users = ''
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
  CreateTeam(request: MsgCreateTeam): Promise<MsgCreateTeamResponse>
  UpdateTeam(request: MsgUpdateTeam): Promise<MsgUpdateTeamResponse>
  DeleteTeam(request: MsgDeleteTeam): Promise<MsgDeleteTeamResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
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
