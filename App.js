import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { Provider } from 'react-redux';
import { mystore } from './redux/store/store';

export default function App() {
  return (
    <Provider store={mystore}>
    <HomeScreen/>
    </Provider>
  );
}


