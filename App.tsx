import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Home from './screens/Home';
import TaskNavigator from './navigation/TaskNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



export default function App() {
  const [view, setview] = useState(false)

  const handleOnClick = () => {
    setview(true);
  }
  const Tab = createBottomTabNavigator();
  
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Tab.Screen name="Tasks" component={TaskNavigator} options={{headerShown:false}}/>
    </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
