import React from 'react'
import { 
    Text, 
    View, 
    StyleSheet, 
    TextInput, 
    Button, 
    TouchableOpacity,
    FlatList 
} from "react-native";

interface Props {
    item:any
    modalOpen:any
}

const Item: React.FC<Props> = ({item, modalOpen}) => {
    return (
        <TouchableOpacity onPress={() => modalOpen(item.id)} style={[styles.item]}>
            <Text>{item.title}</Text>
        </TouchableOpacity>  
    )
}

const styles = StyleSheet.create({
    item: {
        alignItems: "center",
        backgroundColor: "#CAF0BB",
        padding: 10,
        marginVertical: 10,
      }
})

export default Item
