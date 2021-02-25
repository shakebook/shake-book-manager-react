import * as $protobuf from "protobufjs";

// Common aliases
const $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const manager = $root.manager = (() => {

    /**
     * Namespace manager.
     * @exports manager
     * @namespace
     */
    const manager = {};

    manager.EmptyRequest = (function() {

        /**
         * Properties of an EmptyRequest.
         * @memberof manager
         * @interface IEmptyRequest
         */

        /**
         * Constructs a new EmptyRequest.
         * @memberof manager
         * @classdesc Represents an EmptyRequest.
         * @implements IEmptyRequest
         * @constructor
         * @param {manager.IEmptyRequest=} [properties] Properties to set
         */
        function EmptyRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates an EmptyRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof manager.EmptyRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {manager.EmptyRequest} EmptyRequest
         */
        EmptyRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.manager.EmptyRequest)
                return object;
            return new $root.manager.EmptyRequest();
        };

        /**
         * Creates a plain object from an EmptyRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof manager.EmptyRequest
         * @static
         * @param {manager.EmptyRequest} message EmptyRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EmptyRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this EmptyRequest to JSON.
         * @function toJSON
         * @memberof manager.EmptyRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EmptyRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EmptyRequest;
    })();

    manager.Response = (function() {

        /**
         * Properties of a Response.
         * @memberof manager
         * @interface IResponse
         * @property {boolean|null} [success] Response success
         * @property {string|null} [message] Response message
         */

        /**
         * Constructs a new Response.
         * @memberof manager
         * @classdesc Represents a Response.
         * @implements IResponse
         * @constructor
         * @param {manager.IResponse=} [properties] Properties to set
         */
        function Response(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Response success.
         * @member {boolean} success
         * @memberof manager.Response
         * @instance
         */
        Response.prototype.success = false;

        /**
         * Response message.
         * @member {string} message
         * @memberof manager.Response
         * @instance
         */
        Response.prototype.message = "";

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof manager.Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {manager.Response} Response
         */
        Response.fromObject = function fromObject(object) {
            if (object instanceof $root.manager.Response)
                return object;
            let message = new $root.manager.Response();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof manager.Response
         * @static
         * @param {manager.Response} message Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.success = false;
                object.message = "";
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this Response to JSON.
         * @function toJSON
         * @memberof manager.Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Response;
    })();

    /**
     * Status enum.
     * @name manager.Status
     * @enum {number}
     * @property {number} NORMAL=0 NORMAL value
     * @property {number} DELETE=1 DELETE value
     */
    manager.Status = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NORMAL"] = 0;
        values[valuesById[1] = "DELETE"] = 1;
        return values;
    })();

    manager.Role = (function() {

        /**
         * Properties of a Role.
         * @memberof manager
         * @interface IRole
         * @property {number|null} [id] Role id
         * @property {string|null} [roleName] Role roleName
         * @property {string|null} [createAt] Role createAt
         * @property {manager.Status|null} [roleStatus] Role roleStatus
         */

        /**
         * Constructs a new Role.
         * @memberof manager
         * @classdesc Represents a Role.
         * @implements IRole
         * @constructor
         * @param {manager.IRole=} [properties] Properties to set
         */
        function Role(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Role id.
         * @member {number} id
         * @memberof manager.Role
         * @instance
         */
        Role.prototype.id = 0;

        /**
         * Role roleName.
         * @member {string} roleName
         * @memberof manager.Role
         * @instance
         */
        Role.prototype.roleName = "";

        /**
         * Role createAt.
         * @member {string} createAt
         * @memberof manager.Role
         * @instance
         */
        Role.prototype.createAt = "";

        /**
         * Role roleStatus.
         * @member {manager.Status} roleStatus
         * @memberof manager.Role
         * @instance
         */
        Role.prototype.roleStatus = 0;

        /**
         * Creates a Role message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof manager.Role
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {manager.Role} Role
         */
        Role.fromObject = function fromObject(object) {
            if (object instanceof $root.manager.Role)
                return object;
            let message = new $root.manager.Role();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.roleName != null)
                message.roleName = String(object.roleName);
            if (object.createAt != null)
                message.createAt = String(object.createAt);
            switch (object.roleStatus) {
            case "NORMAL":
            case 0:
                message.roleStatus = 0;
                break;
            case "DELETE":
            case 1:
                message.roleStatus = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Role message. Also converts values to other types if specified.
         * @function toObject
         * @memberof manager.Role
         * @static
         * @param {manager.Role} message Role
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Role.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.roleName = "";
                object.createAt = "";
                object.roleStatus = options.enums === String ? "NORMAL" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.roleName != null && message.hasOwnProperty("roleName"))
                object.roleName = message.roleName;
            if (message.createAt != null && message.hasOwnProperty("createAt"))
                object.createAt = message.createAt;
            if (message.roleStatus != null && message.hasOwnProperty("roleStatus"))
                object.roleStatus = options.enums === String ? $root.manager.Status[message.roleStatus] : message.roleStatus;
            return object;
        };

        /**
         * Converts this Role to JSON.
         * @function toJSON
         * @memberof manager.Role
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Role.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Role;
    })();

    manager.GetRoleListResponse = (function() {

        /**
         * Properties of a GetRoleListResponse.
         * @memberof manager
         * @interface IGetRoleListResponse
         * @property {boolean|null} [success] GetRoleListResponse success
         * @property {string|null} [message] GetRoleListResponse message
         * @property {Array.<manager.IRole>|null} [data] GetRoleListResponse data
         */

        /**
         * Constructs a new GetRoleListResponse.
         * @memberof manager
         * @classdesc Represents a GetRoleListResponse.
         * @implements IGetRoleListResponse
         * @constructor
         * @param {manager.IGetRoleListResponse=} [properties] Properties to set
         */
        function GetRoleListResponse(properties) {
            this.data = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRoleListResponse success.
         * @member {boolean} success
         * @memberof manager.GetRoleListResponse
         * @instance
         */
        GetRoleListResponse.prototype.success = false;

        /**
         * GetRoleListResponse message.
         * @member {string} message
         * @memberof manager.GetRoleListResponse
         * @instance
         */
        GetRoleListResponse.prototype.message = "";

        /**
         * GetRoleListResponse data.
         * @member {Array.<manager.IRole>} data
         * @memberof manager.GetRoleListResponse
         * @instance
         */
        GetRoleListResponse.prototype.data = $util.emptyArray;

        /**
         * Creates a GetRoleListResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof manager.GetRoleListResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {manager.GetRoleListResponse} GetRoleListResponse
         */
        GetRoleListResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.manager.GetRoleListResponse)
                return object;
            let message = new $root.manager.GetRoleListResponse();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.message != null)
                message.message = String(object.message);
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".manager.GetRoleListResponse.data: array expected");
                message.data = [];
                for (let i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".manager.GetRoleListResponse.data: object expected");
                    message.data[i] = $root.manager.Role.fromObject(object.data[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetRoleListResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof manager.GetRoleListResponse
         * @static
         * @param {manager.GetRoleListResponse} message GetRoleListResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRoleListResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (options.defaults) {
                object.success = false;
                object.message = "";
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.data && message.data.length) {
                object.data = [];
                for (let j = 0; j < message.data.length; ++j)
                    object.data[j] = $root.manager.Role.toObject(message.data[j], options);
            }
            return object;
        };

        /**
         * Converts this GetRoleListResponse to JSON.
         * @function toJSON
         * @memberof manager.GetRoleListResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRoleListResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetRoleListResponse;
    })();

    manager.RoleId = (function() {

        /**
         * Properties of a RoleId.
         * @memberof manager
         * @interface IRoleId
         * @property {number|null} [id] RoleId id
         */

        /**
         * Constructs a new RoleId.
         * @memberof manager
         * @classdesc Represents a RoleId.
         * @implements IRoleId
         * @constructor
         * @param {manager.IRoleId=} [properties] Properties to set
         */
        function RoleId(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoleId id.
         * @member {number} id
         * @memberof manager.RoleId
         * @instance
         */
        RoleId.prototype.id = 0;

        /**
         * Creates a RoleId message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof manager.RoleId
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {manager.RoleId} RoleId
         */
        RoleId.fromObject = function fromObject(object) {
            if (object instanceof $root.manager.RoleId)
                return object;
            let message = new $root.manager.RoleId();
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from a RoleId message. Also converts values to other types if specified.
         * @function toObject
         * @memberof manager.RoleId
         * @static
         * @param {manager.RoleId} message RoleId
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoleId.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this RoleId to JSON.
         * @function toJSON
         * @memberof manager.RoleId
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoleId.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoleId;
    })();

    manager.RoleBindMenuRequest = (function() {

        /**
         * Properties of a RoleBindMenuRequest.
         * @memberof manager
         * @interface IRoleBindMenuRequest
         * @property {number|null} [roleId] RoleBindMenuRequest roleId
         * @property {Array.<number>|null} [menuIds] RoleBindMenuRequest menuIds
         */

        /**
         * Constructs a new RoleBindMenuRequest.
         * @memberof manager
         * @classdesc Represents a RoleBindMenuRequest.
         * @implements IRoleBindMenuRequest
         * @constructor
         * @param {manager.IRoleBindMenuRequest=} [properties] Properties to set
         */
        function RoleBindMenuRequest(properties) {
            this.menuIds = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoleBindMenuRequest roleId.
         * @member {number} roleId
         * @memberof manager.RoleBindMenuRequest
         * @instance
         */
        RoleBindMenuRequest.prototype.roleId = 0;

        /**
         * RoleBindMenuRequest menuIds.
         * @member {Array.<number>} menuIds
         * @memberof manager.RoleBindMenuRequest
         * @instance
         */
        RoleBindMenuRequest.prototype.menuIds = $util.emptyArray;

        /**
         * Creates a RoleBindMenuRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof manager.RoleBindMenuRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {manager.RoleBindMenuRequest} RoleBindMenuRequest
         */
        RoleBindMenuRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.manager.RoleBindMenuRequest)
                return object;
            let message = new $root.manager.RoleBindMenuRequest();
            if (object.roleId != null)
                message.roleId = object.roleId | 0;
            if (object.menuIds) {
                if (!Array.isArray(object.menuIds))
                    throw TypeError(".manager.RoleBindMenuRequest.menuIds: array expected");
                message.menuIds = [];
                for (let i = 0; i < object.menuIds.length; ++i)
                    message.menuIds[i] = object.menuIds[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a RoleBindMenuRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof manager.RoleBindMenuRequest
         * @static
         * @param {manager.RoleBindMenuRequest} message RoleBindMenuRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoleBindMenuRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.menuIds = [];
            if (options.defaults)
                object.roleId = 0;
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                object.roleId = message.roleId;
            if (message.menuIds && message.menuIds.length) {
                object.menuIds = [];
                for (let j = 0; j < message.menuIds.length; ++j)
                    object.menuIds[j] = message.menuIds[j];
            }
            return object;
        };

        /**
         * Converts this RoleBindMenuRequest to JSON.
         * @function toJSON
         * @memberof manager.RoleBindMenuRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoleBindMenuRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoleBindMenuRequest;
    })();

    manager.GetRoleBindMenuResponse = (function() {

        /**
         * Properties of a GetRoleBindMenuResponse.
         * @memberof manager
         * @interface IGetRoleBindMenuResponse
         * @property {boolean|null} [success] GetRoleBindMenuResponse success
         * @property {string|null} [message] GetRoleBindMenuResponse message
         * @property {Array.<number>|null} [data] GetRoleBindMenuResponse data
         */

        /**
         * Constructs a new GetRoleBindMenuResponse.
         * @memberof manager
         * @classdesc Represents a GetRoleBindMenuResponse.
         * @implements IGetRoleBindMenuResponse
         * @constructor
         * @param {manager.IGetRoleBindMenuResponse=} [properties] Properties to set
         */
        function GetRoleBindMenuResponse(properties) {
            this.data = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRoleBindMenuResponse success.
         * @member {boolean} success
         * @memberof manager.GetRoleBindMenuResponse
         * @instance
         */
        GetRoleBindMenuResponse.prototype.success = false;

        /**
         * GetRoleBindMenuResponse message.
         * @member {string} message
         * @memberof manager.GetRoleBindMenuResponse
         * @instance
         */
        GetRoleBindMenuResponse.prototype.message = "";

        /**
         * GetRoleBindMenuResponse data.
         * @member {Array.<number>} data
         * @memberof manager.GetRoleBindMenuResponse
         * @instance
         */
        GetRoleBindMenuResponse.prototype.data = $util.emptyArray;

        /**
         * Creates a GetRoleBindMenuResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof manager.GetRoleBindMenuResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {manager.GetRoleBindMenuResponse} GetRoleBindMenuResponse
         */
        GetRoleBindMenuResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.manager.GetRoleBindMenuResponse)
                return object;
            let message = new $root.manager.GetRoleBindMenuResponse();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.message != null)
                message.message = String(object.message);
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".manager.GetRoleBindMenuResponse.data: array expected");
                message.data = [];
                for (let i = 0; i < object.data.length; ++i)
                    message.data[i] = object.data[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a GetRoleBindMenuResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof manager.GetRoleBindMenuResponse
         * @static
         * @param {manager.GetRoleBindMenuResponse} message GetRoleBindMenuResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRoleBindMenuResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (options.defaults) {
                object.success = false;
                object.message = "";
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.data && message.data.length) {
                object.data = [];
                for (let j = 0; j < message.data.length; ++j)
                    object.data[j] = message.data[j];
            }
            return object;
        };

        /**
         * Converts this GetRoleBindMenuResponse to JSON.
         * @function toJSON
         * @memberof manager.GetRoleBindMenuResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRoleBindMenuResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetRoleBindMenuResponse;
    })();

    manager.AccountBindRoleRequest = (function() {

        /**
         * Properties of an AccountBindRoleRequest.
         * @memberof manager
         * @interface IAccountBindRoleRequest
         * @property {number|null} [accountId] AccountBindRoleRequest accountId
         * @property {Array.<number>|null} [roleIds] AccountBindRoleRequest roleIds
         */

        /**
         * Constructs a new AccountBindRoleRequest.
         * @memberof manager
         * @classdesc Represents an AccountBindRoleRequest.
         * @implements IAccountBindRoleRequest
         * @constructor
         * @param {manager.IAccountBindRoleRequest=} [properties] Properties to set
         */
        function AccountBindRoleRequest(properties) {
            this.roleIds = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountBindRoleRequest accountId.
         * @member {number} accountId
         * @memberof manager.AccountBindRoleRequest
         * @instance
         */
        AccountBindRoleRequest.prototype.accountId = 0;

        /**
         * AccountBindRoleRequest roleIds.
         * @member {Array.<number>} roleIds
         * @memberof manager.AccountBindRoleRequest
         * @instance
         */
        AccountBindRoleRequest.prototype.roleIds = $util.emptyArray;

        /**
         * Creates an AccountBindRoleRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof manager.AccountBindRoleRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {manager.AccountBindRoleRequest} AccountBindRoleRequest
         */
        AccountBindRoleRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.manager.AccountBindRoleRequest)
                return object;
            let message = new $root.manager.AccountBindRoleRequest();
            if (object.accountId != null)
                message.accountId = object.accountId | 0;
            if (object.roleIds) {
                if (!Array.isArray(object.roleIds))
                    throw TypeError(".manager.AccountBindRoleRequest.roleIds: array expected");
                message.roleIds = [];
                for (let i = 0; i < object.roleIds.length; ++i)
                    message.roleIds[i] = object.roleIds[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from an AccountBindRoleRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof manager.AccountBindRoleRequest
         * @static
         * @param {manager.AccountBindRoleRequest} message AccountBindRoleRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountBindRoleRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.roleIds = [];
            if (options.defaults)
                object.accountId = 0;
            if (message.accountId != null && message.hasOwnProperty("accountId"))
                object.accountId = message.accountId;
            if (message.roleIds && message.roleIds.length) {
                object.roleIds = [];
                for (let j = 0; j < message.roleIds.length; ++j)
                    object.roleIds[j] = message.roleIds[j];
            }
            return object;
        };

        /**
         * Converts this AccountBindRoleRequest to JSON.
         * @function toJSON
         * @memberof manager.AccountBindRoleRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountBindRoleRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountBindRoleRequest;
    })();

    manager.AccountId = (function() {

        /**
         * Properties of an AccountId.
         * @memberof manager
         * @interface IAccountId
         * @property {number|null} [id] AccountId id
         */

        /**
         * Constructs a new AccountId.
         * @memberof manager
         * @classdesc Represents an AccountId.
         * @implements IAccountId
         * @constructor
         * @param {manager.IAccountId=} [properties] Properties to set
         */
        function AccountId(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountId id.
         * @member {number} id
         * @memberof manager.AccountId
         * @instance
         */
        AccountId.prototype.id = 0;

        /**
         * Creates an AccountId message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof manager.AccountId
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {manager.AccountId} AccountId
         */
        AccountId.fromObject = function fromObject(object) {
            if (object instanceof $root.manager.AccountId)
                return object;
            let message = new $root.manager.AccountId();
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from an AccountId message. Also converts values to other types if specified.
         * @function toObject
         * @memberof manager.AccountId
         * @static
         * @param {manager.AccountId} message AccountId
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountId.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this AccountId to JSON.
         * @function toJSON
         * @memberof manager.AccountId
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountId.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountId;
    })();

    manager.GetAccountBindRoleResponse = (function() {

        /**
         * Properties of a GetAccountBindRoleResponse.
         * @memberof manager
         * @interface IGetAccountBindRoleResponse
         * @property {boolean|null} [success] GetAccountBindRoleResponse success
         * @property {string|null} [message] GetAccountBindRoleResponse message
         * @property {Array.<number>|null} [data] GetAccountBindRoleResponse data
         */

        /**
         * Constructs a new GetAccountBindRoleResponse.
         * @memberof manager
         * @classdesc Represents a GetAccountBindRoleResponse.
         * @implements IGetAccountBindRoleResponse
         * @constructor
         * @param {manager.IGetAccountBindRoleResponse=} [properties] Properties to set
         */
        function GetAccountBindRoleResponse(properties) {
            this.data = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetAccountBindRoleResponse success.
         * @member {boolean} success
         * @memberof manager.GetAccountBindRoleResponse
         * @instance
         */
        GetAccountBindRoleResponse.prototype.success = false;

        /**
         * GetAccountBindRoleResponse message.
         * @member {string} message
         * @memberof manager.GetAccountBindRoleResponse
         * @instance
         */
        GetAccountBindRoleResponse.prototype.message = "";

        /**
         * GetAccountBindRoleResponse data.
         * @member {Array.<number>} data
         * @memberof manager.GetAccountBindRoleResponse
         * @instance
         */
        GetAccountBindRoleResponse.prototype.data = $util.emptyArray;

        /**
         * Creates a GetAccountBindRoleResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof manager.GetAccountBindRoleResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {manager.GetAccountBindRoleResponse} GetAccountBindRoleResponse
         */
        GetAccountBindRoleResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.manager.GetAccountBindRoleResponse)
                return object;
            let message = new $root.manager.GetAccountBindRoleResponse();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.message != null)
                message.message = String(object.message);
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".manager.GetAccountBindRoleResponse.data: array expected");
                message.data = [];
                for (let i = 0; i < object.data.length; ++i)
                    message.data[i] = object.data[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a GetAccountBindRoleResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof manager.GetAccountBindRoleResponse
         * @static
         * @param {manager.GetAccountBindRoleResponse} message GetAccountBindRoleResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetAccountBindRoleResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (options.defaults) {
                object.success = false;
                object.message = "";
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.data && message.data.length) {
                object.data = [];
                for (let j = 0; j < message.data.length; ++j)
                    object.data[j] = message.data[j];
            }
            return object;
        };

        /**
         * Converts this GetAccountBindRoleResponse to JSON.
         * @function toJSON
         * @memberof manager.GetAccountBindRoleResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetAccountBindRoleResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetAccountBindRoleResponse;
    })();

    manager.GetAccountMenuResponse = (function() {

        /**
         * Properties of a GetAccountMenuResponse.
         * @memberof manager
         * @interface IGetAccountMenuResponse
         * @property {boolean|null} [success] GetAccountMenuResponse success
         * @property {string|null} [message] GetAccountMenuResponse message
         * @property {Array.<manager.IMenuInfo>|null} [data] GetAccountMenuResponse data
         */

        /**
         * Constructs a new GetAccountMenuResponse.
         * @memberof manager
         * @classdesc Represents a GetAccountMenuResponse.
         * @implements IGetAccountMenuResponse
         * @constructor
         * @param {manager.IGetAccountMenuResponse=} [properties] Properties to set
         */
        function GetAccountMenuResponse(properties) {
            this.data = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetAccountMenuResponse success.
         * @member {boolean} success
         * @memberof manager.GetAccountMenuResponse
         * @instance
         */
        GetAccountMenuResponse.prototype.success = false;

        /**
         * GetAccountMenuResponse message.
         * @member {string} message
         * @memberof manager.GetAccountMenuResponse
         * @instance
         */
        GetAccountMenuResponse.prototype.message = "";

        /**
         * GetAccountMenuResponse data.
         * @member {Array.<manager.IMenuInfo>} data
         * @memberof manager.GetAccountMenuResponse
         * @instance
         */
        GetAccountMenuResponse.prototype.data = $util.emptyArray;

        /**
         * Creates a GetAccountMenuResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof manager.GetAccountMenuResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {manager.GetAccountMenuResponse} GetAccountMenuResponse
         */
        GetAccountMenuResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.manager.GetAccountMenuResponse)
                return object;
            let message = new $root.manager.GetAccountMenuResponse();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.message != null)
                message.message = String(object.message);
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".manager.GetAccountMenuResponse.data: array expected");
                message.data = [];
                for (let i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".manager.GetAccountMenuResponse.data: object expected");
                    message.data[i] = $root.manager.MenuInfo.fromObject(object.data[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetAccountMenuResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof manager.GetAccountMenuResponse
         * @static
         * @param {manager.GetAccountMenuResponse} message GetAccountMenuResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetAccountMenuResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (options.defaults) {
                object.success = false;
                object.message = "";
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.data && message.data.length) {
                object.data = [];
                for (let j = 0; j < message.data.length; ++j)
                    object.data[j] = $root.manager.MenuInfo.toObject(message.data[j], options);
            }
            return object;
        };

        /**
         * Converts this GetAccountMenuResponse to JSON.
         * @function toJSON
         * @memberof manager.GetAccountMenuResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetAccountMenuResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetAccountMenuResponse;
    })();

    manager.MenuInfo = (function() {

        /**
         * Properties of a MenuInfo.
         * @memberof manager
         * @interface IMenuInfo
         * @property {number|null} [id] MenuInfo id
         * @property {string|null} [menuName] MenuInfo menuName
         * @property {string|null} [menuRouter] MenuInfo menuRouter
         * @property {number|null} [parentId] MenuInfo parentId
         * @property {string|null} [menuIcon] MenuInfo menuIcon
         * @property {string|null} [createAt] MenuInfo createAt
         * @property {manager.Status|null} [menuStatus] MenuInfo menuStatus
         */

        /**
         * Constructs a new MenuInfo.
         * @memberof manager
         * @classdesc Represents a MenuInfo.
         * @implements IMenuInfo
         * @constructor
         * @param {manager.IMenuInfo=} [properties] Properties to set
         */
        function MenuInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MenuInfo id.
         * @member {number} id
         * @memberof manager.MenuInfo
         * @instance
         */
        MenuInfo.prototype.id = 0;

        /**
         * MenuInfo menuName.
         * @member {string} menuName
         * @memberof manager.MenuInfo
         * @instance
         */
        MenuInfo.prototype.menuName = "";

        /**
         * MenuInfo menuRouter.
         * @member {string} menuRouter
         * @memberof manager.MenuInfo
         * @instance
         */
        MenuInfo.prototype.menuRouter = "";

        /**
         * MenuInfo parentId.
         * @member {number} parentId
         * @memberof manager.MenuInfo
         * @instance
         */
        MenuInfo.prototype.parentId = 0;

        /**
         * MenuInfo menuIcon.
         * @member {string} menuIcon
         * @memberof manager.MenuInfo
         * @instance
         */
        MenuInfo.prototype.menuIcon = "";

        /**
         * MenuInfo createAt.
         * @member {string} createAt
         * @memberof manager.MenuInfo
         * @instance
         */
        MenuInfo.prototype.createAt = "";

        /**
         * MenuInfo menuStatus.
         * @member {manager.Status} menuStatus
         * @memberof manager.MenuInfo
         * @instance
         */
        MenuInfo.prototype.menuStatus = 0;

        /**
         * Creates a MenuInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof manager.MenuInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {manager.MenuInfo} MenuInfo
         */
        MenuInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.manager.MenuInfo)
                return object;
            let message = new $root.manager.MenuInfo();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.menuName != null)
                message.menuName = String(object.menuName);
            if (object.menuRouter != null)
                message.menuRouter = String(object.menuRouter);
            if (object.parentId != null)
                message.parentId = object.parentId | 0;
            if (object.menuIcon != null)
                message.menuIcon = String(object.menuIcon);
            if (object.createAt != null)
                message.createAt = String(object.createAt);
            switch (object.menuStatus) {
            case "NORMAL":
            case 0:
                message.menuStatus = 0;
                break;
            case "DELETE":
            case 1:
                message.menuStatus = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a MenuInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof manager.MenuInfo
         * @static
         * @param {manager.MenuInfo} message MenuInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MenuInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.menuName = "";
                object.menuRouter = "";
                object.parentId = 0;
                object.menuIcon = "";
                object.createAt = "";
                object.menuStatus = options.enums === String ? "NORMAL" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.menuName != null && message.hasOwnProperty("menuName"))
                object.menuName = message.menuName;
            if (message.menuRouter != null && message.hasOwnProperty("menuRouter"))
                object.menuRouter = message.menuRouter;
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                object.parentId = message.parentId;
            if (message.menuIcon != null && message.hasOwnProperty("menuIcon"))
                object.menuIcon = message.menuIcon;
            if (message.createAt != null && message.hasOwnProperty("createAt"))
                object.createAt = message.createAt;
            if (message.menuStatus != null && message.hasOwnProperty("menuStatus"))
                object.menuStatus = options.enums === String ? $root.manager.Status[message.menuStatus] : message.menuStatus;
            return object;
        };

        /**
         * Converts this MenuInfo to JSON.
         * @function toJSON
         * @memberof manager.MenuInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MenuInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MenuInfo;
    })();

    manager.CreateMenuRequest = (function() {

        /**
         * Properties of a CreateMenuRequest.
         * @memberof manager
         * @interface ICreateMenuRequest
         * @property {string|null} [menuName] CreateMenuRequest menuName
         * @property {string|null} [menuRouter] CreateMenuRequest menuRouter
         * @property {number|null} [parentId] CreateMenuRequest parentId
         * @property {string|null} [menuIcon] CreateMenuRequest menuIcon
         */

        /**
         * Constructs a new CreateMenuRequest.
         * @memberof manager
         * @classdesc Represents a CreateMenuRequest.
         * @implements ICreateMenuRequest
         * @constructor
         * @param {manager.ICreateMenuRequest=} [properties] Properties to set
         */
        function CreateMenuRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateMenuRequest menuName.
         * @member {string} menuName
         * @memberof manager.CreateMenuRequest
         * @instance
         */
        CreateMenuRequest.prototype.menuName = "";

        /**
         * CreateMenuRequest menuRouter.
         * @member {string} menuRouter
         * @memberof manager.CreateMenuRequest
         * @instance
         */
        CreateMenuRequest.prototype.menuRouter = "";

        /**
         * CreateMenuRequest parentId.
         * @member {number} parentId
         * @memberof manager.CreateMenuRequest
         * @instance
         */
        CreateMenuRequest.prototype.parentId = 0;

        /**
         * CreateMenuRequest menuIcon.
         * @member {string} menuIcon
         * @memberof manager.CreateMenuRequest
         * @instance
         */
        CreateMenuRequest.prototype.menuIcon = "";

        /**
         * Creates a CreateMenuRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof manager.CreateMenuRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {manager.CreateMenuRequest} CreateMenuRequest
         */
        CreateMenuRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.manager.CreateMenuRequest)
                return object;
            let message = new $root.manager.CreateMenuRequest();
            if (object.menuName != null)
                message.menuName = String(object.menuName);
            if (object.menuRouter != null)
                message.menuRouter = String(object.menuRouter);
            if (object.parentId != null)
                message.parentId = object.parentId | 0;
            if (object.menuIcon != null)
                message.menuIcon = String(object.menuIcon);
            return message;
        };

        /**
         * Creates a plain object from a CreateMenuRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof manager.CreateMenuRequest
         * @static
         * @param {manager.CreateMenuRequest} message CreateMenuRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateMenuRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.menuName = "";
                object.menuRouter = "";
                object.parentId = 0;
                object.menuIcon = "";
            }
            if (message.menuName != null && message.hasOwnProperty("menuName"))
                object.menuName = message.menuName;
            if (message.menuRouter != null && message.hasOwnProperty("menuRouter"))
                object.menuRouter = message.menuRouter;
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                object.parentId = message.parentId;
            if (message.menuIcon != null && message.hasOwnProperty("menuIcon"))
                object.menuIcon = message.menuIcon;
            return object;
        };

        /**
         * Converts this CreateMenuRequest to JSON.
         * @function toJSON
         * @memberof manager.CreateMenuRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateMenuRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateMenuRequest;
    })();

    manager.GetMenuListResponse = (function() {

        /**
         * Properties of a GetMenuListResponse.
         * @memberof manager
         * @interface IGetMenuListResponse
         * @property {boolean|null} [success] GetMenuListResponse success
         * @property {string|null} [message] GetMenuListResponse message
         * @property {Array.<manager.IMenuInfo>|null} [data] GetMenuListResponse data
         */

        /**
         * Constructs a new GetMenuListResponse.
         * @memberof manager
         * @classdesc Represents a GetMenuListResponse.
         * @implements IGetMenuListResponse
         * @constructor
         * @param {manager.IGetMenuListResponse=} [properties] Properties to set
         */
        function GetMenuListResponse(properties) {
            this.data = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetMenuListResponse success.
         * @member {boolean} success
         * @memberof manager.GetMenuListResponse
         * @instance
         */
        GetMenuListResponse.prototype.success = false;

        /**
         * GetMenuListResponse message.
         * @member {string} message
         * @memberof manager.GetMenuListResponse
         * @instance
         */
        GetMenuListResponse.prototype.message = "";

        /**
         * GetMenuListResponse data.
         * @member {Array.<manager.IMenuInfo>} data
         * @memberof manager.GetMenuListResponse
         * @instance
         */
        GetMenuListResponse.prototype.data = $util.emptyArray;

        /**
         * Creates a GetMenuListResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof manager.GetMenuListResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {manager.GetMenuListResponse} GetMenuListResponse
         */
        GetMenuListResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.manager.GetMenuListResponse)
                return object;
            let message = new $root.manager.GetMenuListResponse();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.message != null)
                message.message = String(object.message);
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".manager.GetMenuListResponse.data: array expected");
                message.data = [];
                for (let i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".manager.GetMenuListResponse.data: object expected");
                    message.data[i] = $root.manager.MenuInfo.fromObject(object.data[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetMenuListResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof manager.GetMenuListResponse
         * @static
         * @param {manager.GetMenuListResponse} message GetMenuListResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetMenuListResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (options.defaults) {
                object.success = false;
                object.message = "";
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.data && message.data.length) {
                object.data = [];
                for (let j = 0; j < message.data.length; ++j)
                    object.data[j] = $root.manager.MenuInfo.toObject(message.data[j], options);
            }
            return object;
        };

        /**
         * Converts this GetMenuListResponse to JSON.
         * @function toJSON
         * @memberof manager.GetMenuListResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetMenuListResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetMenuListResponse;
    })();

    manager.MenuId = (function() {

        /**
         * Properties of a MenuId.
         * @memberof manager
         * @interface IMenuId
         * @property {number|null} [id] MenuId id
         */

        /**
         * Constructs a new MenuId.
         * @memberof manager
         * @classdesc Represents a MenuId.
         * @implements IMenuId
         * @constructor
         * @param {manager.IMenuId=} [properties] Properties to set
         */
        function MenuId(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MenuId id.
         * @member {number} id
         * @memberof manager.MenuId
         * @instance
         */
        MenuId.prototype.id = 0;

        /**
         * Creates a MenuId message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof manager.MenuId
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {manager.MenuId} MenuId
         */
        MenuId.fromObject = function fromObject(object) {
            if (object instanceof $root.manager.MenuId)
                return object;
            let message = new $root.manager.MenuId();
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from a MenuId message. Also converts values to other types if specified.
         * @function toObject
         * @memberof manager.MenuId
         * @static
         * @param {manager.MenuId} message MenuId
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MenuId.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this MenuId to JSON.
         * @function toJSON
         * @memberof manager.MenuId
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MenuId.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MenuId;
    })();

    manager.UpdateMenuRequest = (function() {

        /**
         * Properties of an UpdateMenuRequest.
         * @memberof manager
         * @interface IUpdateMenuRequest
         * @property {number|null} [id] UpdateMenuRequest id
         * @property {string|null} [menuName] UpdateMenuRequest menuName
         * @property {string|null} [menuRouter] UpdateMenuRequest menuRouter
         * @property {number|null} [parentId] UpdateMenuRequest parentId
         * @property {string|null} [menuIcon] UpdateMenuRequest menuIcon
         * @property {manager.Status|null} [menuStatus] UpdateMenuRequest menuStatus
         */

        /**
         * Constructs a new UpdateMenuRequest.
         * @memberof manager
         * @classdesc Represents an UpdateMenuRequest.
         * @implements IUpdateMenuRequest
         * @constructor
         * @param {manager.IUpdateMenuRequest=} [properties] Properties to set
         */
        function UpdateMenuRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateMenuRequest id.
         * @member {number} id
         * @memberof manager.UpdateMenuRequest
         * @instance
         */
        UpdateMenuRequest.prototype.id = 0;

        /**
         * UpdateMenuRequest menuName.
         * @member {string} menuName
         * @memberof manager.UpdateMenuRequest
         * @instance
         */
        UpdateMenuRequest.prototype.menuName = "";

        /**
         * UpdateMenuRequest menuRouter.
         * @member {string} menuRouter
         * @memberof manager.UpdateMenuRequest
         * @instance
         */
        UpdateMenuRequest.prototype.menuRouter = "";

        /**
         * UpdateMenuRequest parentId.
         * @member {number} parentId
         * @memberof manager.UpdateMenuRequest
         * @instance
         */
        UpdateMenuRequest.prototype.parentId = 0;

        /**
         * UpdateMenuRequest menuIcon.
         * @member {string} menuIcon
         * @memberof manager.UpdateMenuRequest
         * @instance
         */
        UpdateMenuRequest.prototype.menuIcon = "";

        /**
         * UpdateMenuRequest menuStatus.
         * @member {manager.Status} menuStatus
         * @memberof manager.UpdateMenuRequest
         * @instance
         */
        UpdateMenuRequest.prototype.menuStatus = 0;

        /**
         * Creates an UpdateMenuRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof manager.UpdateMenuRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {manager.UpdateMenuRequest} UpdateMenuRequest
         */
        UpdateMenuRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.manager.UpdateMenuRequest)
                return object;
            let message = new $root.manager.UpdateMenuRequest();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.menuName != null)
                message.menuName = String(object.menuName);
            if (object.menuRouter != null)
                message.menuRouter = String(object.menuRouter);
            if (object.parentId != null)
                message.parentId = object.parentId | 0;
            if (object.menuIcon != null)
                message.menuIcon = String(object.menuIcon);
            switch (object.menuStatus) {
            case "NORMAL":
            case 0:
                message.menuStatus = 0;
                break;
            case "DELETE":
            case 1:
                message.menuStatus = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateMenuRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof manager.UpdateMenuRequest
         * @static
         * @param {manager.UpdateMenuRequest} message UpdateMenuRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateMenuRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.menuName = "";
                object.menuRouter = "";
                object.parentId = 0;
                object.menuIcon = "";
                object.menuStatus = options.enums === String ? "NORMAL" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.menuName != null && message.hasOwnProperty("menuName"))
                object.menuName = message.menuName;
            if (message.menuRouter != null && message.hasOwnProperty("menuRouter"))
                object.menuRouter = message.menuRouter;
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                object.parentId = message.parentId;
            if (message.menuIcon != null && message.hasOwnProperty("menuIcon"))
                object.menuIcon = message.menuIcon;
            if (message.menuStatus != null && message.hasOwnProperty("menuStatus"))
                object.menuStatus = options.enums === String ? $root.manager.Status[message.menuStatus] : message.menuStatus;
            return object;
        };

        /**
         * Converts this UpdateMenuRequest to JSON.
         * @function toJSON
         * @memberof manager.UpdateMenuRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateMenuRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateMenuRequest;
    })();

    manager.ManagerService = (function() {

        /**
         * Constructs a new ManagerService service.
         * @memberof manager
         * @classdesc Represents a ManagerService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function ManagerService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (ManagerService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ManagerService;

        /**
         * Callback as used by {@link manager.ManagerService#createRole}.
         * @memberof manager.ManagerService
         * @typedef CreateRoleCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {manager.Response} [response] Response
         */

        /**
         * Calls CreateRole.
         * @function createRole
         * @memberof manager.ManagerService
         * @instance
         * @param {manager.IRole} request Role message or plain object
         * @param {manager.ManagerService.CreateRoleCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ManagerService.prototype.createRole = function createRole(request, callback) {
            return this.rpcCall(createRole, $root.manager.Role, $root.manager.Response, request, callback);
        }, "name", { value: "CreateRole" });

        /**
         * Calls CreateRole.
         * @function createRole
         * @memberof manager.ManagerService
         * @instance
         * @param {manager.IRole} request Role message or plain object
         * @returns {Promise<manager.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link manager.ManagerService#getRoleList}.
         * @memberof manager.ManagerService
         * @typedef GetRoleListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {manager.GetRoleListResponse} [response] GetRoleListResponse
         */

        /**
         * Calls GetRoleList.
         * @function getRoleList
         * @memberof manager.ManagerService
         * @instance
         * @param {manager.IEmptyRequest} request EmptyRequest message or plain object
         * @param {manager.ManagerService.GetRoleListCallback} callback Node-style callback called with the error, if any, and GetRoleListResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ManagerService.prototype.getRoleList = function getRoleList(request, callback) {
            return this.rpcCall(getRoleList, $root.manager.EmptyRequest, $root.manager.GetRoleListResponse, request, callback);
        }, "name", { value: "GetRoleList" });

        /**
         * Calls GetRoleList.
         * @function getRoleList
         * @memberof manager.ManagerService
         * @instance
         * @param {manager.IEmptyRequest} request EmptyRequest message or plain object
         * @returns {Promise<manager.GetRoleListResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link manager.ManagerService#updateRole}.
         * @memberof manager.ManagerService
         * @typedef UpdateRoleCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {manager.Response} [response] Response
         */

        /**
         * Calls UpdateRole.
         * @function updateRole
         * @memberof manager.ManagerService
         * @instance
         * @param {manager.IRole} request Role message or plain object
         * @param {manager.ManagerService.UpdateRoleCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ManagerService.prototype.updateRole = function updateRole(request, callback) {
            return this.rpcCall(updateRole, $root.manager.Role, $root.manager.Response, request, callback);
        }, "name", { value: "UpdateRole" });

        /**
         * Calls UpdateRole.
         * @function updateRole
         * @memberof manager.ManagerService
         * @instance
         * @param {manager.IRole} request Role message or plain object
         * @returns {Promise<manager.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link manager.ManagerService#deleteRole}.
         * @memberof manager.ManagerService
         * @typedef DeleteRoleCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {manager.Response} [response] Response
         */

        /**
         * Calls DeleteRole.
         * @function deleteRole
         * @memberof manager.ManagerService
         * @instance
         * @param {manager.IRoleId} request RoleId message or plain object
         * @param {manager.ManagerService.DeleteRoleCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ManagerService.prototype.deleteRole = function deleteRole(request, callback) {
            return this.rpcCall(deleteRole, $root.manager.RoleId, $root.manager.Response, request, callback);
        }, "name", { value: "DeleteRole" });

        /**
         * Calls DeleteRole.
         * @function deleteRole
         * @memberof manager.ManagerService
         * @instance
         * @param {manager.IRoleId} request RoleId message or plain object
         * @returns {Promise<manager.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link manager.ManagerService#roleBindMenu}.
         * @memberof manager.ManagerService
         * @typedef RoleBindMenuCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {manager.Response} [response] Response
         */

        /**
         * Calls RoleBindMenu.
         * @function roleBindMenu
         * @memberof manager.ManagerService
         * @instance
         * @param {manager.IRoleBindMenuRequest} request RoleBindMenuRequest message or plain object
         * @param {manager.ManagerService.RoleBindMenuCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ManagerService.prototype.roleBindMenu = function roleBindMenu(request, callback) {
            return this.rpcCall(roleBindMenu, $root.manager.RoleBindMenuRequest, $root.manager.Response, request, callback);
        }, "name", { value: "RoleBindMenu" });

        /**
         * Calls RoleBindMenu.
         * @function roleBindMenu
         * @memberof manager.ManagerService
         * @instance
         * @param {manager.IRoleBindMenuRequest} request RoleBindMenuRequest message or plain object
         * @returns {Promise<manager.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link manager.ManagerService#getRoleBindMenu}.
         * @memberof manager.ManagerService
         * @typedef GetRoleBindMenuCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {manager.GetRoleBindMenuResponse} [response] GetRoleBindMenuResponse
         */

        /**
         * Calls GetRoleBindMenu.
         * @function getRoleBindMenu
         * @memberof manager.ManagerService
         * @instance
         * @param {manager.IRoleId} request RoleId message or plain object
         * @param {manager.ManagerService.GetRoleBindMenuCallback} callback Node-style callback called with the error, if any, and GetRoleBindMenuResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ManagerService.prototype.getRoleBindMenu = function getRoleBindMenu(request, callback) {
            return this.rpcCall(getRoleBindMenu, $root.manager.RoleId, $root.manager.GetRoleBindMenuResponse, request, callback);
        }, "name", { value: "GetRoleBindMenu" });

        /**
         * Calls GetRoleBindMenu.
         * @function getRoleBindMenu
         * @memberof manager.ManagerService
         * @instance
         * @param {manager.IRoleId} request RoleId message or plain object
         * @returns {Promise<manager.GetRoleBindMenuResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link manager.ManagerService#accountBindRole}.
         * @memberof manager.ManagerService
         * @typedef AccountBindRoleCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {manager.Response} [response] Response
         */

        /**
         * Calls AccountBindRole.
         * @function accountBindRole
         * @memberof manager.ManagerService
         * @instance
         * @param {manager.IAccountBindRoleRequest} request AccountBindRoleRequest message or plain object
         * @param {manager.ManagerService.AccountBindRoleCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ManagerService.prototype.accountBindRole = function accountBindRole(request, callback) {
            return this.rpcCall(accountBindRole, $root.manager.AccountBindRoleRequest, $root.manager.Response, request, callback);
        }, "name", { value: "AccountBindRole" });

        /**
         * Calls AccountBindRole.
         * @function accountBindRole
         * @memberof manager.ManagerService
         * @instance
         * @param {manager.IAccountBindRoleRequest} request AccountBindRoleRequest message or plain object
         * @returns {Promise<manager.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link manager.ManagerService#getAccountBindRole}.
         * @memberof manager.ManagerService
         * @typedef GetAccountBindRoleCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {manager.GetAccountBindRoleResponse} [response] GetAccountBindRoleResponse
         */

        /**
         * Calls GetAccountBindRole.
         * @function getAccountBindRole
         * @memberof manager.ManagerService
         * @instance
         * @param {manager.IAccountId} request AccountId message or plain object
         * @param {manager.ManagerService.GetAccountBindRoleCallback} callback Node-style callback called with the error, if any, and GetAccountBindRoleResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ManagerService.prototype.getAccountBindRole = function getAccountBindRole(request, callback) {
            return this.rpcCall(getAccountBindRole, $root.manager.AccountId, $root.manager.GetAccountBindRoleResponse, request, callback);
        }, "name", { value: "GetAccountBindRole" });

        /**
         * Calls GetAccountBindRole.
         * @function getAccountBindRole
         * @memberof manager.ManagerService
         * @instance
         * @param {manager.IAccountId} request AccountId message or plain object
         * @returns {Promise<manager.GetAccountBindRoleResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link manager.ManagerService#getAccountMenu}.
         * @memberof manager.ManagerService
         * @typedef GetAccountMenuCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {manager.GetAccountMenuResponse} [response] GetAccountMenuResponse
         */

        /**
         * Calls GetAccountMenu.
         * @function getAccountMenu
         * @memberof manager.ManagerService
         * @instance
         * @param {manager.IEmptyRequest} request EmptyRequest message or plain object
         * @param {manager.ManagerService.GetAccountMenuCallback} callback Node-style callback called with the error, if any, and GetAccountMenuResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ManagerService.prototype.getAccountMenu = function getAccountMenu(request, callback) {
            return this.rpcCall(getAccountMenu, $root.manager.EmptyRequest, $root.manager.GetAccountMenuResponse, request, callback);
        }, "name", { value: "GetAccountMenu" });

        /**
         * Calls GetAccountMenu.
         * @function getAccountMenu
         * @memberof manager.ManagerService
         * @instance
         * @param {manager.IEmptyRequest} request EmptyRequest message or plain object
         * @returns {Promise<manager.GetAccountMenuResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link manager.ManagerService#createMenu}.
         * @memberof manager.ManagerService
         * @typedef CreateMenuCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {manager.Response} [response] Response
         */

        /**
         * Calls CreateMenu.
         * @function createMenu
         * @memberof manager.ManagerService
         * @instance
         * @param {manager.ICreateMenuRequest} request CreateMenuRequest message or plain object
         * @param {manager.ManagerService.CreateMenuCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ManagerService.prototype.createMenu = function createMenu(request, callback) {
            return this.rpcCall(createMenu, $root.manager.CreateMenuRequest, $root.manager.Response, request, callback);
        }, "name", { value: "CreateMenu" });

        /**
         * Calls CreateMenu.
         * @function createMenu
         * @memberof manager.ManagerService
         * @instance
         * @param {manager.ICreateMenuRequest} request CreateMenuRequest message or plain object
         * @returns {Promise<manager.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link manager.ManagerService#getMenuList}.
         * @memberof manager.ManagerService
         * @typedef GetMenuListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {manager.GetMenuListResponse} [response] GetMenuListResponse
         */

        /**
         * Calls GetMenuList.
         * @function getMenuList
         * @memberof manager.ManagerService
         * @instance
         * @param {manager.IEmptyRequest} request EmptyRequest message or plain object
         * @param {manager.ManagerService.GetMenuListCallback} callback Node-style callback called with the error, if any, and GetMenuListResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ManagerService.prototype.getMenuList = function getMenuList(request, callback) {
            return this.rpcCall(getMenuList, $root.manager.EmptyRequest, $root.manager.GetMenuListResponse, request, callback);
        }, "name", { value: "GetMenuList" });

        /**
         * Calls GetMenuList.
         * @function getMenuList
         * @memberof manager.ManagerService
         * @instance
         * @param {manager.IEmptyRequest} request EmptyRequest message or plain object
         * @returns {Promise<manager.GetMenuListResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link manager.ManagerService#deleteMenu}.
         * @memberof manager.ManagerService
         * @typedef DeleteMenuCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {manager.Response} [response] Response
         */

        /**
         * Calls DeleteMenu.
         * @function deleteMenu
         * @memberof manager.ManagerService
         * @instance
         * @param {manager.IMenuId} request MenuId message or plain object
         * @param {manager.ManagerService.DeleteMenuCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ManagerService.prototype.deleteMenu = function deleteMenu(request, callback) {
            return this.rpcCall(deleteMenu, $root.manager.MenuId, $root.manager.Response, request, callback);
        }, "name", { value: "DeleteMenu" });

        /**
         * Calls DeleteMenu.
         * @function deleteMenu
         * @memberof manager.ManagerService
         * @instance
         * @param {manager.IMenuId} request MenuId message or plain object
         * @returns {Promise<manager.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link manager.ManagerService#updateMenu}.
         * @memberof manager.ManagerService
         * @typedef UpdateMenuCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {manager.Response} [response] Response
         */

        /**
         * Calls UpdateMenu.
         * @function updateMenu
         * @memberof manager.ManagerService
         * @instance
         * @param {manager.IUpdateMenuRequest} request UpdateMenuRequest message or plain object
         * @param {manager.ManagerService.UpdateMenuCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ManagerService.prototype.updateMenu = function updateMenu(request, callback) {
            return this.rpcCall(updateMenu, $root.manager.UpdateMenuRequest, $root.manager.Response, request, callback);
        }, "name", { value: "UpdateMenu" });

        /**
         * Calls UpdateMenu.
         * @function updateMenu
         * @memberof manager.ManagerService
         * @instance
         * @param {manager.IUpdateMenuRequest} request UpdateMenuRequest message or plain object
         * @returns {Promise<manager.Response>} Promise
         * @variation 2
         */

        return ManagerService;
    })();

    return manager;
})();