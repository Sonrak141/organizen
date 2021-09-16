import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Input from '../components/Input/Input'

const NewTask = () => {
    return (
        <View style={styles.container}>
            <Input/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#C5AC96',
        flex: 1,
    }
})

export default NewTask
