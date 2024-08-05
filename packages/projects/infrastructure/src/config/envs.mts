import { Properties } from '@invoice-libs/utilities/properties';

export const INVOICE_DATABASE_HOST = Properties.getString('INVOICE_DATABASE_HOST');
export const INVOICE_DATABASE_PORT = Properties.getNumber('INVOICE_DATABASE_PORT');
export const INVOICE_DATABASE_NAME = Properties.getString('INVOICE_DATABASE_NAME');
export const INVOICE_DATABASE_USER = Properties.getString('INVOICE_DATABASE_USER');
export const INVOICE_DATABASE_PASSWORD = Properties.getString('INVOICE_DATABASE_PASSWORD');
