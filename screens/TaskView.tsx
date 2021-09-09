import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'


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
