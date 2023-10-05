const transferFileService = require("../service/transfer.file.service");

const transferFile = async (req, res) => {
    try {
        const sourceFileId = req.body.sourceFileId;
        const destinationFolderId = req.body.destinationFolderId;

        if (!sourceFileId || !destinationFolderId) {
            return res.status(400).json({ error: 'Missing sourceFileId or destinationFolderId' });
        }
        await transferFileService.transferFile(sourceFileId, destinationFolderId);
        res.status(200).send("File transfer successfully!");
    } catch (error) {
        res.status(500).json({ error: 'An error occurred during the operation' });
    }
};

module.exports = {
    transferFile
};