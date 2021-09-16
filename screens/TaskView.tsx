import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import TaskList from '../components/TaskList/TaskList'
import { useSelector, useDispatch, connect } from 'react-redux';
import { RootState } from '../store';



const TaskView = ({navigation}) => {
    const dispatch = useDispatch();
    const tasks = useSelector((state: RootState) =>state.tasks.tasks)
    
    return (
        <View>
             
            <TouchableOpacity onPress={()=>navigation.navigate('New')}>
                <Text>New task</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Detail')}>
                <Text>Task Details</Text>
            </TouchableOpacity> 
            <TaskList data={tasks}/>

        </View>
    )
}

export default TaskView
