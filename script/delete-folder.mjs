import fs from 'fs/promises';
import path from 'path';

export default async function deleteDistFolders(directory, folderName) {
    const items = await fs.readdir(directory, { withFileTypes: true });
    for (const item of items) {
        const fullPath = path.join(directory, item.name);
        if (item.isDirectory()) {
            if (item.name === folderName) {
                await fs.rm(fullPath, { recursive: true, force: true });
                console.log(`Deleted: ${fullPath}`);
            } else {
                await deleteDistFolders(fullPath, folderName);
            }
        } else if (item.name.includes('.tsbuildinfo')) {
            await fs.rm(fullPath, { recursive: true, force: true });
        }
    }
}
