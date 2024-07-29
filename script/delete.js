const { parseCommandLineArguments } = require('./command-arguments-parse');
const { deleteDistFolders } = require('./delete-folder');

const { path: directory, folder: folderName } = parseCommandLineArguments();

if (!folderName) {
    console.error('Usage: node deleteFolders.js <directory> <folder name>');
    process.exit(1);
}

deleteDistFolders(directory, folderName)
    .then(() => {
        console.log('All specified folders deleted.');
        process.exit(0); // Asegura que el script termina exitosamente
    })
    .catch((err) => {
        console.error(err);
        process.exit(1); // Termina con error si hay una excepción
    });
