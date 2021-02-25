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
         * @property {string|null} [error] Response error
         * @property {number|null} [code] Response code
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
         * Response error.
         * @member {string} error
         * @memberof shakebook.Response
         * @instance
         */
        Response.prototype.error = "";

        /**
         * Response code.
         * @member {number} code
         * @memberof shakebook.Response
         * @instance
         */
        Response.prototype.code = 0;

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
            if (object.error != null)
                message.error = String(object.error);
            if (object.code != null)
                message.code = object.code | 0;
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
                object.error = "";
                object.code = 0;
                object.message = "";
            }
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = message.error;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
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

    shakebook.UploadRequest = (function() {

        /**
         * Properties of an UploadRequest.
         * @memberof shakebook
         * @interface IUploadRequest
         * @property {Uint8Array|null} [file] UploadRequest file
         */

        /**
         * Constructs a new UploadRequest.
         * @memberof shakebook
         * @classdesc Represents an UploadRequest.
         * @implements IUploadRequest
         * @constructor
         * @param {shakebook.IUploadRequest=} [properties] Properties to set
         */
        function UploadRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UploadRequest file.
         * @member {Uint8Array} file
         * @memberof shakebook.UploadRequest
         * @instance
         */
        UploadRequest.prototype.file = $util.newBuffer([]);

        /**
         * Creates an UploadRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shakebook.UploadRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shakebook.UploadRequest} UploadRequest
         */
        UploadRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.shakebook.UploadRequest)
                return object;
            let message = new $root.shakebook.UploadRequest();
            if (object.file != null)
                if (typeof object.file === "string")
                    $util.base64.decode(object.file, message.file = $util.newBuffer($util.base64.length(object.file)), 0);
                else if (object.file.length)
                    message.file = object.file;
            return message;
        };

        /**
         * Creates a plain object from an UploadRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shakebook.UploadRequest
         * @static
         * @param {shakebook.UploadRequest} message UploadRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UploadRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.file = "";
                else {
                    object.file = [];
                    if (options.bytes !== Array)
                        object.file = $util.newBuffer(object.file);
                }
            if (message.file != null && message.hasOwnProperty("file"))
                object.file = options.bytes === String ? $util.base64.encode(message.file, 0, message.file.length) : options.bytes === Array ? Array.prototype.slice.call(message.file) : message.file;
            return object;
        };

        /**
         * Converts this UploadRequest to JSON.
         * @function toJSON
         * @memberof shakebook.UploadRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UploadRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UploadRequest;
    })();

    shakebook.FileService = (function() {

        /**
         * Constructs a new FileService service.
         * @memberof shakebook
         * @classdesc Represents a FileService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function FileService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (FileService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = FileService;

        /**
         * Callback as used by {@link shakebook.FileService#upload}.
         * @memberof shakebook.FileService
         * @typedef UploadCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {shakebook.Response} [response] Response
         */

        /**
         * Calls Upload.
         * @function upload
         * @memberof shakebook.FileService
         * @instance
         * @param {shakebook.IUploadRequest} request UploadRequest message or plain object
         * @param {shakebook.FileService.UploadCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(FileService.prototype.upload = function upload(request, callback) {
            return this.rpcCall(upload, $root.shakebook.UploadRequest, $root.shakebook.Response, request, callback);
        }, "name", { value: "Upload" });

        /**
         * Calls Upload.
         * @function upload
         * @memberof shakebook.FileService
         * @instance
         * @param {shakebook.IUploadRequest} request UploadRequest message or plain object
         * @returns {Promise<shakebook.Response>} Promise
         * @variation 2
         */

        return FileService;
    })();

    return shakebook;
})();