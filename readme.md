# Google Drive API Interface

This Node.js API allows you to download a file from one Google Drive account and upload it to another Google Drive account. It uses the Google Drive API to facilitate these operations.

## Requirements

Before you can use this API, you need to have the following prerequisites:

1. **OAuth2 Credentials**: You must create OAuth2 credentials for both the source and destination Google Drive accounts. Follow the steps in the Google Developer Console to create OAuth2 credentials (client ID and client secret) [https://console.cloud.google.com/] and place it into .env file refer[env.example](./env.example).

2. **npm Packages**: Install the required npm packages by running the following command in your project directory:

   ```bash
   npm install express google-auth-library googleapis axios

### USAGE
1. Start server
node app.js

2. Api
method:- get
api:- '/api/transfer_file'
body:{
    sourceFileId:"source file id",
    destinationFolderId:"destination file id"
}