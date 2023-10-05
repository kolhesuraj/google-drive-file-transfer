const { sourceDrive, destinationDrive } = require("../service/google.config");
const ApiError = require("../errorHandler/ApiError");


const transferFile = async (sourceFileId, destinationFolderId) => {
    // Get the video file metadata from the source Drive
    const sourceFile = await sourceDrive.files.get({ fileId: sourceFileId });

    // Create a readable stream to download the video file
    const sourceStream = sourceDrive.files.get({ fileId: sourceFileId, alt: 'media' }, { responseType: 'stream' });

    // Create a writable stream to upload the video file to the destination Drive
    const destinationStream = destinationDrive.files.create({
        requestBody: {
            name: sourceFile.data.name,
            parents: [destinationFolderId],
        },
        media: {
            mimeType: sourceFile.data.mimeType,
        },
    });

    // Pipe the sourceStream to the destinationStream, and handle events
    sourceStream.data
        .on('error', (err) => {
            console.error('Error downloading the video:', err);
            throw new ApiError(500, 'An error occurred during the operation');
        })
        .pipe(destinationStream.data)
        .on('error', (err) => {
            console.error('Error uploading the video:', err);
            throw new ApiError(500, 'An error occurred during the operation');
        })
        .on('finish', () => {
            console.log(`Video uploaded to destination Drive with ID: ${destinationStream.data.id}`);
            return;
        });
};

module.exports = {
    transferFile
};