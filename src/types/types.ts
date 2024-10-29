//type to Navigator
import { StackNavigationProp } from '@react-navigation/stack';
type RootStackParamList = {
    LoginIn: undefined; 
    Register: undefined;
    DrawerNavigator: undefined,
    addTache:undefined,
    tache: undefined
};

export type NavigationPropsRegister = StackNavigationProp<RootStackParamList, 'LoginIn'>;
export type NavigationPropsLoginIn = StackNavigationProp<RootStackParamList, 'Register'>;
export type NavigationPropsDrawerNavigator = StackNavigationProp<RootStackParamList, 'DrawerNavigator'>;
export type NavigationPropsAddTache = StackNavigationProp<RootStackParamList, 'addTache'>;
export type NavigationPropsTache = StackNavigationProp<RootStackParamList, 'tache'>;

//type Login

export type DataUser = {
    phoneNumber: string,
    name: string,
    secondName: string,
    password: string,
    confirmPassword: string,
}
