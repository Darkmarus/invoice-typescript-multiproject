import { Database } from 'config/database.mjs';
import { DataTypes, Model } from 'sequelize';

const sequelize = Database.instance;
export class ProductEntity extends Model {
    declare id: string;
    declare name: string;
    declare stock: number;
    declare price: number;
    declare enabled: boolean;
    declare readonly createdAt: Date;
    declare readonly updatedAt: Date;
}

export const ProductSequelize = sequelize.define<ProductEntity>(
    'products',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.TEXT,
        },
        stock: {
            type: DataTypes.INTEGER,
        },
        price: {
            type: DataTypes.REAL,
        },
        enabled: {
            type: DataTypes.BOOLEAN,
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    },
);
