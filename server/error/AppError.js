class AppError extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }

    static badRequest(message) {
        return new AppError(404, message);
    }

    static forbidden(message) {
        return new AppError(403, message);
    }

    static internal(message) {
        return new AppError(500, message);
    }

    static unAuthorized(message) {
        return new AppError(401, message);
    }

}

module.exports = AppError;