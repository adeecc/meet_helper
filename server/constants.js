const CONSTANTS = {};
CONSTANTS.ENDPOINT = {};

CONSTANTS.PORT = process.env.PORT || "3001";
CONSTANTS.ENDPOINT.LIST = "/list";
CONSTANTS.DB_URL = "mongodb+srv://admin:admin@cluster0-xaizu.gcp.mongodb.net/meet_help?retryWrites=true&w=majority" || process.env.MONGODB_URI;


module.exports = CONSTANTS;
