class BaseError extends Error {
    constructor(name, statusCode, description, details) {
        super(description);
        this.name = name;
        this.statusCode = statusCode;
        this.description = description;
        this.details = details;



        Error.captureStackTrace(this, this.constructor);

    }
}

module.exports = BaseError;