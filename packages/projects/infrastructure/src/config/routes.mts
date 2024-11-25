import { Router } from 'express';

export class AppRoutes {
    static get routes(): Router {
        const router = Router();
        // router.use('/api/products', ProductRoutes.routes);
        // router.use('/api/categories');
        // router.use('/api/clients');
        // router.use('/api/sales');
        return router;
    }
}
