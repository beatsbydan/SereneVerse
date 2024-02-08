const status = require("http-status");

module.exports = class ResourceNotFoundError extends Error {
    statusCode = status.NOT_FOUND
    name = "RESOURCE_NOT_FOUND_ERROR"

    constructor(message){
        super(message || "Resource Not Found")
    }
}