function ApiError(statusCode, message = "Something went wrong", errors = [], stack = "") {
    const error = new Error(message);
    error.statusCode = statusCode;
    error.data = null;
    error.success = false;
    error.errors = errors;

    return error;
}

export { ApiError };
