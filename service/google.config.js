const config = require("../service/environment");
const { OAuth2Client } = require('google-auth-library');
const { google } = require('googleapis');


// Initialize OAuth2 clients for both source and destination Google Drives
const sourceAuth = new OAuth2Client({
    clientId: config.sourceCredentials.client_id,
    clientSecret: config.sourceCredentials.client_secret,
    redirectUri: config.sourceCredentials.redirect_url,
});
sourceAuth.setCredentials(config.sourceCredentials.token);

const destinationAuth = new OAuth2Client({
    clientId: config.destinationCredentials.client_id,
    clientSecret: config.destinationCredentials.client_secret,
    redirectUri: config.destinationCredentials.redirect_url,
});
destinationAuth.setCredentials(config.destinationCredentials.token);

// Initialize the Google Drive API clients
const sourceDrive = google.drive({ version: 'v3', auth: sourceAuth });
const destinationDrive = google.drive({ version: 'v3', auth: destinationAuth });

module.exports = {
    sourceDrive,
    destinationDrive
};