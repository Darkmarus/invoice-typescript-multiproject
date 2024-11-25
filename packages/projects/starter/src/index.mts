import { initServer } from '@invoice/infrastructure';

/**
 * The main function that starts the server.
 *
 * @return {Promise<void>} A promise that resolves when the server has started.
 */
async function main() {
    initServer();
}

(() => {
    main();
})();
