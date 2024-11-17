import { type SQLiteDatabase } from 'expo-sqlite';

export async function migrateDbIfNeeded(db: SQLiteDatabase): Promise<void> {
    const DATABASE_VERSION = 1;

    //USERS
    try {
        // Vérifier si la table users existe déjà
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
                );
            `);
            console.log('Table users créée avec succès');
        } else {
            //await db.execAsync("DROP TABLE users;");
            console.log('La table users existe déjà');
        }
    } catch (error: any) {
        console.error("Erreur lors de la migration de la base de données :", error.message);

    }


    //TASK
    try {
        // Vérifier si la table tasks existe déjà
        const tasksExists = await db.getFirstAsync<{ name: string }>(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='tasks'"
        );
        if (!tasksExists) {
            await db.execAsync(`
                PRAGMA journal_mode = 'wal';
                CREATE TABLE IF NOT EXISTS tasks (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    idUser TEXT,
                    taskName TEXT,
                    selectedCategories TEXT,
                    description TEXT,
                    selectedColors TEXT,
                    createdAt TEXT,
                    isChecked BOOLEAN DEFAULT 0, 
                    FOREIGN KEY(idUser) REFERENCES users(numeroTelephone)
                );
            `);
            console.log('Table tasks créée avec succès');
        } else {
           //await db.execAsync("DROP TABLE tasks;");
            console.log('La table tasks existe déjà');
        }
    } catch (error: any) {
        console.error("Erreur lors de la migration de la base de données :", error.message);
    }


    // Mettre à jour la version de la base de données
    await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}