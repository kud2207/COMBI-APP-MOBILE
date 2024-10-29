import { type SQLiteDatabase } from 'expo-sqlite';

export async function migrateDbIfNeeded(db: SQLiteDatabase): Promise<void> {
    const DATABASE_VERSION = 1;

    try {
        // Vérifier si la table existe déjà
        const tableExists = await db.getFirstAsync<{ name: string }>(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='users'"
        );
        if (!tableExists) {
            await db.execAsync(`
            PRAGMA journal_mode = 'wal';
            CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            numeroTelephone TEXT UNIQUE NOT NULL,
            nom TEXT NOT NULL,
            sexe TEXT NOT NULL,
            hbd TEXT NOT NULL,
            password TEXT NOT NULL
            );`);
            console.log('Table users créée avec succès');
           
        
        } else {
            console.log('La table users existe déjà');
            // await db.execAsync("DROP TABLE users;");

        }

    } catch (error: any) {
        console.error("Erreur lors de la migration de la base de données :", error.message);
    }

    // Mettre à jour la version de la base de données
    await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}
