const {
    ValidationError,
    NotFoundError,
    DBError,
    UniqueViolationError,
    NotNullViolationError,
    ForeignKeyViolationError,
    CheckViolationError,
    DataError,
} = require('objection');

const errorHandler = (err, req, res, next) => {
    const {statusCode = 500, message = 'Server Error', type = 'UnknowError'} = err;

    let error = {...err};
    error.statusCode = statusCode;
    error.type = type;
    error.message = message;

    if (err instanceof ValidationError) {
        error.statusCode = 400;

        switch (err.type) {
            case 'ModelValidation':
                error.message = error.data;
                break;
            case 'RelationExpression':
                break;
            case 'UnallowedRelation':
                break;
            case 'InvalidGraph':
                break;
            default:
                error.type = 'UnknownValidationError';
        }
    } else if (err instanceof NotFoundError) {
        error.statusCode = 404;
        error.message = 'Resource not found';
        error.type = 'NotFound';
    } else if (err instanceof UniqueViolationError) {
        error.statusCode = 409;
    } else if (err instanceof NotNullViolationError) {
    } else if (err instanceof ForeignKeyViolationError) {
        error.statusCode = 409;
    } else if (err instanceof CheckViolationError) {
    } else if (err instanceof DataError) {
        error.type = 'InvalidData';
    } else if (err instanceof DBError) {
        error.statusCode = 500;
        error.type = 'UnknownDatabaseError';
    }

    res.status(error.statusCode).json({
        success: false,
        type: error.type,
        error: error.message,
    });
};

module.exports = errorHandler;
