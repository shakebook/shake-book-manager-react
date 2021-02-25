import * as $protobuf from "protobufjs";
/** Namespace shakebook. */
export namespace shakebook {

    /** Properties of a Response. */
    interface IResponse {

        /** Response error */
        error?: (string|null);

        /** Response code */
        code?: (number|null);

        /** Response message */
        message?: (string|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: shakebook.IResponse);

        /** Response error. */
        public error: string;

        /** Response code. */
        public code: number;

        /** Response message. */
        public message: string;

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Response
         */
        public static fromObject(object: { [k: string]: any }): shakebook.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shakebook.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UploadRequest. */
    interface IUploadRequest {

        /** UploadRequest file */
        file?: (Uint8Array|null);
    }

    /** Represents an UploadRequest. */
    class UploadRequest implements IUploadRequest {

        /**
         * Constructs a new UploadRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: shakebook.IUploadRequest);

        /** UploadRequest file. */
        public file: Uint8Array;

        /**
         * Creates an UploadRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UploadRequest
         */
        public static fromObject(object: { [k: string]: any }): shakebook.UploadRequest;

        /**
         * Creates a plain object from an UploadRequest message. Also converts values to other types if specified.
         * @param message UploadRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shakebook.UploadRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UploadRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents a FileService */
    class FileService extends $protobuf.rpc.Service {

        /**
         * Constructs a new FileService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Calls Upload.
         * @param request UploadRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Response
         */
        public upload(request: shakebook.IUploadRequest, callback: shakebook.FileService.UploadCallback): void;

        /**
         * Calls Upload.
         * @param request UploadRequest message or plain object
         * @returns Promise
         */
        public upload(request: shakebook.IUploadRequest): Promise<shakebook.Response>;
    }

    namespace FileService {

        /**
         * Callback as used by {@link shakebook.FileService#upload}.
         * @param error Error, if any
         * @param [response] Response
         */
        type UploadCallback = (error: (Error|null), response?: shakebook.Response) => void;
    }
}
