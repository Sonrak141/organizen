import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Image, Platform, TouchableOpacity } from 'react-native'
import { useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const HomeScreen = ({navigation}) => {

    const [dataLoaded] = useFonts({
        'open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('../../assets/fonts/OpenSans-ExtraBold.ttf'),
      })
    
      if (!dataLoaded) {
        return <AppLoading />
      }
    
        return (
            <View style={styles.homeContainer}>
                <Text style={styles.text}> OrganiZen </Text>
                <Image source={require('../../assets/images/logo.png')}/>
                <TouchableOpacity onPress={navigation} style={styles.btn}>
                    <Text style={styles.btnText}>Log In</Text>
                </TouchableOpacity>
               
            </View>
        )
    

}

const styles = StyleSheet.create({
    homeContainer: {
        backgroundColor: '#7E8F6D',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    text:{
        color: '#FAFFF5',
        fontSize:50,
        fontFamily: 'open-sans-bold'
    },
    btn:{
        backgroundColor: '#FAFFF5',
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 20,
        marginTop:80
        
    },
    btnText:{
        fontSize:25,
        color: '#656565'
    }
})

export default HomeScreen
