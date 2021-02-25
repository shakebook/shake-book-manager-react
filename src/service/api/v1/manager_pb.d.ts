import * as $protobuf from "protobufjs";
/** Namespace manager. */
export namespace manager {

    /** Properties of an EmptyRequest. */
    interface IEmptyRequest {
    }

    /** Represents an EmptyRequest. */
    class EmptyRequest implements IEmptyRequest {

        /**
         * Constructs a new EmptyRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: manager.IEmptyRequest);

        /**
         * Creates an EmptyRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EmptyRequest
         */
        public static fromObject(object: { [k: string]: any }): manager.EmptyRequest;

        /**
         * Creates a plain object from an EmptyRequest message. Also converts values to other types if specified.
         * @param message EmptyRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: manager.EmptyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EmptyRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response success */
        success?: (boolean|null);

        /** Response message */
        message?: (string|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: manager.IResponse);

        /** Response success. */
        public success: boolean;

        /** Response message. */
        public message: string;

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Response
         */
        public static fromObject(object: { [k: string]: any }): manager.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: manager.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Status enum. */
    enum Status {
        NORMAL = 0,
        DELETE = 1
    }

    /** Properties of a Role. */
    interface IRole {

        /** Role id */
        id?: (number|null);

        /** Role roleName */
        roleName?: (string|null);

        /** Role createAt */
        createAt?: (string|null);

        /** Role roleStatus */
        roleStatus?: (manager.Status|null);
    }

    /** Represents a Role. */
    class Role implements IRole {

        /**
         * Constructs a new Role.
         * @param [properties] Properties to set
         */
        constructor(properties?: manager.IRole);

        /** Role id. */
        public id: number;

        /** Role roleName. */
        public roleName: string;

        /** Role createAt. */
        public createAt: string;

        /** Role roleStatus. */
        public roleStatus: manager.Status;

        /**
         * Creates a Role message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Role
         */
        public static fromObject(object: { [k: string]: any }): manager.Role;

        /**
         * Creates a plain object from a Role message. Also converts values to other types if specified.
         * @param message Role
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: manager.Role, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Role to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetRoleListResponse. */
    interface IGetRoleListResponse {

        /** GetRoleListResponse success */
        success?: (boolean|null);

        /** GetRoleListResponse message */
        message?: (string|null);

        /** GetRoleListResponse data */
        data?: (manager.IRole[]|null);
    }

    /** Represents a GetRoleListResponse. */
    class GetRoleListResponse implements IGetRoleListResponse {

        /**
         * Constructs a new GetRoleListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: manager.IGetRoleListResponse);

        /** GetRoleListResponse success. */
        public success: boolean;

        /** GetRoleListResponse message. */
        public message: string;

        /** GetRoleListResponse data. */
        public data: manager.IRole[];

        /**
         * Creates a GetRoleListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRoleListResponse
         */
        public static fromObject(object: { [k: string]: any }): manager.GetRoleListResponse;

        /**
         * Creates a plain object from a GetRoleListResponse message. Also converts values to other types if specified.
         * @param message GetRoleListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: manager.GetRoleListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRoleListResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoleId. */
    interface IRoleId {

        /** RoleId id */
        id?: (number|null);
    }

    /** Represents a RoleId. */
    class RoleId implements IRoleId {

        /**
         * Constructs a new RoleId.
         * @param [properties] Properties to set
         */
        constructor(properties?: manager.IRoleId);

        /** RoleId id. */
        public id: number;

        /**
         * Creates a RoleId message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoleId
         */
        public static fromObject(object: { [k: string]: any }): manager.RoleId;

        /**
         * Creates a plain object from a RoleId message. Also converts values to other types if specified.
         * @param message RoleId
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: manager.RoleId, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoleId to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoleBindMenuRequest. */
    interface IRoleBindMenuRequest {

        /** RoleBindMenuRequest roleId */
        roleId?: (number|null);

        /** RoleBindMenuRequest menuIds */
        menuIds?: (number[]|null);
    }

    /** Represents a RoleBindMenuRequest. */
    class RoleBindMenuRequest implements IRoleBindMenuRequest {

        /**
         * Constructs a new RoleBindMenuRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: manager.IRoleBindMenuRequest);

        /** RoleBindMenuRequest roleId. */
        public roleId: number;

        /** RoleBindMenuRequest menuIds. */
        public menuIds: number[];

        /**
         * Creates a RoleBindMenuRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoleBindMenuRequest
         */
        public static fromObject(object: { [k: string]: any }): manager.RoleBindMenuRequest;

        /**
         * Creates a plain object from a RoleBindMenuRequest message. Also converts values to other types if specified.
         * @param message RoleBindMenuRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: manager.RoleBindMenuRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoleBindMenuRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetRoleBindMenuResponse. */
    interface IGetRoleBindMenuResponse {

        /** GetRoleBindMenuResponse success */
        success?: (boolean|null);

        /** GetRoleBindMenuResponse message */
        message?: (string|null);

        /** GetRoleBindMenuResponse data */
        data?: (number[]|null);
    }

    /** Represents a GetRoleBindMenuResponse. */
    class GetRoleBindMenuResponse implements IGetRoleBindMenuResponse {

        /**
         * Constructs a new GetRoleBindMenuResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: manager.IGetRoleBindMenuResponse);

        /** GetRoleBindMenuResponse success. */
        public success: boolean;

        /** GetRoleBindMenuResponse message. */
        public message: string;

        /** GetRoleBindMenuResponse data. */
        public data: number[];

        /**
         * Creates a GetRoleBindMenuResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRoleBindMenuResponse
         */
        public static fromObject(object: { [k: string]: any }): manager.GetRoleBindMenuResponse;

        /**
         * Creates a plain object from a GetRoleBindMenuResponse message. Also converts values to other types if specified.
         * @param message GetRoleBindMenuResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: manager.GetRoleBindMenuResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRoleBindMenuResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccountBindRoleRequest. */
    interface IAccountBindRoleRequest {

        /** AccountBindRoleRequest accountId */
        accountId?: (number|null);

        /** AccountBindRoleRequest roleIds */
        roleIds?: (number[]|null);
    }

    /** Represents an AccountBindRoleRequest. */
    class AccountBindRoleRequest implements IAccountBindRoleRequest {

        /**
         * Constructs a new AccountBindRoleRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: manager.IAccountBindRoleRequest);

        /** AccountBindRoleRequest accountId. */
        public accountId: number;

        /** AccountBindRoleRequest roleIds. */
        public roleIds: number[];

        /**
         * Creates an AccountBindRoleRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountBindRoleRequest
         */
        public static fromObject(object: { [k: string]: any }): manager.AccountBindRoleRequest;

        /**
         * Creates a plain object from an AccountBindRoleRequest message. Also converts values to other types if specified.
         * @param message AccountBindRoleRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: manager.AccountBindRoleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountBindRoleRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccountId. */
    interface IAccountId {

        /** AccountId id */
        id?: (number|null);
    }

    /** Represents an AccountId. */
    class AccountId implements IAccountId {

        /**
         * Constructs a new AccountId.
         * @param [properties] Properties to set
         */
        constructor(properties?: manager.IAccountId);

        /** AccountId id. */
        public id: number;

        /**
         * Creates an AccountId message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountId
         */
        public static fromObject(object: { [k: string]: any }): manager.AccountId;

        /**
         * Creates a plain object from an AccountId message. Also converts values to other types if specified.
         * @param message AccountId
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: manager.AccountId, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountId to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetAccountBindRoleResponse. */
    interface IGetAccountBindRoleResponse {

        /** GetAccountBindRoleResponse success */
        success?: (boolean|null);

        /** GetAccountBindRoleResponse message */
        message?: (string|null);

        /** GetAccountBindRoleResponse data */
        data?: (number[]|null);
    }

    /** Represents a GetAccountBindRoleResponse. */
    class GetAccountBindRoleResponse implements IGetAccountBindRoleResponse {

        /**
         * Constructs a new GetAccountBindRoleResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: manager.IGetAccountBindRoleResponse);

        /** GetAccountBindRoleResponse success. */
        public success: boolean;

        /** GetAccountBindRoleResponse message. */
        public message: string;

        /** GetAccountBindRoleResponse data. */
        public data: number[];

        /**
         * Creates a GetAccountBindRoleResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetAccountBindRoleResponse
         */
        public static fromObject(object: { [k: string]: any }): manager.GetAccountBindRoleResponse;

        /**
         * Creates a plain object from a GetAccountBindRoleResponse message. Also converts values to other types if specified.
         * @param message GetAccountBindRoleResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: manager.GetAccountBindRoleResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetAccountBindRoleResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetAccountMenuResponse. */
    interface IGetAccountMenuResponse {

        /** GetAccountMenuResponse success */
        success?: (boolean|null);

        /** GetAccountMenuResponse message */
        message?: (string|null);

        /** GetAccountMenuResponse data */
        data?: (manager.IMenuInfo[]|null);
    }

    /** Represents a GetAccountMenuResponse. */
    class GetAccountMenuResponse implements IGetAccountMenuResponse {

        /**
         * Constructs a new GetAccountMenuResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: manager.IGetAccountMenuResponse);

        /** GetAccountMenuResponse success. */
        public success: boolean;

        /** GetAccountMenuResponse message. */
        public message: string;

        /** GetAccountMenuResponse data. */
        public data: manager.IMenuInfo[];

        /**
         * Creates a GetAccountMenuResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetAccountMenuResponse
         */
        public static fromObject(object: { [k: string]: any }): manager.GetAccountMenuResponse;

        /**
         * Creates a plain object from a GetAccountMenuResponse message. Also converts values to other types if specified.
         * @param message GetAccountMenuResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: manager.GetAccountMenuResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetAccountMenuResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MenuInfo. */
    interface IMenuInfo {

        /** MenuInfo id */
        id?: (number|null);

        /** MenuInfo menuName */
        menuName?: (string|null);

        /** MenuInfo menuRouter */
        menuRouter?: (string|null);

        /** MenuInfo parentId */
        parentId?: (number|null);

        /** MenuInfo menuIcon */
        menuIcon?: (string|null);

        /** MenuInfo createAt */
        createAt?: (string|null);

        /** MenuInfo menuStatus */
        menuStatus?: (manager.Status|null);
    }

    /** Represents a MenuInfo. */
    class MenuInfo implements IMenuInfo {

        /**
         * Constructs a new MenuInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: manager.IMenuInfo);

        /** MenuInfo id. */
        public id: number;

        /** MenuInfo menuName. */
        public menuName: string;

        /** MenuInfo menuRouter. */
        public menuRouter: string;

        /** MenuInfo parentId. */
        public parentId: number;

        /** MenuInfo menuIcon. */
        public menuIcon: string;

        /** MenuInfo createAt. */
        public createAt: string;

        /** MenuInfo menuStatus. */
        public menuStatus: manager.Status;

        /**
         * Creates a MenuInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MenuInfo
         */
        public static fromObject(object: { [k: string]: any }): manager.MenuInfo;

        /**
         * Creates a plain object from a MenuInfo message. Also converts values to other types if specified.
         * @param message MenuInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: manager.MenuInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MenuInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateMenuRequest. */
    interface ICreateMenuRequest {

        /** CreateMenuRequest menuName */
        menuName?: (string|null);

        /** CreateMenuRequest menuRouter */
        menuRouter?: (string|null);

        /** CreateMenuRequest parentId */
        parentId?: (number|null);

        /** CreateMenuRequest menuIcon */
        menuIcon?: (string|null);
    }

    /** Represents a CreateMenuRequest. */
    class CreateMenuRequest implements ICreateMenuRequest {

        /**
         * Constructs a new CreateMenuRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: manager.ICreateMenuRequest);

        /** CreateMenuRequest menuName. */
        public menuName: string;

        /** CreateMenuRequest menuRouter. */
        public menuRouter: string;

        /** CreateMenuRequest parentId. */
        public parentId: number;

        /** CreateMenuRequest menuIcon. */
        public menuIcon: string;

        /**
         * Creates a CreateMenuRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateMenuRequest
         */
        public static fromObject(object: { [k: string]: any }): manager.CreateMenuRequest;

        /**
         * Creates a plain object from a CreateMenuRequest message. Also converts values to other types if specified.
         * @param message CreateMenuRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: manager.CreateMenuRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateMenuRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetMenuListResponse. */
    interface IGetMenuListResponse {

        /** GetMenuListResponse success */
        success?: (boolean|null);

        /** GetMenuListResponse message */
        message?: (string|null);

        /** GetMenuListResponse data */
        data?: (manager.IMenuInfo[]|null);
    }

    /** Represents a GetMenuListResponse. */
    class GetMenuListResponse implements IGetMenuListResponse {

        /**
         * Constructs a new GetMenuListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: manager.IGetMenuListResponse);

        /** GetMenuListResponse success. */
        public success: boolean;

        /** GetMenuListResponse message. */
        public message: string;

        /** GetMenuListResponse data. */
        public data: manager.IMenuInfo[];

        /**
         * Creates a GetMenuListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetMenuListResponse
         */
        public static fromObject(object: { [k: string]: any }): manager.GetMenuListResponse;

        /**
         * Creates a plain object from a GetMenuListResponse message. Also converts values to other types if specified.
         * @param message GetMenuListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: manager.GetMenuListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetMenuListResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MenuId. */
    interface IMenuId {

        /** MenuId id */
        id?: (number|null);
    }

    /** Represents a MenuId. */
    class MenuId implements IMenuId {

        /**
         * Constructs a new MenuId.
         * @param [properties] Properties to set
         */
        constructor(properties?: manager.IMenuId);

        /** MenuId id. */
        public id: number;

        /**
         * Creates a MenuId message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MenuId
         */
        public static fromObject(object: { [k: string]: any }): manager.MenuId;

        /**
         * Creates a plain object from a MenuId message. Also converts values to other types if specified.
         * @param message MenuId
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: manager.MenuId, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MenuId to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateMenuRequest. */
    interface IUpdateMenuRequest {

        /** UpdateMenuRequest id */
        id?: (number|null);

        /** UpdateMenuRequest menuName */
        menuName?: (string|null);

        /** UpdateMenuRequest menuRouter */
        menuRouter?: (string|null);

        /** UpdateMenuRequest parentId */
        parentId?: (number|null);

        /** UpdateMenuRequest menuIcon */
        menuIcon?: (string|null);

        /** UpdateMenuRequest menuStatus */
        menuStatus?: (manager.Status|null);
    }

    /** Represents an UpdateMenuRequest. */
    class UpdateMenuRequest implements IUpdateMenuRequest {

        /**
         * Constructs a new UpdateMenuRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: manager.IUpdateMenuRequest);

        /** UpdateMenuRequest id. */
        public id: number;

        /** UpdateMenuRequest menuName. */
        public menuName: string;

        /** UpdateMenuRequest menuRouter. */
        public menuRouter: string;

        /** UpdateMenuRequest parentId. */
        public parentId: number;

        /** UpdateMenuRequest menuIcon. */
        public menuIcon: string;

        /** UpdateMenuRequest menuStatus. */
        public menuStatus: manager.Status;

        /**
         * Creates an UpdateMenuRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateMenuRequest
         */
        public static fromObject(object: { [k: string]: any }): manager.UpdateMenuRequest;

        /**
         * Creates a plain object from an UpdateMenuRequest message. Also converts values to other types if specified.
         * @param message UpdateMenuRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: manager.UpdateMenuRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateMenuRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents a ManagerService */
    class ManagerService extends $protobuf.rpc.Service {

        /**
         * Constructs a new ManagerService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Calls CreateRole.
         * @param request Role message or plain object
         * @param callback Node-style callback called with the error, if any, and Response
         */
        public createRole(request: manager.IRole, callback: manager.ManagerService.CreateRoleCallback): void;

        /**
         * Calls CreateRole.
         * @param request Role message or plain object
         * @returns Promise
         */
        public createRole(request: manager.IRole): Promise<manager.Response>;

        /**
         * Calls GetRoleList.
         * @param request EmptyRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetRoleListResponse
         */
        public getRoleList(request: manager.IEmptyRequest, callback: manager.ManagerService.GetRoleListCallback): void;

        /**
         * Calls GetRoleList.
         * @param request EmptyRequest message or plain object
         * @returns Promise
         */
        public getRoleList(request: manager.IEmptyRequest): Promise<manager.GetRoleListResponse>;

        /**
         * Calls UpdateRole.
         * @param request Role message or plain object
         * @param callback Node-style callback called with the error, if any, and Response
         */
        public updateRole(request: manager.IRole, callback: manager.ManagerService.UpdateRoleCallback): void;

        /**
         * Calls UpdateRole.
         * @param request Role message or plain object
         * @returns Promise
         */
        public updateRole(request: manager.IRole): Promise<manager.Response>;

        /**
         * Calls DeleteRole.
         * @param request RoleId message or plain object
         * @param callback Node-style callback called with the error, if any, and Response
         */
        public deleteRole(request: manager.IRoleId, callback: manager.ManagerService.DeleteRoleCallback): void;

        /**
         * Calls DeleteRole.
         * @param request RoleId message or plain object
         * @returns Promise
         */
        public deleteRole(request: manager.IRoleId): Promise<manager.Response>;

        /**
         * Calls RoleBindMenu.
         * @param request RoleBindMenuRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Response
         */
        public roleBindMenu(request: manager.IRoleBindMenuRequest, callback: manager.ManagerService.RoleBindMenuCallback): void;

        /**
         * Calls RoleBindMenu.
         * @param request RoleBindMenuRequest message or plain object
         * @returns Promise
         */
        public roleBindMenu(request: manager.IRoleBindMenuRequest): Promise<manager.Response>;

        /**
         * Calls GetRoleBindMenu.
         * @param request RoleId message or plain object
         * @param callback Node-style callback called with the error, if any, and GetRoleBindMenuResponse
         */
        public getRoleBindMenu(request: manager.IRoleId, callback: manager.ManagerService.GetRoleBindMenuCallback): void;

        /**
         * Calls GetRoleBindMenu.
         * @param request RoleId message or plain object
         * @returns Promise
         */
        public getRoleBindMenu(request: manager.IRoleId): Promise<manager.GetRoleBindMenuResponse>;

        /**
         * Calls AccountBindRole.
         * @param request AccountBindRoleRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Response
         */
        public accountBindRole(request: manager.IAccountBindRoleRequest, callback: manager.ManagerService.AccountBindRoleCallback): void;

        /**
         * Calls AccountBindRole.
         * @param request AccountBindRoleRequest message or plain object
         * @returns Promise
         */
        public accountBindRole(request: manager.IAccountBindRoleRequest): Promise<manager.Response>;

        /**
         * Calls GetAccountBindRole.
         * @param request AccountId message or plain object
         * @param callback Node-style callback called with the error, if any, and GetAccountBindRoleResponse
         */
        public getAccountBindRole(request: manager.IAccountId, callback: manager.ManagerService.GetAccountBindRoleCallback): void;

        /**
         * Calls GetAccountBindRole.
         * @param request AccountId message or plain object
         * @returns Promise
         */
        public getAccountBindRole(request: manager.IAccountId): Promise<manager.GetAccountBindRoleResponse>;

        /**
         * Calls GetAccountMenu.
         * @param request EmptyRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetAccountMenuResponse
         */
        public getAccountMenu(request: manager.IEmptyRequest, callback: manager.ManagerService.GetAccountMenuCallback): void;

        /**
         * Calls GetAccountMenu.
         * @param request EmptyRequest message or plain object
         * @returns Promise
         */
        public getAccountMenu(request: manager.IEmptyRequest): Promise<manager.GetAccountMenuResponse>;

        /**
         * Calls CreateMenu.
         * @param request CreateMenuRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Response
         */
        public createMenu(request: manager.ICreateMenuRequest, callback: manager.ManagerService.CreateMenuCallback): void;

        /**
         * Calls CreateMenu.
         * @param request CreateMenuRequest message or plain object
         * @returns Promise
         */
        public createMenu(request: manager.ICreateMenuRequest): Promise<manager.Response>;

        /**
         * Calls GetMenuList.
         * @param request EmptyRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetMenuListResponse
         */
        public getMenuList(request: manager.IEmptyRequest, callback: manager.ManagerService.GetMenuListCallback): void;

        /**
         * Calls GetMenuList.
         * @param request EmptyRequest message or plain object
         * @returns Promise
         */
        public getMenuList(request: manager.IEmptyRequest): Promise<manager.GetMenuListResponse>;

        /**
         * Calls DeleteMenu.
         * @param request MenuId message or plain object
         * @param callback Node-style callback called with the error, if any, and Response
         */
        public deleteMenu(request: manager.IMenuId, callback: manager.ManagerService.DeleteMenuCallback): void;

        /**
         * Calls DeleteMenu.
         * @param request MenuId message or plain object
         * @returns Promise
         */
        public deleteMenu(request: manager.IMenuId): Promise<manager.Response>;

        /**
         * Calls UpdateMenu.
         * @param request UpdateMenuRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Response
         */
        public updateMenu(request: manager.IUpdateMenuRequest, callback: manager.ManagerService.UpdateMenuCallback): void;

        /**
         * Calls UpdateMenu.
         * @param request UpdateMenuRequest message or plain object
         * @returns Promise
         */
        public updateMenu(request: manager.IUpdateMenuRequest): Promise<manager.Response>;
    }

    namespace ManagerService {

        /**
         * Callback as used by {@link manager.ManagerService#createRole}.
         * @param error Error, if any
         * @param [response] Response
         */
        type CreateRoleCallback = (error: (Error|null), response?: manager.Response) => void;

        /**
         * Callback as used by {@link manager.ManagerService#getRoleList}.
         * @param error Error, if any
         * @param [response] GetRoleListResponse
         */
        type GetRoleListCallback = (error: (Error|null), response?: manager.GetRoleListResponse) => void;

        /**
         * Callback as used by {@link manager.ManagerService#updateRole}.
         * @param error Error, if any
         * @param [response] Response
         */
        type UpdateRoleCallback = (error: (Error|null), response?: manager.Response) => void;

        /**
         * Callback as used by {@link manager.ManagerService#deleteRole}.
         * @param error Error, if any
         * @param [response] Response
         */
        type DeleteRoleCallback = (error: (Error|null), response?: manager.Response) => void;

        /**
         * Callback as used by {@link manager.ManagerService#roleBindMenu}.
         * @param error Error, if any
         * @param [response] Response
         */
        type RoleBindMenuCallback = (error: (Error|null), response?: manager.Response) => void;

        /**
         * Callback as used by {@link manager.ManagerService#getRoleBindMenu}.
         * @param error Error, if any
         * @param [response] GetRoleBindMenuResponse
         */
        type GetRoleBindMenuCallback = (error: (Error|null), response?: manager.GetRoleBindMenuResponse) => void;

        /**
         * Callback as used by {@link manager.ManagerService#accountBindRole}.
         * @param error Error, if any
         * @param [response] Response
         */
        type AccountBindRoleCallback = (error: (Error|null), response?: manager.Response) => void;

        /**
         * Callback as used by {@link manager.ManagerService#getAccountBindRole}.
         * @param error Error, if any
         * @param [response] GetAccountBindRoleResponse
         */
        type GetAccountBindRoleCallback = (error: (Error|null), response?: manager.GetAccountBindRoleResponse) => void;

        /**
         * Callback as used by {@link manager.ManagerService#getAccountMenu}.
         * @param error Error, if any
         * @param [response] GetAccountMenuResponse
         */
        type GetAccountMenuCallback = (error: (Error|null), response?: manager.GetAccountMenuResponse) => void;

        /**
         * Callback as used by {@link manager.ManagerService#createMenu}.
         * @param error Error, if any
         * @param [response] Response
         */
        type CreateMenuCallback = (error: (Error|null), response?: manager.Response) => void;

        /**
         * Callback as used by {@link manager.ManagerService#getMenuList}.
         * @param error Error, if any
         * @param [response] GetMenuListResponse
         */
        type GetMenuListCallback = (error: (Error|null), response?: manager.GetMenuListResponse) => void;

        /**
         * Callback as used by {@link manager.ManagerService#deleteMenu}.
         * @param error Error, if any
         * @param [response] Response
         */
        type DeleteMenuCallback = (error: (Error|null), response?: manager.Response) => void;

        /**
         * Callback as used by {@link manager.ManagerService#updateMenu}.
         * @param error Error, if any
         * @param [response] Response
         */
        type UpdateMenuCallback = (error: (Error|null), response?: manager.Response) => void;
    }
}
