import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import TaskNavigator from './navigation/TaskNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux'
import store from './store';


export default function App() {
  const [view, setview] = useState(false)

  const handleOnClick = () => {
    setview(true);
  }
  const Tab = createBottomTabNavigator();
  
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Tab.Screen name="Tasks" component={TaskNavigator} options={{headerShown:false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
