import express, { Router } from 'express';

interface Options {
    port?: number;
    routes: Router;
}

export class Server {
    private readonly _app = express();
    private readonly _port: number;
    private readonly _routes: Router;

    /**
     * Constructor function for creating an instance of the class.
     *
     * @param {Options} options - The options object for configuring the instance.
     * @param {number} options.port - The port number to listen on. Default is 3000.
     * @param {string[]} options.routes - The array of routes for the instance.
     */
    constructor(options: Options) {
        const { port = 3000, routes } = options;
        this._port = port;
        this._routes = routes;
    }

    /**
     * Starts the server and listens on the specified port.
     *
     * @return {Promise<void>} - A promise that resolves when the server has started.
     */
    async start() {
        // Middlewares
        this._app.use(express.json());
        this._app.use(express.urlencoded({ extended: true }));

        // Routes
        this._app.use(this._routes);

        // Start server and listen on port
        this._app.listen(this._port, () => {
            console.log(`Server running on port ${3000}`);
        });
    }
}
