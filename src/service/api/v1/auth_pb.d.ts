import * as $protobuf from "protobufjs";
/** Namespace shakebook. */
export namespace shakebook {

    /** Properties of a GenTokenRequest. */
    interface IGenTokenRequest {

        /** GenTokenRequest id */
        id?: (number|null);
    }

    /** Represents a GenTokenRequest. */
    class GenTokenRequest implements IGenTokenRequest {

        /**
         * Constructs a new GenTokenRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: shakebook.IGenTokenRequest);

        /** GenTokenRequest id. */
        public id: number;

        /**
         * Creates a GenTokenRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GenTokenRequest
         */
        public static fromObject(object: { [k: string]: any }): shakebook.GenTokenRequest;

        /**
         * Creates a plain object from a GenTokenRequest message. Also converts values to other types if specified.
         * @param message GenTokenRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shakebook.GenTokenRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GenTokenRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GenTokenResponse. */
    interface IGenTokenResponse {

        /** GenTokenResponse G_TOKEN */
        G_TOKEN?: (string|null);
    }

    /** Represents a GenTokenResponse. */
    class GenTokenResponse implements IGenTokenResponse {

        /**
         * Constructs a new GenTokenResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: shakebook.IGenTokenResponse);

        /** GenTokenResponse G_TOKEN. */
        public G_TOKEN: string;

        /**
         * Creates a GenTokenResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GenTokenResponse
         */
        public static fromObject(object: { [k: string]: any }): shakebook.GenTokenResponse;

        /**
         * Creates a plain object from a GenTokenResponse message. Also converts values to other types if specified.
         * @param message GenTokenResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shakebook.GenTokenResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GenTokenResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VerifyResponse. */
    interface IVerifyResponse {

        /** VerifyResponse valid */
        valid?: (boolean|null);
    }

    /** Represents a VerifyResponse. */
    class VerifyResponse implements IVerifyResponse {

        /**
         * Constructs a new VerifyResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: shakebook.IVerifyResponse);

        /** VerifyResponse valid. */
        public valid: boolean;

        /**
         * Creates a VerifyResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VerifyResponse
         */
        public static fromObject(object: { [k: string]: any }): shakebook.VerifyResponse;

        /**
         * Creates a plain object from a VerifyResponse message. Also converts values to other types if specified.
         * @param message VerifyResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shakebook.VerifyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VerifyResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents an AuthService */
    class AuthService extends $protobuf.rpc.Service {

        /**
         * Constructs a new AuthService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Calls GenToken.
         * @param request GenTokenRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GenTokenResponse
         */
        public genToken(request: shakebook.IGenTokenRequest, callback: shakebook.AuthService.GenTokenCallback): void;

        /**
         * Calls GenToken.
         * @param request GenTokenRequest message or plain object
         * @returns Promise
         */
        public genToken(request: shakebook.IGenTokenRequest): Promise<shakebook.GenTokenResponse>;

        /**
         * Calls VerifyToken.
         * @param request GenTokenResponse message or plain object
         * @param callback Node-style callback called with the error, if any, and VerifyResponse
         */
        public verifyToken(request: shakebook.IGenTokenResponse, callback: shakebook.AuthService.VerifyTokenCallback): void;

        /**
         * Calls VerifyToken.
         * @param request GenTokenResponse message or plain object
         * @returns Promise
         */
        public verifyToken(request: shakebook.IGenTokenResponse): Promise<shakebook.VerifyResponse>;
    }

    namespace AuthService {

        /**
         * Callback as used by {@link shakebook.AuthService#genToken}.
         * @param error Error, if any
         * @param [response] GenTokenResponse
         */
        type GenTokenCallback = (error: (Error|null), response?: shakebook.GenTokenResponse) => void;

        /**
         * Callback as used by {@link shakebook.AuthService#verifyToken}.
         * @param error Error, if any
         * @param [response] VerifyResponse
         */
        type VerifyTokenCallback = (error: (Error|null), response?: shakebook.VerifyResponse) => void;
    }
}
