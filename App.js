
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { Provider } from 'react-redux';
import { mystore } from './redux/store/store';
import DetaileScreen from './screens/DetaileScreen';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
   const Stack = createNativeStackNavigator()
   const screenOptions ={
    headerShown:false,
}
  return (
    <Provider store={mystore}>
         <NavigationContainer>
     <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
       <Stack.Screen name='Home' component={HomeScreen}/>
       <Stack.Screen name='detaile' component={DetaileScreen}/>
     </Stack.Navigator>
  
    </NavigationContainer>
    </Provider>
  );
}


