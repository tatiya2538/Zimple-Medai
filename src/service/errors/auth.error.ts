export const authErrorService = {
  errorType: {
    //ALL
    BAD_REQUEST: { message: 'Bad Request', status: 400 },
    // AUTH
    AUTH_PASSWORD_INVALID: { message: 'Password Invalid', status: 400 },
    AUTH_INCORRECT_INVALID: { message: 'Incorrect Invalid', status: 400 },
    AUTH_TOKEN_INVALID: { message: 'Token Invalid', status: 401 },
    AUTH_TOKEN_EXPIRE: { message: 'Token Exprire', status: 401 },
    AUTH_REFRESH_TOKEN_EXPRIE: { message: 'Password Invalid', status: 441 },
    // USER
    USERNAME_DUP: { message: 'Username Dupplicated', status: 400 },
    NOT_FOUND_USERID: { message: 'Not Found UserId', status: 400 },
  },
};
