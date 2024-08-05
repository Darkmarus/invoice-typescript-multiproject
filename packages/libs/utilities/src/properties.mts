export class Properties {
    public static getString(key: string): string {
        return String(process.env[key]);
    }

    public static getNumber(key: string): number {
        return Number(process.env[key]);
    }
}
