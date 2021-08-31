import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Image } from 'react-native'
import { useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading'

function HomeScreen({change}) {

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
                <Button title="Nuevo Task" onPress={change} color='#C5AC96'/>
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
        color: 'white',
        fontSize:50,
        fontFamily: 'open-sans-bold'
    }
})

export default HomeScreen
