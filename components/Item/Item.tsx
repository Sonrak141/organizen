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

interface Props {
    item:any
    modalOpen:any
}

const Item: React.FC<Props> = ({item, modalOpen}) => {
    const [done, setdone] = useState(false)
    return (
        <TouchableOpacity onPress={() => modalOpen(item.id)} style={[styles.item]}>
            <View style={[styles.itemContainer]}>
            <Text>{item.title}</Text>
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
    }  

})

export default Item
