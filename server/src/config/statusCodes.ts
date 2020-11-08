interface IStatusCode {
    ok: number;
    created: number;
    accepted: number;
    badRequest: number;
    unAuthorized: number;
    forbidden: number;
    notFound: number;
    internalError: number;
};

const statusCode = {
    ok: 200,
    created: 201,
    accepted: 202,
    badRequest: 400,
    unAuthorized: 401,
    forbidden: 403,
    notFound: 404,
    internalError: 500
} as IStatusCode;


export default statusCode;
