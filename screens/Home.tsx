import React from 'react'
import {Text,View, StyleSheet} from 'react-native'
import HomeScreen from '../components/HomeScreen/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

function Home(this: any, {navigation}) {
    
    return (
       <View style={styles.homeContainer}>
           <HomeScreen navigation={navigation}/>
       </View>
    )
}
const styles = StyleSheet.create({
    homeContainer: {
        
    }
})
export default Home
