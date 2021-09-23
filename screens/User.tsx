import React from 'react'
import { View, Text , StyleSheet } from 'react-native'

const User = () => {
    return (
        <View style={styles.align}>
            <Text>User Profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    align:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default User
