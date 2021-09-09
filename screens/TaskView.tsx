import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const TaskView = ({navigation}) => {
    return (
        <View>
            <Text>Task View</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('New')}>
                <Text>New task</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Detail')}>
                <Text>Task Details</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TaskView
