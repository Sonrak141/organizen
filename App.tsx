import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import User from './screens/User'
import TaskNavigator from './navigation/TaskNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux'
import store from './store';
import {createStackNavigator} from '@react-navigation/stack'
import Home from './screens/Home'
import Signup from './screens/SignUp'
import Login from './screens/Login'


const Stack = createStackNavigator();


export default function App() {
  const [userLogin, setuserLogin] = useState(false)


  const Tab = createBottomTabNavigator();
  if (userLogin== true){
    return (
      <Provider store={store}>
        <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Tasks" component={TaskNavigator} options={{headerShown:false}}/>
          <Tab.Screen name="Profile" component={User} options={{headerShown:false}} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
    );
  }else{
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>  
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Signup' component={Signup}/>
            
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    
  },
});
