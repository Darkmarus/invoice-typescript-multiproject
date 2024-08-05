import { PORT } from './config/envs.mjs';
import { AppRoutes } from './routes.mjs';
import { Server } from './server.mjs';

export async function initServer() {
    new Server({ port: PORT, routes: AppRoutes.routes }).start();
}
