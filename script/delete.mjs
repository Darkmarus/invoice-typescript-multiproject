import parseCommandLineArguments from './command-arguments-parse.mjs';
import deleteDistFolders from './delete-folder.mjs';

const { path: directory, delete: deleteFilter } = parseCommandLineArguments();

if (!deleteFilter) {
    console.error('Usage: node deleteFolders.js <directory> <folder name>');
    process.exit(1);
}

deleteDistFolders(directory, deleteFilter)
    .then(() => {
        console.log('All specified folders deleted.');
        process.exit(0); // Asegura que el script termina exitosamente
    })
    .catch((err) => {
        console.error(err);
        process.exit(1); // Termina con error si hay una excepción
    });
