import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Notif from './notif';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import CustonBarButton from '../../components/home/CustonBarButton';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={(route)=>({headerShown: false,
        tabBarActiveTintColor:'#b66d20',
        tabBarStyle:styles.tabBarStyle,
        tabBarIcon:({color, size, focused}:any)=>{
            let iconName;
            if(route.route.name ==='Home'){
                iconName = focused ? "home" : "home-outline"
            } else if(route.route.name ==='Settings'){
                iconName = focused ? "settings" : "settings-outline"
            } else if(route.route.name ==='Notification'){
                iconName = focused ? "notifications-sharp" : "notifications-outline"
            } else if(route.route.name ==='chate'){
                iconName = focused ? "chatbubbles" : "chatbubbles-outline"
            }
            return <Icon name={iconName} size={22} color={color} />
        }

    })}>
      <Tab.Screen name="Home" component={Notif} 
        options={{
            tabBarButton: props => <CustonBarButton route="Home" {...props} />
        }}
      />
      <Tab.Screen name="Settings" component={Notif} />
      <Tab.Screen name="Notification" component={Notif} />
      <Tab.Screen name="chate" component={Notif} />

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    tabBarStyle:{  
        backgroundColor:'white',
        position: 'absolute',
        borderTopWidth:0,
        bottom:15,
        right:10,
        left:10
    }
})