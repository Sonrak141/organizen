import React, {useEffect,useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import TaskList from '../components/TaskList/TaskList'
import { useSelector, useDispatch, connect } from 'react-redux';
import { RootState } from '../store';
import axios from 'axios';
import {URL_API} from '../constants/databas'



const TaskView = ({navigation}) => {
    const [Tareas, setTareas] = useState([])
    const dispatch = useDispatch();
    const tasks = useSelector((state: RootState) =>state.tasks.tasks)
    useEffect(() => {

        axios(
            'https://organizen-81cdc-default-rtdb.firebaseio.com/edades'
        )

        // .then((res)=> setTareas(res.data));
        .then((res)=> console.log(res));
    },[]) ;
    
    
    return (
        <View style={styles.taskView}>
            <View style={styles.buttons}>
                <TouchableOpacity onPress={()=>navigation.navigate('New')} style={styles.btn}>
                    <Text>New task</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Detail')}style={styles.btn}>
                    <Text>Task Details</Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={()=>console.log(tasks)}style={styles.btn}>
                    <Text>test</Text>
                </TouchableOpacity> 
            </View>
            <TaskList data={tasks}/>

        </View>
    )
}

const styles = StyleSheet.create({
    taskView: {
        backgroundColor:'#C5AC96',
        flex:1
    },
    buttons: {
        flexDirection: "row",
        justifyContent: 'center'
    },
    btn:{
        
        backgroundColor: "#FAFFF5",
        margin:20,
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:10
    }
})

export default TaskView
