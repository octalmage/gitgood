export interface GitgoodAchievement {
    creator?: string;
    /** @format uint64 */
    id?: string;
    achievementID?: string;
    owner?: string;
    /** @format int32 */
    createdAt?: number;
}
export interface GitgoodGoal {
    creator?: string;
    /** @format uint64 */
    id?: string;
    label?: string;
    /** @format int32 */
    comparison?: number;
    /** @format int32 */
    exp?: number;
    /** @format int32 */
    createdAt?: number;
}
export interface GitgoodMsgCreateAchievementResponse {
    /** @format uint64 */
    id?: string;
}
export interface GitgoodMsgCreateGoalResponse {
    /** @format uint64 */
    id?: string;
}
export interface GitgoodMsgCreateStatResponse {
    /** @format uint64 */
    id?: string;
}
export interface GitgoodMsgCreateTeamResponse {
    /** @format uint64 */
    id?: string;
}
export declare type GitgoodMsgDeleteAchievementResponse = object;
export declare type GitgoodMsgDeleteGoalResponse = object;
export declare type GitgoodMsgDeleteStatResponse = object;
export declare type GitgoodMsgDeleteTeamResponse = object;
export declare type GitgoodMsgUpdateAchievementResponse = object;
export declare type GitgoodMsgUpdateGoalResponse = object;
export declare type GitgoodMsgUpdateStatResponse = object;
export declare type GitgoodMsgUpdateTeamResponse = object;
export interface GitgoodQueryAllAchievementResponse {
    Achievement?: GitgoodAchievement[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface GitgoodQueryAllGoalResponse {
    Goal?: GitgoodGoal[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface GitgoodQueryAllStatResponse {
    Stat?: GitgoodStat[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface GitgoodQueryAllTeamResponse {
    Team?: GitgoodTeam[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface GitgoodQueryGetAchievementResponse {
    Achievement?: GitgoodAchievement;
}
export interface GitgoodQueryGetGoalResponse {
    Goal?: GitgoodGoal;
}
export interface GitgoodQueryGetStatResponse {
    Stat?: GitgoodStat;
}
export interface GitgoodQueryGetTeamResponse {
    Team?: GitgoodTeam;
}
export interface GitgoodStat {
    creator?: string;
    /** @format uint64 */
    id?: string;
    /** @format int32 */
    statType?: number;
    /** @format int32 */
    initial?: number;
    /** @format int32 */
    final?: number;
    owner?: string;
    /** @format int64 */
    createdAt?: string;
}
export interface GitgoodTeam {
    creator?: string;
    /** @format uint64 */
    id?: string;
    name?: string;
    users?: string[];
}
export interface ProtobufAny {
    typeUrl?: string;
    /** @format byte */
    value?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     * @format byte
     */
    key?: string;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     * @format uint64
     */
    offset?: string;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     * @format uint64
     */
    limit?: string;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     */
    countTotal?: boolean;
}
/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
    /** @format byte */
    nextKey?: string;
    /** @format uint64 */
    total?: string;
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: keyof Omit<Body, "body" | "bodyUsed">;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title gitgood/achievement.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryAchievementAll
     * @summary Queries a list of achievement items.
     * @request GET:/octalmage/gitgood/gitgood/achievement
     */
    queryAchievementAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<GitgoodQueryAllAchievementResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryAchievement
     * @summary Queries a achievement by id.
     * @request GET:/octalmage/gitgood/gitgood/achievement/{id}
     */
    queryAchievement: (id: string, params?: RequestParams) => Promise<HttpResponse<GitgoodQueryGetAchievementResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryGoalAll
     * @summary Queries a list of goal items.
     * @request GET:/octalmage/gitgood/gitgood/goal
     */
    queryGoalAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<GitgoodQueryAllGoalResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryGoal
     * @summary Queries a goal by id.
     * @request GET:/octalmage/gitgood/gitgood/goal/{id}
     */
    queryGoal: (id: string, params?: RequestParams) => Promise<HttpResponse<GitgoodQueryGetGoalResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryStatAll
     * @summary Queries a list of stat items.
     * @request GET:/octalmage/gitgood/gitgood/stat
     */
    queryStatAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<GitgoodQueryAllStatResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryStat
     * @summary Queries a stat by id.
     * @request GET:/octalmage/gitgood/gitgood/stat/{id}
     */
    queryStat: (id: string, params?: RequestParams) => Promise<HttpResponse<GitgoodQueryGetStatResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryTeamAll
     * @summary Queries a list of team items.
     * @request GET:/octalmage/gitgood/gitgood/team
     */
    queryTeamAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<GitgoodQueryAllTeamResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryTeam
     * @summary Queries a team by id.
     * @request GET:/octalmage/gitgood/gitgood/team/{id}
     */
    queryTeam: (id: string, params?: RequestParams) => Promise<HttpResponse<GitgoodQueryGetTeamResponse, RpcStatus>>;
}
export {};
