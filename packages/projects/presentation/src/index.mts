import { PORT } from '@invoice-libs/utilities/envs';
import { AppRoutes } from '@invoice/presentation/routes';
import { Server } from '@invoice/presentation/server';

export async function initServer() {
    new Server({ port: PORT, routes: AppRoutes.routes }).start();
}
