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
    
        <Stack.Navigator initialRouteName='List'>  
            <Stack.Screen name='List' component={TaskView} />
            <Stack.Screen name='New' component={NewTask}/>
            <Stack.Screen name='Detail' component={TaskDetail}/>
            
        </Stack.Navigator>
    
)

export default TaskNavigator

