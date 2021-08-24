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

function Input() {
    const [textInput, settextInput] = useState<string>("");
  const [DATA, setDATA] = useState<DATA[]>([]);
  const [modalVisible, setmodalVisible] = useState<boolean>(false);
  const [itemToDelete, setitemToDelete] = useState<DATA>();



  const handleOnChange = (t: string): void => settextInput(t);

  const handleOnClick = () => {
    let idprev = 0;
    if (DATA) {
      idprev = DATA.length + 1;
    }
    setDATA([
      ...DATA,
      {
        id: idprev.toString(),
        title: textInput,
      },
    ]);
    settextInput("");
  };

  const handleOnDelete = () => setDATA([]);

  const handleOnDeleteItem = (item: DATA) => {

  }

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
  return (
    <View style={styles.container}> 
        <View style={styles.containerInput}>
        <TextInput
            style={styles.textInput}
            placeholder="Escribe el Task"
            onChangeText={handleOnChange}
            value={textInput}
        />
        <Button title="ADD" onPress={handleOnClick} color="green" />
        <Button title="CLEAR" onPress={handleOnDelete} color="red" />
        </View>
        <View style={styles.itemContainer}>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        />
    </View>
    <ModalView modalVisible={modalVisible} modalClose={modalClose} deleteFun={deleteItem}/>
   </View> 
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
    },
  containerInput: {
    
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

export default Input;
