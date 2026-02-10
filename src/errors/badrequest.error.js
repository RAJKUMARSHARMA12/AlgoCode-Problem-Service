const BaseError = require("./BaseError");
const {StatusCodes} = require("http-status-codes");

class BadRequest extends BaseError {   
   constructor(propertyName){
    super("Bad Request", StatusCodes.BAD_REQUEST, `Invalid value for ${propertyName} provided`);
   }
}

module.exports = BadRequest;