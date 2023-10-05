const dotenv = require("dotenv");
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../.env') });

// extract environment object from process
const envVars = process.env;

module.exports = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    sourceCredentials: {
        client_id: envVars.DRIVE_SOURCE_CREDENTIAL_CLIENT_ID,
        client_secret: envVars.DRIVE_SOURCE_CREDENTIAL_CLIENT_SECRET,
        redirect_url: envVars.DRIVE_SOURCE_CREDENTIAL_REDIRECT_URL,
        token: envVars.DRIVE_SOURCE_CREDENTIAL_TOKEN
    },
    destinationCredentials: {
        client_id: envVars.DRIVE_DESTINATION_CREDENTIAL_CLIENT_ID,
        client_secret: envVars.DRIVE_DESTINATION_CREDENTIAL_CLIENT_SECRET,
        redirect_url: envVars.DRIVE_DESTINATION_CREDENTIAL_REDIRECT_URL,
        token: envVars.DRIVE_DESTINATION_CREDENTIAL_TOKEN
    },
};
