import React from "react";
import {Text,View,StyleSheet} from "react-native";


function Header() {
    return (
       <View style={style.header}>
           <Text style={style.title}>ORGANIZEN</Text>
       </View>    
    )
}

const style = StyleSheet.create({
    header: {
        backgroundColor: "green",
        paddingTop: 80,
        paddingLeft:30,
        paddingBottom:10,
        

    },
    title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25
        
        
        
    }
}) 

export default Header

