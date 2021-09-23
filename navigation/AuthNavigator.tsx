import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home'
import Signup from '../screens/Signup'
import Login from '../screens/Login'


const Stack = createStackNavigator();
const AuthNavigator = () => {
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>  
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Signup' component={Signup}/>
            
        </Stack.Navigator>
}
export default AuthNavigator
