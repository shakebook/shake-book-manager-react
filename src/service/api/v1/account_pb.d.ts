import * as $protobuf from "protobufjs";
/** Namespace shakebook. */
export namespace shakebook {

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
        constructor(properties?: shakebook.IResponse);

        /** Response success. */
        public success: boolean;

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

    /** Properties of an EmptyRequest. */
    interface IEmptyRequest {
    }

    /** Represents an EmptyRequest. */
    class EmptyRequest implements IEmptyRequest {

        /**
         * Constructs a new EmptyRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: shakebook.IEmptyRequest);

        /**
         * Creates an EmptyRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EmptyRequest
         */
        public static fromObject(object: { [k: string]: any }): shakebook.EmptyRequest;

        /**
         * Creates a plain object from an EmptyRequest message. Also converts values to other types if specified.
         * @param message EmptyRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shakebook.EmptyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EmptyRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SignUpRequest. */
    interface ISignUpRequest {

        /** SignUpRequest accountName */
        accountName?: (string|null);

        /** SignUpRequest accountEmail */
        accountEmail?: (string|null);

        /** SignUpRequest accountPassword */
        accountPassword?: (string|null);

        /** SignUpRequest emailValidCode */
        emailValidCode?: (string|null);
    }

    /** Represents a SignUpRequest. */
    class SignUpRequest implements ISignUpRequest {

        /**
         * Constructs a new SignUpRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: shakebook.ISignUpRequest);

        /** SignUpRequest accountName. */
        public accountName: string;

        /** SignUpRequest accountEmail. */
        public accountEmail: string;

        /** SignUpRequest accountPassword. */
        public accountPassword: string;

        /** SignUpRequest emailValidCode. */
        public emailValidCode: string;

        /**
         * Creates a SignUpRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignUpRequest
         */
        public static fromObject(object: { [k: string]: any }): shakebook.SignUpRequest;

        /**
         * Creates a plain object from a SignUpRequest message. Also converts values to other types if specified.
         * @param message SignUpRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shakebook.SignUpRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignUpRequest to JSON.
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
        constructor(properties?: shakebook.IAccountId);

        /** AccountId id. */
        public id: number;

        /**
         * Creates an AccountId message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountId
         */
        public static fromObject(object: { [k: string]: any }): shakebook.AccountId;

        /**
         * Creates a plain object from an AccountId message. Also converts values to other types if specified.
         * @param message AccountId
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shakebook.AccountId, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountId to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SignInRequest. */
    interface ISignInRequest {

        /** SignInRequest accountName */
        accountName?: (string|null);

        /** SignInRequest accountPassword */
        accountPassword?: (string|null);
    }

    /** Represents a SignInRequest. */
    class SignInRequest implements ISignInRequest {

        /**
         * Constructs a new SignInRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: shakebook.ISignInRequest);

        /** SignInRequest accountName. */
        public accountName: string;

        /** SignInRequest accountPassword. */
        public accountPassword: string;

        /**
         * Creates a SignInRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignInRequest
         */
        public static fromObject(object: { [k: string]: any }): shakebook.SignInRequest;

        /**
         * Creates a plain object from a SignInRequest message. Also converts values to other types if specified.
         * @param message SignInRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shakebook.SignInRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignInRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SignInResponse. */
    interface ISignInResponse {

        /** SignInResponse success */
        success?: (boolean|null);

        /** SignInResponse message */
        message?: (string|null);

        /** SignInResponse data */
        data?: (string|null);
    }

    /** Represents a SignInResponse. */
    class SignInResponse implements ISignInResponse {

        /**
         * Constructs a new SignInResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: shakebook.ISignInResponse);

        /** SignInResponse success. */
        public success: boolean;

        /** SignInResponse message. */
        public message: string;

        /** SignInResponse data. */
        public data: string;

        /**
         * Creates a SignInResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignInResponse
         */
        public static fromObject(object: { [k: string]: any }): shakebook.SignInResponse;

        /**
         * Creates a plain object from a SignInResponse message. Also converts values to other types if specified.
         * @param message SignInResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shakebook.SignInResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignInResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** AccountStatus enum. */
    enum AccountStatus {
        NORMAL = 0,
        DISABLE = 1,
        LOCK = 2,
        DELETE = 3
    }

    /** Properties of an UpdateAccountDescriptRequest. */
    interface IUpdateAccountDescriptRequest {

        /** UpdateAccountDescriptRequest accountNickname */
        accountNickname?: (string|null);

        /** UpdateAccountDescriptRequest accountName */
        accountName?: (string|null);

        /** UpdateAccountDescriptRequest accountDesc */
        accountDesc?: (string|null);
    }

    /** Represents an UpdateAccountDescriptRequest. */
    class UpdateAccountDescriptRequest implements IUpdateAccountDescriptRequest {

        /**
         * Constructs a new UpdateAccountDescriptRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: shakebook.IUpdateAccountDescriptRequest);

        /** UpdateAccountDescriptRequest accountNickname. */
        public accountNickname: string;

        /** UpdateAccountDescriptRequest accountName. */
        public accountName: string;

        /** UpdateAccountDescriptRequest accountDesc. */
        public accountDesc: string;

        /**
         * Creates an UpdateAccountDescriptRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateAccountDescriptRequest
         */
        public static fromObject(object: { [k: string]: any }): shakebook.UpdateAccountDescriptRequest;

        /**
         * Creates a plain object from an UpdateAccountDescriptRequest message. Also converts values to other types if specified.
         * @param message UpdateAccountDescriptRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shakebook.UpdateAccountDescriptRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateAccountDescriptRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Account. */
    interface IAccount {

        /** Account info */
        info?: (shakebook.IAccountInfo|null);

        /** Account accountPassword */
        accountPassword?: (string|null);
    }

    /** Represents an Account. */
    class Account implements IAccount {

        /**
         * Constructs a new Account.
         * @param [properties] Properties to set
         */
        constructor(properties?: shakebook.IAccount);

        /** Account info. */
        public info?: (shakebook.IAccountInfo|null);

        /** Account accountPassword. */
        public accountPassword: string;

        /**
         * Creates an Account message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Account
         */
        public static fromObject(object: { [k: string]: any }): shakebook.Account;

        /**
         * Creates a plain object from an Account message. Also converts values to other types if specified.
         * @param message Account
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shakebook.Account, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Account to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ValidEmailRequest. */
    interface IValidEmailRequest {

        /** ValidEmailRequest accountEmail */
        accountEmail?: (string|null);
    }

    /** Represents a ValidEmailRequest. */
    class ValidEmailRequest implements IValidEmailRequest {

        /**
         * Constructs a new ValidEmailRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: shakebook.IValidEmailRequest);

        /** ValidEmailRequest accountEmail. */
        public accountEmail: string;

        /**
         * Creates a ValidEmailRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ValidEmailRequest
         */
        public static fromObject(object: { [k: string]: any }): shakebook.ValidEmailRequest;

        /**
         * Creates a plain object from a ValidEmailRequest message. Also converts values to other types if specified.
         * @param message ValidEmailRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shakebook.ValidEmailRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ValidEmailRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetAccountResponse. */
    interface IGetAccountResponse {

        /** GetAccountResponse success */
        success?: (boolean|null);

        /** GetAccountResponse message */
        message?: (string|null);

        /** GetAccountResponse data */
        data?: (shakebook.IAccountInfo|null);
    }

    /** Represents a GetAccountResponse. */
    class GetAccountResponse implements IGetAccountResponse {

        /**
         * Constructs a new GetAccountResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: shakebook.IGetAccountResponse);

        /** GetAccountResponse success. */
        public success: boolean;

        /** GetAccountResponse message. */
        public message: string;

        /** GetAccountResponse data. */
        public data?: (shakebook.IAccountInfo|null);

        /**
         * Creates a GetAccountResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetAccountResponse
         */
        public static fromObject(object: { [k: string]: any }): shakebook.GetAccountResponse;

        /**
         * Creates a plain object from a GetAccountResponse message. Also converts values to other types if specified.
         * @param message GetAccountResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shakebook.GetAccountResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetAccountResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccountInfo. */
    interface IAccountInfo {

        /** AccountInfo id */
        id?: (number|null);

        /** AccountInfo accountName */
        accountName?: (string|null);

        /** AccountInfo accountPhone */
        accountPhone?: (string|null);

        /** AccountInfo accountEmail */
        accountEmail?: (string|null);

        /** AccountInfo signupAt */
        signupAt?: (string|null);

        /** AccountInfo lastTime */
        lastTime?: (string|null);

        /** AccountInfo accountStatus */
        accountStatus?: (shakebook.AccountStatus|null);

        /** AccountInfo imageUrl */
        imageUrl?: (string|null);

        /** AccountInfo backgroundUrl */
        backgroundUrl?: (string|null);

        /** AccountInfo accountDesc */
        accountDesc?: (string|null);

        /** AccountInfo thumbsUp */
        thumbsUp?: (number|null);

        /** AccountInfo focusNumber */
        focusNumber?: (number|null);

        /** AccountInfo fansNumber */
        fansNumber?: (number|null);

        /** AccountInfo accountNickname */
        accountNickname?: (string|null);
    }

    /** Represents an AccountInfo. */
    class AccountInfo implements IAccountInfo {

        /**
         * Constructs a new AccountInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: shakebook.IAccountInfo);

        /** AccountInfo id. */
        public id: number;

        /** AccountInfo accountName. */
        public accountName: string;

        /** AccountInfo accountPhone. */
        public accountPhone: string;

        /** AccountInfo accountEmail. */
        public accountEmail: string;

        /** AccountInfo signupAt. */
        public signupAt: string;

        /** AccountInfo lastTime. */
        public lastTime: string;

        /** AccountInfo accountStatus. */
        public accountStatus: shakebook.AccountStatus;

        /** AccountInfo imageUrl. */
        public imageUrl: string;

        /** AccountInfo backgroundUrl. */
        public backgroundUrl: string;

        /** AccountInfo accountDesc. */
        public accountDesc: string;

        /** AccountInfo thumbsUp. */
        public thumbsUp: number;

        /** AccountInfo focusNumber. */
        public focusNumber: number;

        /** AccountInfo fansNumber. */
        public fansNumber: number;

        /** AccountInfo accountNickname. */
        public accountNickname: string;

        /**
         * Creates an AccountInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountInfo
         */
        public static fromObject(object: { [k: string]: any }): shakebook.AccountInfo;

        /**
         * Creates a plain object from an AccountInfo message. Also converts values to other types if specified.
         * @param message AccountInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shakebook.AccountInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetAccountListResponse. */
    interface IGetAccountListResponse {

        /** GetAccountListResponse success */
        success?: (boolean|null);

        /** GetAccountListResponse message */
        message?: (string|null);

        /** GetAccountListResponse data */
        data?: (shakebook.IAccountInfo[]|null);
    }

    /** Represents a GetAccountListResponse. */
    class GetAccountListResponse implements IGetAccountListResponse {

        /**
         * Constructs a new GetAccountListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: shakebook.IGetAccountListResponse);

        /** GetAccountListResponse success. */
        public success: boolean;

        /** GetAccountListResponse message. */
        public message: string;

        /** GetAccountListResponse data. */
        public data: shakebook.IAccountInfo[];

        /**
         * Creates a GetAccountListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetAccountListResponse
         */
        public static fromObject(object: { [k: string]: any }): shakebook.GetAccountListResponse;

        /**
         * Creates a plain object from a GetAccountListResponse message. Also converts values to other types if specified.
         * @param message GetAccountListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shakebook.GetAccountListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetAccountListResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents an AccountService */
    class AccountService extends $protobuf.rpc.Service {

        /**
         * Constructs a new AccountService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Calls SignUp.
         * @param request SignUpRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Response
         */
        public signUp(request: shakebook.ISignUpRequest, callback: shakebook.AccountService.SignUpCallback): void;

        /**
         * Calls SignUp.
         * @param request SignUpRequest message or plain object
         * @returns Promise
         */
        public signUp(request: shakebook.ISignUpRequest): Promise<shakebook.Response>;

        /**
         * Calls SignIn.
         * @param request SignInRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SignInResponse
         */
        public signIn(request: shakebook.ISignInRequest, callback: shakebook.AccountService.SignInCallback): void;

        /**
         * Calls SignIn.
         * @param request SignInRequest message or plain object
         * @returns Promise
         */
        public signIn(request: shakebook.ISignInRequest): Promise<shakebook.SignInResponse>;

        /**
         * Calls SignOut.
         * @param request AccountId message or plain object
         * @param callback Node-style callback called with the error, if any, and Response
         */
        public signOut(request: shakebook.IAccountId, callback: shakebook.AccountService.SignOutCallback): void;

        /**
         * Calls SignOut.
         * @param request AccountId message or plain object
         * @returns Promise
         */
        public signOut(request: shakebook.IAccountId): Promise<shakebook.Response>;

        /**
         * Calls ValidEmail.
         * @param request ValidEmailRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Response
         */
        public validEmail(request: shakebook.IValidEmailRequest, callback: shakebook.AccountService.ValidEmailCallback): void;

        /**
         * Calls ValidEmail.
         * @param request ValidEmailRequest message or plain object
         * @returns Promise
         */
        public validEmail(request: shakebook.IValidEmailRequest): Promise<shakebook.Response>;

        /**
         * Calls UpdateAccountDescript.
         * @param request UpdateAccountDescriptRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Response
         */
        public updateAccountDescript(request: shakebook.IUpdateAccountDescriptRequest, callback: shakebook.AccountService.UpdateAccountDescriptCallback): void;

        /**
         * Calls UpdateAccountDescript.
         * @param request UpdateAccountDescriptRequest message or plain object
         * @returns Promise
         */
        public updateAccountDescript(request: shakebook.IUpdateAccountDescriptRequest): Promise<shakebook.Response>;

        /**
         * Calls GetAccount.
         * @param request EmptyRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetAccountResponse
         */
        public getAccount(request: shakebook.IEmptyRequest, callback: shakebook.AccountService.GetAccountCallback): void;

        /**
         * Calls GetAccount.
         * @param request EmptyRequest message or plain object
         * @returns Promise
         */
        public getAccount(request: shakebook.IEmptyRequest): Promise<shakebook.GetAccountResponse>;

        /**
         * Calls GetAccountList.
         * @param request EmptyRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetAccountListResponse
         */
        public getAccountList(request: shakebook.IEmptyRequest, callback: shakebook.AccountService.GetAccountListCallback): void;

        /**
         * Calls GetAccountList.
         * @param request EmptyRequest message or plain object
         * @returns Promise
         */
        public getAccountList(request: shakebook.IEmptyRequest): Promise<shakebook.GetAccountListResponse>;
    }

    namespace AccountService {

        /**
         * Callback as used by {@link shakebook.AccountService#signUp}.
         * @param error Error, if any
         * @param [response] Response
         */
        type SignUpCallback = (error: (Error|null), response?: shakebook.Response) => void;

        /**
         * Callback as used by {@link shakebook.AccountService#signIn}.
         * @param error Error, if any
         * @param [response] SignInResponse
         */
        type SignInCallback = (error: (Error|null), response?: shakebook.SignInResponse) => void;

        /**
         * Callback as used by {@link shakebook.AccountService#signOut}.
         * @param error Error, if any
         * @param [response] Response
         */
        type SignOutCallback = (error: (Error|null), response?: shakebook.Response) => void;

        /**
         * Callback as used by {@link shakebook.AccountService#validEmail}.
         * @param error Error, if any
         * @param [response] Response
         */
        type ValidEmailCallback = (error: (Error|null), response?: shakebook.Response) => void;

        /**
         * Callback as used by {@link shakebook.AccountService#updateAccountDescript}.
         * @param error Error, if any
         * @param [response] Response
         */
        type UpdateAccountDescriptCallback = (error: (Error|null), response?: shakebook.Response) => void;

        /**
         * Callback as used by {@link shakebook.AccountService#getAccount}.
         * @param error Error, if any
         * @param [response] GetAccountResponse
         */
        type GetAccountCallback = (error: (Error|null), response?: shakebook.GetAccountResponse) => void;

        /**
         * Callback as used by {@link shakebook.AccountService#getAccountList}.
         * @param error Error, if any
         * @param [response] GetAccountListResponse
         */
        type GetAccountListCallback = (error: (Error|null), response?: shakebook.GetAccountListResponse) => void;
    }
}
