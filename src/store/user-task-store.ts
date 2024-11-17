import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSQLiteContext } from "expo-sqlite";
import { create } from "zustand";

type Task = {
    createdAt: string;
    description: string;
    id: number;
    idUser: string;
    selectedCategories: string;
    selectedColors: string;
    taskName: string;
    isChecked: number;
};

type TaskStore = {
    tasks: Task[];
    getUserTasks: () => Promise<void>;
};

export const userTaskStore = create<TaskStore & { loading: boolean }>((set) => ({
    tasks: [    {
        createdAt: "2024-01-01",
        description: "Description de la tâche",
        id: 1,
        idUser: "12345",
        selectedCategories: "Catégorie",
        selectedColors: "Couleur",
        taskName: "Tâche de test",
        isChecked: 0
    }],
    loading: false,  // Ajout de l'état de chargement
    getUserTasks: async () => {
        set({ loading: true });  // Mettre à jour l'état à "true" lorsqu'on commence à charger les données

        const db = useSQLiteContext();
        const storageNumberUser = await AsyncStorage.getItem('number');
        
        try {
            if (storageNumberUser !== null) {
                console.log("Numéro utilisateur trouvé dans AsyncStorage:", storageNumberUser);

                const userTasks = await db.getAllSync(
                    'SELECT tasks.* FROM users INNER JOIN tasks ON users.numeroTelephone = tasks.idUser',
                    [storageNumberUser]
                );

                console.log("Tâches récupérées depuis la base de données SQLite:", userTasks);

                // Conversion du résultat en tableau d'objets Task
                const recupValueSQLite = JSON.parse(JSON.stringify(userTasks)) as Task[];

                set({ tasks: recupValueSQLite });
                console.log("État des tâches mis à jour dans le store:", recupValueSQLite);
            }
        } catch (error: any) {
            console.log('Erreur lors de la récupération des tâches:', error.message);
        }

        set({ loading: false });  // Une fois les données chargées, mettez l'état à "false"
    }
}));
