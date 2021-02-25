import * as $protobuf from "protobufjs";

// Common aliases
const $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const shakebook = $root.shakebook = (() => {

    /**
     * Namespace shakebook.
     * @exports shakebook
     * @namespace
     */
    const shakebook = {};

    shakebook.Response = (function() {

        /**
         * Properties of a Response.
         * @memberof shakebook
         * @interface IResponse
         * @property {boolean|null} [success] Response success
         * @property {string|null} [message] Response message
         */

        /**
         * Constructs a new Response.
         * @memberof shakebook
         * @classdesc Represents a Response.
         * @implements IResponse
         * @constructor
         * @param {shakebook.IResponse=} [properties] Properties to set
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
         * @memberof shakebook.Response
         * @instance
         */
        Response.prototype.success = false;

        /**
         * Response message.
         * @member {string} message
         * @memberof shakebook.Response
         * @instance
         */
        Response.prototype.message = "";

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shakebook.Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shakebook.Response} Response
         */
        Response.fromObject = function fromObject(object) {
            if (object instanceof $root.shakebook.Response)
                return object;
            let message = new $root.shakebook.Response();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shakebook.Response
         * @static
         * @param {shakebook.Response} message Response
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
         * @memberof shakebook.Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Response;
    })();

    shakebook.EmptyRequest = (function() {

        /**
         * Properties of an EmptyRequest.
         * @memberof shakebook
         * @interface IEmptyRequest
         */

        /**
         * Constructs a new EmptyRequest.
         * @memberof shakebook
         * @classdesc Represents an EmptyRequest.
         * @implements IEmptyRequest
         * @constructor
         * @param {shakebook.IEmptyRequest=} [properties] Properties to set
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
         * @memberof shakebook.EmptyRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shakebook.EmptyRequest} EmptyRequest
         */
        EmptyRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.shakebook.EmptyRequest)
                return object;
            return new $root.shakebook.EmptyRequest();
        };

        /**
         * Creates a plain object from an EmptyRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shakebook.EmptyRequest
         * @static
         * @param {shakebook.EmptyRequest} message EmptyRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EmptyRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this EmptyRequest to JSON.
         * @function toJSON
         * @memberof shakebook.EmptyRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EmptyRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EmptyRequest;
    })();

    shakebook.SignUpRequest = (function() {

        /**
         * Properties of a SignUpRequest.
         * @memberof shakebook
         * @interface ISignUpRequest
         * @property {string|null} [accountName] SignUpRequest accountName
         * @property {string|null} [accountEmail] SignUpRequest accountEmail
         * @property {string|null} [accountPassword] SignUpRequest accountPassword
         * @property {string|null} [emailValidCode] SignUpRequest emailValidCode
         */

        /**
         * Constructs a new SignUpRequest.
         * @memberof shakebook
         * @classdesc Represents a SignUpRequest.
         * @implements ISignUpRequest
         * @constructor
         * @param {shakebook.ISignUpRequest=} [properties] Properties to set
         */
        function SignUpRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignUpRequest accountName.
         * @member {string} accountName
         * @memberof shakebook.SignUpRequest
         * @instance
         */
        SignUpRequest.prototype.accountName = "";

        /**
         * SignUpRequest accountEmail.
         * @member {string} accountEmail
         * @memberof shakebook.SignUpRequest
         * @instance
         */
        SignUpRequest.prototype.accountEmail = "";

        /**
         * SignUpRequest accountPassword.
         * @member {string} accountPassword
         * @memberof shakebook.SignUpRequest
         * @instance
         */
        SignUpRequest.prototype.accountPassword = "";

        /**
         * SignUpRequest emailValidCode.
         * @member {string} emailValidCode
         * @memberof shakebook.SignUpRequest
         * @instance
         */
        SignUpRequest.prototype.emailValidCode = "";

        /**
         * Creates a SignUpRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shakebook.SignUpRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shakebook.SignUpRequest} SignUpRequest
         */
        SignUpRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.shakebook.SignUpRequest)
                return object;
            let message = new $root.shakebook.SignUpRequest();
            if (object.accountName != null)
                message.accountName = String(object.accountName);
            if (object.accountEmail != null)
                message.accountEmail = String(object.accountEmail);
            if (object.accountPassword != null)
                message.accountPassword = String(object.accountPassword);
            if (object.emailValidCode != null)
                message.emailValidCode = String(object.emailValidCode);
            return message;
        };

        /**
         * Creates a plain object from a SignUpRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shakebook.SignUpRequest
         * @static
         * @param {shakebook.SignUpRequest} message SignUpRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignUpRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.accountName = "";
                object.accountEmail = "";
                object.accountPassword = "";
                object.emailValidCode = "";
            }
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                object.accountName = message.accountName;
            if (message.accountEmail != null && message.hasOwnProperty("accountEmail"))
                object.accountEmail = message.accountEmail;
            if (message.accountPassword != null && message.hasOwnProperty("accountPassword"))
                object.accountPassword = message.accountPassword;
            if (message.emailValidCode != null && message.hasOwnProperty("emailValidCode"))
                object.emailValidCode = message.emailValidCode;
            return object;
        };

        /**
         * Converts this SignUpRequest to JSON.
         * @function toJSON
         * @memberof shakebook.SignUpRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignUpRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SignUpRequest;
    })();

    shakebook.AccountId = (function() {

        /**
         * Properties of an AccountId.
         * @memberof shakebook
         * @interface IAccountId
         * @property {number|null} [id] AccountId id
         */

        /**
         * Constructs a new AccountId.
         * @memberof shakebook
         * @classdesc Represents an AccountId.
         * @implements IAccountId
         * @constructor
         * @param {shakebook.IAccountId=} [properties] Properties to set
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
         * @memberof shakebook.AccountId
         * @instance
         */
        AccountId.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates an AccountId message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shakebook.AccountId
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shakebook.AccountId} AccountId
         */
        AccountId.fromObject = function fromObject(object) {
            if (object instanceof $root.shakebook.AccountId)
                return object;
            let message = new $root.shakebook.AccountId();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an AccountId message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shakebook.AccountId
         * @static
         * @param {shakebook.AccountId} message AccountId
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountId.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            return object;
        };

        /**
         * Converts this AccountId to JSON.
         * @function toJSON
         * @memberof shakebook.AccountId
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountId.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountId;
    })();

    shakebook.SignInRequest = (function() {

        /**
         * Properties of a SignInRequest.
         * @memberof shakebook
         * @interface ISignInRequest
         * @property {string|null} [accountName] SignInRequest accountName
         * @property {string|null} [accountPassword] SignInRequest accountPassword
         */

        /**
         * Constructs a new SignInRequest.
         * @memberof shakebook
         * @classdesc Represents a SignInRequest.
         * @implements ISignInRequest
         * @constructor
         * @param {shakebook.ISignInRequest=} [properties] Properties to set
         */
        function SignInRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignInRequest accountName.
         * @member {string} accountName
         * @memberof shakebook.SignInRequest
         * @instance
         */
        SignInRequest.prototype.accountName = "";

        /**
         * SignInRequest accountPassword.
         * @member {string} accountPassword
         * @memberof shakebook.SignInRequest
         * @instance
         */
        SignInRequest.prototype.accountPassword = "";

        /**
         * Creates a SignInRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shakebook.SignInRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shakebook.SignInRequest} SignInRequest
         */
        SignInRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.shakebook.SignInRequest)
                return object;
            let message = new $root.shakebook.SignInRequest();
            if (object.accountName != null)
                message.accountName = String(object.accountName);
            if (object.accountPassword != null)
                message.accountPassword = String(object.accountPassword);
            return message;
        };

        /**
         * Creates a plain object from a SignInRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shakebook.SignInRequest
         * @static
         * @param {shakebook.SignInRequest} message SignInRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignInRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.accountName = "";
                object.accountPassword = "";
            }
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                object.accountName = message.accountName;
            if (message.accountPassword != null && message.hasOwnProperty("accountPassword"))
                object.accountPassword = message.accountPassword;
            return object;
        };

        /**
         * Converts this SignInRequest to JSON.
         * @function toJSON
         * @memberof shakebook.SignInRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignInRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SignInRequest;
    })();

    shakebook.SignInResponse = (function() {

        /**
         * Properties of a SignInResponse.
         * @memberof shakebook
         * @interface ISignInResponse
         * @property {boolean|null} [success] SignInResponse success
         * @property {string|null} [message] SignInResponse message
         * @property {string|null} [data] SignInResponse data
         */

        /**
         * Constructs a new SignInResponse.
         * @memberof shakebook
         * @classdesc Represents a SignInResponse.
         * @implements ISignInResponse
         * @constructor
         * @param {shakebook.ISignInResponse=} [properties] Properties to set
         */
        function SignInResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignInResponse success.
         * @member {boolean} success
         * @memberof shakebook.SignInResponse
         * @instance
         */
        SignInResponse.prototype.success = false;

        /**
         * SignInResponse message.
         * @member {string} message
         * @memberof shakebook.SignInResponse
         * @instance
         */
        SignInResponse.prototype.message = "";

        /**
         * SignInResponse data.
         * @member {string} data
         * @memberof shakebook.SignInResponse
         * @instance
         */
        SignInResponse.prototype.data = "";

        /**
         * Creates a SignInResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shakebook.SignInResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shakebook.SignInResponse} SignInResponse
         */
        SignInResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.shakebook.SignInResponse)
                return object;
            let message = new $root.shakebook.SignInResponse();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.message != null)
                message.message = String(object.message);
            if (object.data != null)
                message.data = String(object.data);
            return message;
        };

        /**
         * Creates a plain object from a SignInResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shakebook.SignInResponse
         * @static
         * @param {shakebook.SignInResponse} message SignInResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignInResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.success = false;
                object.message = "";
                object.data = "";
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = message.data;
            return object;
        };

        /**
         * Converts this SignInResponse to JSON.
         * @function toJSON
         * @memberof shakebook.SignInResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignInResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SignInResponse;
    })();

    /**
     * AccountStatus enum.
     * @name shakebook.AccountStatus
     * @enum {number}
     * @property {number} NORMAL=0 NORMAL value
     * @property {number} DISABLE=1 DISABLE value
     * @property {number} LOCK=2 LOCK value
     * @property {number} DELETE=3 DELETE value
     */
    shakebook.AccountStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NORMAL"] = 0;
        values[valuesById[1] = "DISABLE"] = 1;
        values[valuesById[2] = "LOCK"] = 2;
        values[valuesById[3] = "DELETE"] = 3;
        return values;
    })();

    shakebook.UpdateAccountDescriptRequest = (function() {

        /**
         * Properties of an UpdateAccountDescriptRequest.
         * @memberof shakebook
         * @interface IUpdateAccountDescriptRequest
         * @property {string|null} [accountNickname] UpdateAccountDescriptRequest accountNickname
         * @property {string|null} [accountName] UpdateAccountDescriptRequest accountName
         * @property {string|null} [accountDesc] UpdateAccountDescriptRequest accountDesc
         */

        /**
         * Constructs a new UpdateAccountDescriptRequest.
         * @memberof shakebook
         * @classdesc Represents an UpdateAccountDescriptRequest.
         * @implements IUpdateAccountDescriptRequest
         * @constructor
         * @param {shakebook.IUpdateAccountDescriptRequest=} [properties] Properties to set
         */
        function UpdateAccountDescriptRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateAccountDescriptRequest accountNickname.
         * @member {string} accountNickname
         * @memberof shakebook.UpdateAccountDescriptRequest
         * @instance
         */
        UpdateAccountDescriptRequest.prototype.accountNickname = "";

        /**
         * UpdateAccountDescriptRequest accountName.
         * @member {string} accountName
         * @memberof shakebook.UpdateAccountDescriptRequest
         * @instance
         */
        UpdateAccountDescriptRequest.prototype.accountName = "";

        /**
         * UpdateAccountDescriptRequest accountDesc.
         * @member {string} accountDesc
         * @memberof shakebook.UpdateAccountDescriptRequest
         * @instance
         */
        UpdateAccountDescriptRequest.prototype.accountDesc = "";

        /**
         * Creates an UpdateAccountDescriptRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shakebook.UpdateAccountDescriptRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shakebook.UpdateAccountDescriptRequest} UpdateAccountDescriptRequest
         */
        UpdateAccountDescriptRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.shakebook.UpdateAccountDescriptRequest)
                return object;
            let message = new $root.shakebook.UpdateAccountDescriptRequest();
            if (object.accountNickname != null)
                message.accountNickname = String(object.accountNickname);
            if (object.accountName != null)
                message.accountName = String(object.accountName);
            if (object.accountDesc != null)
                message.accountDesc = String(object.accountDesc);
            return message;
        };

        /**
         * Creates a plain object from an UpdateAccountDescriptRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shakebook.UpdateAccountDescriptRequest
         * @static
         * @param {shakebook.UpdateAccountDescriptRequest} message UpdateAccountDescriptRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateAccountDescriptRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.accountNickname = "";
                object.accountName = "";
                object.accountDesc = "";
            }
            if (message.accountNickname != null && message.hasOwnProperty("accountNickname"))
                object.accountNickname = message.accountNickname;
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                object.accountName = message.accountName;
            if (message.accountDesc != null && message.hasOwnProperty("accountDesc"))
                object.accountDesc = message.accountDesc;
            return object;
        };

        /**
         * Converts this UpdateAccountDescriptRequest to JSON.
         * @function toJSON
         * @memberof shakebook.UpdateAccountDescriptRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateAccountDescriptRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateAccountDescriptRequest;
    })();

    shakebook.Account = (function() {

        /**
         * Properties of an Account.
         * @memberof shakebook
         * @interface IAccount
         * @property {shakebook.IAccountInfo|null} [info] Account info
         * @property {string|null} [accountPassword] Account accountPassword
         */

        /**
         * Constructs a new Account.
         * @memberof shakebook
         * @classdesc Represents an Account.
         * @implements IAccount
         * @constructor
         * @param {shakebook.IAccount=} [properties] Properties to set
         */
        function Account(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Account info.
         * @member {shakebook.IAccountInfo|null|undefined} info
         * @memberof shakebook.Account
         * @instance
         */
        Account.prototype.info = null;

        /**
         * Account accountPassword.
         * @member {string} accountPassword
         * @memberof shakebook.Account
         * @instance
         */
        Account.prototype.accountPassword = "";

        /**
         * Creates an Account message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shakebook.Account
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shakebook.Account} Account
         */
        Account.fromObject = function fromObject(object) {
            if (object instanceof $root.shakebook.Account)
                return object;
            let message = new $root.shakebook.Account();
            if (object.info != null) {
                if (typeof object.info !== "object")
                    throw TypeError(".shakebook.Account.info: object expected");
                message.info = $root.shakebook.AccountInfo.fromObject(object.info);
            }
            if (object.accountPassword != null)
                message.accountPassword = String(object.accountPassword);
            return message;
        };

        /**
         * Creates a plain object from an Account message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shakebook.Account
         * @static
         * @param {shakebook.Account} message Account
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Account.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.info = null;
                object.accountPassword = "";
            }
            if (message.info != null && message.hasOwnProperty("info"))
                object.info = $root.shakebook.AccountInfo.toObject(message.info, options);
            if (message.accountPassword != null && message.hasOwnProperty("accountPassword"))
                object.accountPassword = message.accountPassword;
            return object;
        };

        /**
         * Converts this Account to JSON.
         * @function toJSON
         * @memberof shakebook.Account
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Account.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Account;
    })();

    shakebook.ValidEmailRequest = (function() {

        /**
         * Properties of a ValidEmailRequest.
         * @memberof shakebook
         * @interface IValidEmailRequest
         * @property {string|null} [accountEmail] ValidEmailRequest accountEmail
         */

        /**
         * Constructs a new ValidEmailRequest.
         * @memberof shakebook
         * @classdesc Represents a ValidEmailRequest.
         * @implements IValidEmailRequest
         * @constructor
         * @param {shakebook.IValidEmailRequest=} [properties] Properties to set
         */
        function ValidEmailRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ValidEmailRequest accountEmail.
         * @member {string} accountEmail
         * @memberof shakebook.ValidEmailRequest
         * @instance
         */
        ValidEmailRequest.prototype.accountEmail = "";

        /**
         * Creates a ValidEmailRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shakebook.ValidEmailRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shakebook.ValidEmailRequest} ValidEmailRequest
         */
        ValidEmailRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.shakebook.ValidEmailRequest)
                return object;
            let message = new $root.shakebook.ValidEmailRequest();
            if (object.accountEmail != null)
                message.accountEmail = String(object.accountEmail);
            return message;
        };

        /**
         * Creates a plain object from a ValidEmailRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shakebook.ValidEmailRequest
         * @static
         * @param {shakebook.ValidEmailRequest} message ValidEmailRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ValidEmailRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.accountEmail = "";
            if (message.accountEmail != null && message.hasOwnProperty("accountEmail"))
                object.accountEmail = message.accountEmail;
            return object;
        };

        /**
         * Converts this ValidEmailRequest to JSON.
         * @function toJSON
         * @memberof shakebook.ValidEmailRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ValidEmailRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ValidEmailRequest;
    })();

    shakebook.GetAccountResponse = (function() {

        /**
         * Properties of a GetAccountResponse.
         * @memberof shakebook
         * @interface IGetAccountResponse
         * @property {boolean|null} [success] GetAccountResponse success
         * @property {string|null} [message] GetAccountResponse message
         * @property {shakebook.IAccountInfo|null} [data] GetAccountResponse data
         */

        /**
         * Constructs a new GetAccountResponse.
         * @memberof shakebook
         * @classdesc Represents a GetAccountResponse.
         * @implements IGetAccountResponse
         * @constructor
         * @param {shakebook.IGetAccountResponse=} [properties] Properties to set
         */
        function GetAccountResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetAccountResponse success.
         * @member {boolean} success
         * @memberof shakebook.GetAccountResponse
         * @instance
         */
        GetAccountResponse.prototype.success = false;

        /**
         * GetAccountResponse message.
         * @member {string} message
         * @memberof shakebook.GetAccountResponse
         * @instance
         */
        GetAccountResponse.prototype.message = "";

        /**
         * GetAccountResponse data.
         * @member {shakebook.IAccountInfo|null|undefined} data
         * @memberof shakebook.GetAccountResponse
         * @instance
         */
        GetAccountResponse.prototype.data = null;

        /**
         * Creates a GetAccountResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shakebook.GetAccountResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shakebook.GetAccountResponse} GetAccountResponse
         */
        GetAccountResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.shakebook.GetAccountResponse)
                return object;
            let message = new $root.shakebook.GetAccountResponse();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.message != null)
                message.message = String(object.message);
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".shakebook.GetAccountResponse.data: object expected");
                message.data = $root.shakebook.AccountInfo.fromObject(object.data);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetAccountResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shakebook.GetAccountResponse
         * @static
         * @param {shakebook.GetAccountResponse} message GetAccountResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetAccountResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.success = false;
                object.message = "";
                object.data = null;
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = $root.shakebook.AccountInfo.toObject(message.data, options);
            return object;
        };

        /**
         * Converts this GetAccountResponse to JSON.
         * @function toJSON
         * @memberof shakebook.GetAccountResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetAccountResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetAccountResponse;
    })();

    shakebook.AccountInfo = (function() {

        /**
         * Properties of an AccountInfo.
         * @memberof shakebook
         * @interface IAccountInfo
         * @property {number|null} [id] AccountInfo id
         * @property {string|null} [accountName] AccountInfo accountName
         * @property {string|null} [accountPhone] AccountInfo accountPhone
         * @property {string|null} [accountEmail] AccountInfo accountEmail
         * @property {string|null} [signupAt] AccountInfo signupAt
         * @property {string|null} [lastTime] AccountInfo lastTime
         * @property {shakebook.AccountStatus|null} [accountStatus] AccountInfo accountStatus
         * @property {string|null} [imageUrl] AccountInfo imageUrl
         * @property {string|null} [backgroundUrl] AccountInfo backgroundUrl
         * @property {string|null} [accountDesc] AccountInfo accountDesc
         * @property {number|null} [thumbsUp] AccountInfo thumbsUp
         * @property {number|null} [focusNumber] AccountInfo focusNumber
         * @property {number|null} [fansNumber] AccountInfo fansNumber
         * @property {string|null} [accountNickname] AccountInfo accountNickname
         */

        /**
         * Constructs a new AccountInfo.
         * @memberof shakebook
         * @classdesc Represents an AccountInfo.
         * @implements IAccountInfo
         * @constructor
         * @param {shakebook.IAccountInfo=} [properties] Properties to set
         */
        function AccountInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountInfo id.
         * @member {number} id
         * @memberof shakebook.AccountInfo
         * @instance
         */
        AccountInfo.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AccountInfo accountName.
         * @member {string} accountName
         * @memberof shakebook.AccountInfo
         * @instance
         */
        AccountInfo.prototype.accountName = "";

        /**
         * AccountInfo accountPhone.
         * @member {string} accountPhone
         * @memberof shakebook.AccountInfo
         * @instance
         */
        AccountInfo.prototype.accountPhone = "";

        /**
         * AccountInfo accountEmail.
         * @member {string} accountEmail
         * @memberof shakebook.AccountInfo
         * @instance
         */
        AccountInfo.prototype.accountEmail = "";

        /**
         * AccountInfo signupAt.
         * @member {string} signupAt
         * @memberof shakebook.AccountInfo
         * @instance
         */
        AccountInfo.prototype.signupAt = "";

        /**
         * AccountInfo lastTime.
         * @member {string} lastTime
         * @memberof shakebook.AccountInfo
         * @instance
         */
        AccountInfo.prototype.lastTime = "";

        /**
         * AccountInfo accountStatus.
         * @member {shakebook.AccountStatus} accountStatus
         * @memberof shakebook.AccountInfo
         * @instance
         */
        AccountInfo.prototype.accountStatus = 0;

        /**
         * AccountInfo imageUrl.
         * @member {string} imageUrl
         * @memberof shakebook.AccountInfo
         * @instance
         */
        AccountInfo.prototype.imageUrl = "";

        /**
         * AccountInfo backgroundUrl.
         * @member {string} backgroundUrl
         * @memberof shakebook.AccountInfo
         * @instance
         */
        AccountInfo.prototype.backgroundUrl = "";

        /**
         * AccountInfo accountDesc.
         * @member {string} accountDesc
         * @memberof shakebook.AccountInfo
         * @instance
         */
        AccountInfo.prototype.accountDesc = "";

        /**
         * AccountInfo thumbsUp.
         * @member {number} thumbsUp
         * @memberof shakebook.AccountInfo
         * @instance
         */
        AccountInfo.prototype.thumbsUp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AccountInfo focusNumber.
         * @member {number} focusNumber
         * @memberof shakebook.AccountInfo
         * @instance
         */
        AccountInfo.prototype.focusNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AccountInfo fansNumber.
         * @member {number} fansNumber
         * @memberof shakebook.AccountInfo
         * @instance
         */
        AccountInfo.prototype.fansNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AccountInfo accountNickname.
         * @member {string} accountNickname
         * @memberof shakebook.AccountInfo
         * @instance
         */
        AccountInfo.prototype.accountNickname = "";

        /**
         * Creates an AccountInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shakebook.AccountInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shakebook.AccountInfo} AccountInfo
         */
        AccountInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.shakebook.AccountInfo)
                return object;
            let message = new $root.shakebook.AccountInfo();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.accountName != null)
                message.accountName = String(object.accountName);
            if (object.accountPhone != null)
                message.accountPhone = String(object.accountPhone);
            if (object.accountEmail != null)
                message.accountEmail = String(object.accountEmail);
            if (object.signupAt != null)
                message.signupAt = String(object.signupAt);
            if (object.lastTime != null)
                message.lastTime = String(object.lastTime);
            switch (object.accountStatus) {
            case "NORMAL":
            case 0:
                message.accountStatus = 0;
                break;
            case "DISABLE":
            case 1:
                message.accountStatus = 1;
                break;
            case "LOCK":
            case 2:
                message.accountStatus = 2;
                break;
            case "DELETE":
            case 3:
                message.accountStatus = 3;
                break;
            }
            if (object.imageUrl != null)
                message.imageUrl = String(object.imageUrl);
            if (object.backgroundUrl != null)
                message.backgroundUrl = String(object.backgroundUrl);
            if (object.accountDesc != null)
                message.accountDesc = String(object.accountDesc);
            if (object.thumbsUp != null)
                if ($util.Long)
                    (message.thumbsUp = $util.Long.fromValue(object.thumbsUp)).unsigned = false;
                else if (typeof object.thumbsUp === "string")
                    message.thumbsUp = parseInt(object.thumbsUp, 10);
                else if (typeof object.thumbsUp === "number")
                    message.thumbsUp = object.thumbsUp;
                else if (typeof object.thumbsUp === "object")
                    message.thumbsUp = new $util.LongBits(object.thumbsUp.low >>> 0, object.thumbsUp.high >>> 0).toNumber();
            if (object.focusNumber != null)
                if ($util.Long)
                    (message.focusNumber = $util.Long.fromValue(object.focusNumber)).unsigned = false;
                else if (typeof object.focusNumber === "string")
                    message.focusNumber = parseInt(object.focusNumber, 10);
                else if (typeof object.focusNumber === "number")
                    message.focusNumber = object.focusNumber;
                else if (typeof object.focusNumber === "object")
                    message.focusNumber = new $util.LongBits(object.focusNumber.low >>> 0, object.focusNumber.high >>> 0).toNumber();
            if (object.fansNumber != null)
                if ($util.Long)
                    (message.fansNumber = $util.Long.fromValue(object.fansNumber)).unsigned = false;
                else if (typeof object.fansNumber === "string")
                    message.fansNumber = parseInt(object.fansNumber, 10);
                else if (typeof object.fansNumber === "number")
                    message.fansNumber = object.fansNumber;
                else if (typeof object.fansNumber === "object")
                    message.fansNumber = new $util.LongBits(object.fansNumber.low >>> 0, object.fansNumber.high >>> 0).toNumber();
            if (object.accountNickname != null)
                message.accountNickname = String(object.accountNickname);
            return message;
        };

        /**
         * Creates a plain object from an AccountInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shakebook.AccountInfo
         * @static
         * @param {shakebook.AccountInfo} message AccountInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.accountName = "";
                object.accountPhone = "";
                object.accountEmail = "";
                object.signupAt = "";
                object.lastTime = "";
                object.accountStatus = options.enums === String ? "NORMAL" : 0;
                object.imageUrl = "";
                object.backgroundUrl = "";
                object.accountDesc = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.thumbsUp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.thumbsUp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.focusNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.focusNumber = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.fansNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fansNumber = options.longs === String ? "0" : 0;
                object.accountNickname = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                object.accountName = message.accountName;
            if (message.accountPhone != null && message.hasOwnProperty("accountPhone"))
                object.accountPhone = message.accountPhone;
            if (message.accountEmail != null && message.hasOwnProperty("accountEmail"))
                object.accountEmail = message.accountEmail;
            if (message.signupAt != null && message.hasOwnProperty("signupAt"))
                object.signupAt = message.signupAt;
            if (message.lastTime != null && message.hasOwnProperty("lastTime"))
                object.lastTime = message.lastTime;
            if (message.accountStatus != null && message.hasOwnProperty("accountStatus"))
                object.accountStatus = options.enums === String ? $root.shakebook.AccountStatus[message.accountStatus] : message.accountStatus;
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                object.imageUrl = message.imageUrl;
            if (message.backgroundUrl != null && message.hasOwnProperty("backgroundUrl"))
                object.backgroundUrl = message.backgroundUrl;
            if (message.accountDesc != null && message.hasOwnProperty("accountDesc"))
                object.accountDesc = message.accountDesc;
            if (message.thumbsUp != null && message.hasOwnProperty("thumbsUp"))
                if (typeof message.thumbsUp === "number")
                    object.thumbsUp = options.longs === String ? String(message.thumbsUp) : message.thumbsUp;
                else
                    object.thumbsUp = options.longs === String ? $util.Long.prototype.toString.call(message.thumbsUp) : options.longs === Number ? new $util.LongBits(message.thumbsUp.low >>> 0, message.thumbsUp.high >>> 0).toNumber() : message.thumbsUp;
            if (message.focusNumber != null && message.hasOwnProperty("focusNumber"))
                if (typeof message.focusNumber === "number")
                    object.focusNumber = options.longs === String ? String(message.focusNumber) : message.focusNumber;
                else
                    object.focusNumber = options.longs === String ? $util.Long.prototype.toString.call(message.focusNumber) : options.longs === Number ? new $util.LongBits(message.focusNumber.low >>> 0, message.focusNumber.high >>> 0).toNumber() : message.focusNumber;
            if (message.fansNumber != null && message.hasOwnProperty("fansNumber"))
                if (typeof message.fansNumber === "number")
                    object.fansNumber = options.longs === String ? String(message.fansNumber) : message.fansNumber;
                else
                    object.fansNumber = options.longs === String ? $util.Long.prototype.toString.call(message.fansNumber) : options.longs === Number ? new $util.LongBits(message.fansNumber.low >>> 0, message.fansNumber.high >>> 0).toNumber() : message.fansNumber;
            if (message.accountNickname != null && message.hasOwnProperty("accountNickname"))
                object.accountNickname = message.accountNickname;
            return object;
        };

        /**
         * Converts this AccountInfo to JSON.
         * @function toJSON
         * @memberof shakebook.AccountInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountInfo;
    })();

    shakebook.GetAccountListResponse = (function() {

        /**
         * Properties of a GetAccountListResponse.
         * @memberof shakebook
         * @interface IGetAccountListResponse
         * @property {boolean|null} [success] GetAccountListResponse success
         * @property {string|null} [message] GetAccountListResponse message
         * @property {Array.<shakebook.IAccountInfo>|null} [data] GetAccountListResponse data
         */

        /**
         * Constructs a new GetAccountListResponse.
         * @memberof shakebook
         * @classdesc Represents a GetAccountListResponse.
         * @implements IGetAccountListResponse
         * @constructor
         * @param {shakebook.IGetAccountListResponse=} [properties] Properties to set
         */
        function GetAccountListResponse(properties) {
            this.data = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetAccountListResponse success.
         * @member {boolean} success
         * @memberof shakebook.GetAccountListResponse
         * @instance
         */
        GetAccountListResponse.prototype.success = false;

        /**
         * GetAccountListResponse message.
         * @member {string} message
         * @memberof shakebook.GetAccountListResponse
         * @instance
         */
        GetAccountListResponse.prototype.message = "";

        /**
         * GetAccountListResponse data.
         * @member {Array.<shakebook.IAccountInfo>} data
         * @memberof shakebook.GetAccountListResponse
         * @instance
         */
        GetAccountListResponse.prototype.data = $util.emptyArray;

        /**
         * Creates a GetAccountListResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shakebook.GetAccountListResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shakebook.GetAccountListResponse} GetAccountListResponse
         */
        GetAccountListResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.shakebook.GetAccountListResponse)
                return object;
            let message = new $root.shakebook.GetAccountListResponse();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.message != null)
                message.message = String(object.message);
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".shakebook.GetAccountListResponse.data: array expected");
                message.data = [];
                for (let i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".shakebook.GetAccountListResponse.data: object expected");
                    message.data[i] = $root.shakebook.AccountInfo.fromObject(object.data[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetAccountListResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shakebook.GetAccountListResponse
         * @static
         * @param {shakebook.GetAccountListResponse} message GetAccountListResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetAccountListResponse.toObject = function toObject(message, options) {
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
                    object.data[j] = $root.shakebook.AccountInfo.toObject(message.data[j], options);
            }
            return object;
        };

        /**
         * Converts this GetAccountListResponse to JSON.
         * @function toJSON
         * @memberof shakebook.GetAccountListResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetAccountListResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetAccountListResponse;
    })();

    shakebook.AccountService = (function() {

        /**
         * Constructs a new AccountService service.
         * @memberof shakebook
         * @classdesc Represents an AccountService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function AccountService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (AccountService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AccountService;

        /**
         * Callback as used by {@link shakebook.AccountService#signUp}.
         * @memberof shakebook.AccountService
         * @typedef SignUpCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {shakebook.Response} [response] Response
         */

        /**
         * Calls SignUp.
         * @function signUp
         * @memberof shakebook.AccountService
         * @instance
         * @param {shakebook.ISignUpRequest} request SignUpRequest message or plain object
         * @param {shakebook.AccountService.SignUpCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccountService.prototype.signUp = function signUp(request, callback) {
            return this.rpcCall(signUp, $root.shakebook.SignUpRequest, $root.shakebook.Response, request, callback);
        }, "name", { value: "SignUp" });

        /**
         * Calls SignUp.
         * @function signUp
         * @memberof shakebook.AccountService
         * @instance
         * @param {shakebook.ISignUpRequest} request SignUpRequest message or plain object
         * @returns {Promise<shakebook.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link shakebook.AccountService#signIn}.
         * @memberof shakebook.AccountService
         * @typedef SignInCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {shakebook.SignInResponse} [response] SignInResponse
         */

        /**
         * Calls SignIn.
         * @function signIn
         * @memberof shakebook.AccountService
         * @instance
         * @param {shakebook.ISignInRequest} request SignInRequest message or plain object
         * @param {shakebook.AccountService.SignInCallback} callback Node-style callback called with the error, if any, and SignInResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccountService.prototype.signIn = function signIn(request, callback) {
            return this.rpcCall(signIn, $root.shakebook.SignInRequest, $root.shakebook.SignInResponse, request, callback);
        }, "name", { value: "SignIn" });

        /**
         * Calls SignIn.
         * @function signIn
         * @memberof shakebook.AccountService
         * @instance
         * @param {shakebook.ISignInRequest} request SignInRequest message or plain object
         * @returns {Promise<shakebook.SignInResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link shakebook.AccountService#signOut}.
         * @memberof shakebook.AccountService
         * @typedef SignOutCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {shakebook.Response} [response] Response
         */

        /**
         * Calls SignOut.
         * @function signOut
         * @memberof shakebook.AccountService
         * @instance
         * @param {shakebook.IAccountId} request AccountId message or plain object
         * @param {shakebook.AccountService.SignOutCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccountService.prototype.signOut = function signOut(request, callback) {
            return this.rpcCall(signOut, $root.shakebook.AccountId, $root.shakebook.Response, request, callback);
        }, "name", { value: "SignOut" });

        /**
         * Calls SignOut.
         * @function signOut
         * @memberof shakebook.AccountService
         * @instance
         * @param {shakebook.IAccountId} request AccountId message or plain object
         * @returns {Promise<shakebook.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link shakebook.AccountService#validEmail}.
         * @memberof shakebook.AccountService
         * @typedef ValidEmailCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {shakebook.Response} [response] Response
         */

        /**
         * Calls ValidEmail.
         * @function validEmail
         * @memberof shakebook.AccountService
         * @instance
         * @param {shakebook.IValidEmailRequest} request ValidEmailRequest message or plain object
         * @param {shakebook.AccountService.ValidEmailCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccountService.prototype.validEmail = function validEmail(request, callback) {
            return this.rpcCall(validEmail, $root.shakebook.ValidEmailRequest, $root.shakebook.Response, request, callback);
        }, "name", { value: "ValidEmail" });

        /**
         * Calls ValidEmail.
         * @function validEmail
         * @memberof shakebook.AccountService
         * @instance
         * @param {shakebook.IValidEmailRequest} request ValidEmailRequest message or plain object
         * @returns {Promise<shakebook.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link shakebook.AccountService#updateAccountDescript}.
         * @memberof shakebook.AccountService
         * @typedef UpdateAccountDescriptCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {shakebook.Response} [response] Response
         */

        /**
         * Calls UpdateAccountDescript.
         * @function updateAccountDescript
         * @memberof shakebook.AccountService
         * @instance
         * @param {shakebook.IUpdateAccountDescriptRequest} request UpdateAccountDescriptRequest message or plain object
         * @param {shakebook.AccountService.UpdateAccountDescriptCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccountService.prototype.updateAccountDescript = function updateAccountDescript(request, callback) {
            return this.rpcCall(updateAccountDescript, $root.shakebook.UpdateAccountDescriptRequest, $root.shakebook.Response, request, callback);
        }, "name", { value: "UpdateAccountDescript" });

        /**
         * Calls UpdateAccountDescript.
         * @function updateAccountDescript
         * @memberof shakebook.AccountService
         * @instance
         * @param {shakebook.IUpdateAccountDescriptRequest} request UpdateAccountDescriptRequest message or plain object
         * @returns {Promise<shakebook.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link shakebook.AccountService#getAccount}.
         * @memberof shakebook.AccountService
         * @typedef GetAccountCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {shakebook.GetAccountResponse} [response] GetAccountResponse
         */

        /**
         * Calls GetAccount.
         * @function getAccount
         * @memberof shakebook.AccountService
         * @instance
         * @param {shakebook.IEmptyRequest} request EmptyRequest message or plain object
         * @param {shakebook.AccountService.GetAccountCallback} callback Node-style callback called with the error, if any, and GetAccountResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccountService.prototype.getAccount = function getAccount(request, callback) {
            return this.rpcCall(getAccount, $root.shakebook.EmptyRequest, $root.shakebook.GetAccountResponse, request, callback);
        }, "name", { value: "GetAccount" });

        /**
         * Calls GetAccount.
         * @function getAccount
         * @memberof shakebook.AccountService
         * @instance
         * @param {shakebook.IEmptyRequest} request EmptyRequest message or plain object
         * @returns {Promise<shakebook.GetAccountResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link shakebook.AccountService#getAccountList}.
         * @memberof shakebook.AccountService
         * @typedef GetAccountListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {shakebook.GetAccountListResponse} [response] GetAccountListResponse
         */

        /**
         * Calls GetAccountList.
         * @function getAccountList
         * @memberof shakebook.AccountService
         * @instance
         * @param {shakebook.IEmptyRequest} request EmptyRequest message or plain object
         * @param {shakebook.AccountService.GetAccountListCallback} callback Node-style callback called with the error, if any, and GetAccountListResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccountService.prototype.getAccountList = function getAccountList(request, callback) {
            return this.rpcCall(getAccountList, $root.shakebook.EmptyRequest, $root.shakebook.GetAccountListResponse, request, callback);
        }, "name", { value: "GetAccountList" });

        /**
         * Calls GetAccountList.
         * @function getAccountList
         * @memberof shakebook.AccountService
         * @instance
         * @param {shakebook.IEmptyRequest} request EmptyRequest message or plain object
         * @returns {Promise<shakebook.GetAccountListResponse>} Promise
         * @variation 2
         */

        return AccountService;
    })();

    return shakebook;
})();