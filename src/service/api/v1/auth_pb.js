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

    shakebook.GenTokenRequest = (function() {

        /**
         * Properties of a GenTokenRequest.
         * @memberof shakebook
         * @interface IGenTokenRequest
         * @property {number|null} [id] GenTokenRequest id
         */

        /**
         * Constructs a new GenTokenRequest.
         * @memberof shakebook
         * @classdesc Represents a GenTokenRequest.
         * @implements IGenTokenRequest
         * @constructor
         * @param {shakebook.IGenTokenRequest=} [properties] Properties to set
         */
        function GenTokenRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GenTokenRequest id.
         * @member {number} id
         * @memberof shakebook.GenTokenRequest
         * @instance
         */
        GenTokenRequest.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a GenTokenRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shakebook.GenTokenRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shakebook.GenTokenRequest} GenTokenRequest
         */
        GenTokenRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.shakebook.GenTokenRequest)
                return object;
            let message = new $root.shakebook.GenTokenRequest();
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
         * Creates a plain object from a GenTokenRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shakebook.GenTokenRequest
         * @static
         * @param {shakebook.GenTokenRequest} message GenTokenRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GenTokenRequest.toObject = function toObject(message, options) {
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
         * Converts this GenTokenRequest to JSON.
         * @function toJSON
         * @memberof shakebook.GenTokenRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GenTokenRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GenTokenRequest;
    })();

    shakebook.GenTokenResponse = (function() {

        /**
         * Properties of a GenTokenResponse.
         * @memberof shakebook
         * @interface IGenTokenResponse
         * @property {string|null} [G_TOKEN] GenTokenResponse G_TOKEN
         */

        /**
         * Constructs a new GenTokenResponse.
         * @memberof shakebook
         * @classdesc Represents a GenTokenResponse.
         * @implements IGenTokenResponse
         * @constructor
         * @param {shakebook.IGenTokenResponse=} [properties] Properties to set
         */
        function GenTokenResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GenTokenResponse G_TOKEN.
         * @member {string} G_TOKEN
         * @memberof shakebook.GenTokenResponse
         * @instance
         */
        GenTokenResponse.prototype.G_TOKEN = "";

        /**
         * Creates a GenTokenResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shakebook.GenTokenResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shakebook.GenTokenResponse} GenTokenResponse
         */
        GenTokenResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.shakebook.GenTokenResponse)
                return object;
            let message = new $root.shakebook.GenTokenResponse();
            if (object.G_TOKEN != null)
                message.G_TOKEN = String(object.G_TOKEN);
            return message;
        };

        /**
         * Creates a plain object from a GenTokenResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shakebook.GenTokenResponse
         * @static
         * @param {shakebook.GenTokenResponse} message GenTokenResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GenTokenResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.G_TOKEN = "";
            if (message.G_TOKEN != null && message.hasOwnProperty("G_TOKEN"))
                object.G_TOKEN = message.G_TOKEN;
            return object;
        };

        /**
         * Converts this GenTokenResponse to JSON.
         * @function toJSON
         * @memberof shakebook.GenTokenResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GenTokenResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GenTokenResponse;
    })();

    shakebook.VerifyResponse = (function() {

        /**
         * Properties of a VerifyResponse.
         * @memberof shakebook
         * @interface IVerifyResponse
         * @property {boolean|null} [valid] VerifyResponse valid
         */

        /**
         * Constructs a new VerifyResponse.
         * @memberof shakebook
         * @classdesc Represents a VerifyResponse.
         * @implements IVerifyResponse
         * @constructor
         * @param {shakebook.IVerifyResponse=} [properties] Properties to set
         */
        function VerifyResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VerifyResponse valid.
         * @member {boolean} valid
         * @memberof shakebook.VerifyResponse
         * @instance
         */
        VerifyResponse.prototype.valid = false;

        /**
         * Creates a VerifyResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shakebook.VerifyResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shakebook.VerifyResponse} VerifyResponse
         */
        VerifyResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.shakebook.VerifyResponse)
                return object;
            let message = new $root.shakebook.VerifyResponse();
            if (object.valid != null)
                message.valid = Boolean(object.valid);
            return message;
        };

        /**
         * Creates a plain object from a VerifyResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shakebook.VerifyResponse
         * @static
         * @param {shakebook.VerifyResponse} message VerifyResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VerifyResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.valid = false;
            if (message.valid != null && message.hasOwnProperty("valid"))
                object.valid = message.valid;
            return object;
        };

        /**
         * Converts this VerifyResponse to JSON.
         * @function toJSON
         * @memberof shakebook.VerifyResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VerifyResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return VerifyResponse;
    })();

    shakebook.AuthService = (function() {

        /**
         * Constructs a new AuthService service.
         * @memberof shakebook
         * @classdesc Represents an AuthService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function AuthService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (AuthService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AuthService;

        /**
         * Callback as used by {@link shakebook.AuthService#genToken}.
         * @memberof shakebook.AuthService
         * @typedef GenTokenCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {shakebook.GenTokenResponse} [response] GenTokenResponse
         */

        /**
         * Calls GenToken.
         * @function genToken
         * @memberof shakebook.AuthService
         * @instance
         * @param {shakebook.IGenTokenRequest} request GenTokenRequest message or plain object
         * @param {shakebook.AuthService.GenTokenCallback} callback Node-style callback called with the error, if any, and GenTokenResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AuthService.prototype.genToken = function genToken(request, callback) {
            return this.rpcCall(genToken, $root.shakebook.GenTokenRequest, $root.shakebook.GenTokenResponse, request, callback);
        }, "name", { value: "GenToken" });

        /**
         * Calls GenToken.
         * @function genToken
         * @memberof shakebook.AuthService
         * @instance
         * @param {shakebook.IGenTokenRequest} request GenTokenRequest message or plain object
         * @returns {Promise<shakebook.GenTokenResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link shakebook.AuthService#verifyToken}.
         * @memberof shakebook.AuthService
         * @typedef VerifyTokenCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {shakebook.VerifyResponse} [response] VerifyResponse
         */

        /**
         * Calls VerifyToken.
         * @function verifyToken
         * @memberof shakebook.AuthService
         * @instance
         * @param {shakebook.IGenTokenResponse} request GenTokenResponse message or plain object
         * @param {shakebook.AuthService.VerifyTokenCallback} callback Node-style callback called with the error, if any, and VerifyResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AuthService.prototype.verifyToken = function verifyToken(request, callback) {
            return this.rpcCall(verifyToken, $root.shakebook.GenTokenResponse, $root.shakebook.VerifyResponse, request, callback);
        }, "name", { value: "VerifyToken" });

        /**
         * Calls VerifyToken.
         * @function verifyToken
         * @memberof shakebook.AuthService
         * @instance
         * @param {shakebook.IGenTokenResponse} request GenTokenResponse message or plain object
         * @returns {Promise<shakebook.VerifyResponse>} Promise
         * @variation 2
         */

        return AuthService;
    })();

    return shakebook;
})();