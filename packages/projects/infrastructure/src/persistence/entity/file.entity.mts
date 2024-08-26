import { DataTypes, Model } from 'sequelize';
import { Database } from '@invoice/infrastructure/persistence/database';

const sequelize = Database.instance;

export class FileEntity extends Model {
    declare id: string;
    declare name: string;
    declare path: string;
    declare type: string;
    declare size: number;
    declare isFolder: boolean;
    declare parentId: string;
    declare createdAt: Date;
    declare updatedAt: Date;
}

export const FileSequelize = sequelize.define<FileEntity>('files', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.TEXT,
    },
    path: {
        type: DataTypes.TEXT,
    },
    type: {
        type: DataTypes.TEXT,
    },
    size: {
        type: DataTypes.REAL,
    },
    isFolder: {
        type: DataTypes.BOOLEAN,
    },
    parentId: {
        type: DataTypes.UUID,
    },
    createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
    },
    updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
    },
});
