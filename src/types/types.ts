//type to Login
import { StackNavigationProp } from '@react-navigation/stack';
type RootStackParamList = {
    LoginIn: undefined; 
    Register: undefined;
};

export type NavigationPropsRegister = StackNavigationProp<RootStackParamList, 'LoginIn'>;
export type NavigationPropsLoginIn = StackNavigationProp<RootStackParamList, 'Register'>;