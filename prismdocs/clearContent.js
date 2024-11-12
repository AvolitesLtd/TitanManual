const fs = require('fs');
const path = require('path');

// Define the main folders and subfolders
const mainFolders = ['prism', 'zero', 'player'];
const subFolders = ['encoder', 'play', 'quick-start', 'settings', 'stage'];

// Loop through each main folder
mainFolders.forEach(mainFolder => {
    // Construct the path for each main folder
    const mainFolderPath = path.join(__dirname, mainFolder);

    // Loop through each subfolder to delete
    subFolders.forEach(subFolder => {
        // Construct the path for each subfolder
        const subFolderPath = path.join(mainFolderPath, subFolder);

        // Delete the subfolder
        fs.rm(subFolderPath, { recursive: true, force: true }, (err) => {
            if (err) {
                console.error(`Error while deleting ${subFolderPath}:`, err);
            } 
        });
    });
});