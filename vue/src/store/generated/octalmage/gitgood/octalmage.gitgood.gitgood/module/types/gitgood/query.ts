/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { Team } from '../gitgood/team'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'

export const protobufPackage = 'octalmage.gitgood.gitgood'

/** this line is used by starport scaffolding # 3 */
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
