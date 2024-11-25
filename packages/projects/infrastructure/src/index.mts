import { PORT } from '@invoice-libs/utilities/envs';
import { AppRoutes } from './config/routes.mjs';
import { Server } from './config/server.mjs';
import { Database } from './persistence/database.mjs';

export async function initServer() {
    Database.instance.sync().then(() => {
        new Server({ port: PORT, routes: AppRoutes.routes }).start();
    });
}
