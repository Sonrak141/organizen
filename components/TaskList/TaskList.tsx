import React, { useState } from "react";
import { 
    Text, 
    View, 
    StyleSheet, 
    TextInput, 
    Button, 
    TouchableOpacity,
    FlatList 
} from "react-native";
import Item from "../Item/Item";
import ModalView from "../Modal/ModalView"

interface DATA {
    id: string;
    title: string;
  }

const TaskList = ({data}) => {
    const [DATA, setDATA] = useState<DATA[]>(data);
    const [modalVisible, setmodalVisible] = useState<boolean>(false);
    const [itemToDelete, setitemToDelete] = useState<DATA>();
    // console.log(DATA)
    const tasks=[
        {
            id: 'asda',
            title:'dasdasda'
        }
    ]
   

    const modalOpen = (id:string) => {
        setmodalVisible(true);
        setitemToDelete(DATA.find(item => item.id === id))
      }
      const modalClose = () => setmodalVisible(false);
    
      const deleteItem = () => {
        let id = ''
        itemToDelete? id = itemToDelete.id: null
        const newData = DATA.filter((item) => item.id !== id);
        setDATA(newData);
        setmodalVisible(false);
      }

      

    const renderItem = ({ item }: { item: DATA }) => {
        
        return <Item item={item} modalOpen={modalOpen}/>
      };
      if(DATA!==[]) {
          
        return(
         <View>
         <View style={styles.itemContainer}>
    <FlatList
    data={DATA}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
    />
    </View>
    <ModalView modalVisible={modalVisible} modalClose={modalClose} deleteFun={deleteItem}/>
    </View>
    
        )
    }else {
        return(
            <Text>No hay tasks en el momento</Text>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
    },
  containerInput: {
    marginTop:40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderColor: "grey",
    borderWidth: 2,
    width: 200,
    paddingHorizontal: 10,
  },
  itemContainer: {
    marginTop: 30,
  }
  
});
export default TaskList
