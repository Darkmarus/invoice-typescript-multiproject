import { initServer } from '@invoice/presentation';

/**
 * The main function that starts the server.
 *
 * @return {Promise<void>} A promise that resolves when the server has started.
 */
async function main() {
    // Database.instance.sync().then(() => {
    initServer();
    // });
}

(() => {
    main();
})();
