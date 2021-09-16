import React, {useState} from 'react'
import { 
    Text, 
    View, 
    StyleSheet, 
    TextInput, 
    Button, 
    TouchableOpacity,
    FlatList,
    CheckBox 
} from "react-native";
import { useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading'

interface Props {
    item:any
    modalOpen:any
}

const Item: React.FC<Props> = ({item, modalOpen}) => {
    console.log(item)
    const [done, setdone] = useState(false)
    const [dataLoaded] = useFonts({
        'open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
      })
    
      if (!dataLoaded) {
        return <AppLoading />
      }
    return (
        <TouchableOpacity onPress={() => modalOpen(item.id)} style={[styles.item]}>
            <View style={[styles.itemContainer]}>
            <Text style={[styles.text]}>{item.title}</Text>
            <CheckBox
          value={done}
          onValueChange={setdone}
          
        />
        </View>
        </TouchableOpacity>  
    )
}

const styles = StyleSheet.create({
    item: {
        alignItems: "center",
        backgroundColor: "#CAF0BB",
        padding: 10,
        marginVertical: 10,
      },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontFamily: 'open-sans-bold'
    }  

})

export default Item
