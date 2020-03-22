const CONSTANTS = {};
CONSTANTS.ENDPOINT = {};

CONSTANTS.PORT = process.env.PORT || "3001";
CONSTANTS.ENDPOINT.LIST = "/list";
CONSTANTS.DB_URL = process.env.MONGODB_URI;


module.exports = CONSTANTS;
