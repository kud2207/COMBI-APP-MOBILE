//creation de notre schema users pour sql
export const initializeDatabase = async function (db: any) {
    try {
        await db.execAsync(`
            PRAGMA journal_mode = WAL;
            CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nom TEXT NOT NULL,
            prenom TEXT NOT NULL,
            sexe TEXT NOT NULL,
            numeroTelephone TEXT UNIQUE NOT NULL,
            hbd TEXT NOT NULL,
            password TEXT NOT NULL
            );
            `);
            console.log('Databaseze initialised')
        
    } catch (error: any) {
        console.log('Error initializing SQLite', error.message);
    }
}
