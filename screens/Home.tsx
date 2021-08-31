import React from 'react'
import {Text,View, StyleSheet} from 'react-native'
import HomeScreen from '../components/HomeScreen/HomeScreen'

function Home({change}) {
    return (
       <View style={styles.homeContainer}>
           <HomeScreen change={change}/>
       </View>
    )
}
const styles = StyleSheet.create({
    homeContainer: {
        
    }
})
export default Home
