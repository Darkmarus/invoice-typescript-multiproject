import {
    INVOICE_DATABASE_HOST,
    INVOICE_DATABASE_NAME,
    INVOICE_DATABASE_PASSWORD,
    INVOICE_DATABASE_PORT,
    INVOICE_DATABASE_USER,
} from './system/envs.mjs';
import { Sequelize } from 'sequelize';

export class Database {
    private static _connect?: Sequelize;

    static get instance(): Sequelize {
        if (!this._connect) {
            try {
                this._connect = new Sequelize(INVOICE_DATABASE_NAME, INVOICE_DATABASE_USER, INVOICE_DATABASE_PASSWORD, {
                    dialect: 'postgres',
                    host: INVOICE_DATABASE_HOST,
                    port: INVOICE_DATABASE_PORT,
                    logging: (msg: string) => {
                        console.debug('connection postgres:', msg);
                    },
                    timezone: '-03:00',
                });
                console.log('Database connected Postgres');
            } catch (error) {
                console.error("Database can't connect", error);
                throw error;
            }
        }
        return this._connect as Sequelize;
    }
}
