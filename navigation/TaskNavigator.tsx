import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import NewTask from '../screens/NewTask'
import TaskDetail from '../screens/TaskDetail'
import TaskView from '../screens/TaskView'
import Home from '../screens/Home'

const Stack = createStackNavigator();

const TaskNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home}/>    
            <Stack.Screen name='List' component={TaskView}/>
            <Stack.Screen name='New' component={NewTask}/>
            <Stack.Screen name='Detail' component={TaskDetail}/>
            
        </Stack.Navigator>
    </NavigationContainer>
)

export default TaskNavigator

