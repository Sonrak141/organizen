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
import {useDispatch, useSelector} from 'react-redux'
import { addItem } from "../../store/actions/Task.action";
import { RootState } from '../../store';


interface DATA {
  id: string;
  title: string;
}

function Input() {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) =>state.tasks.tasks)
  const [textInput, settextInput] = useState<string>("");
  const [DATA, setDATA] = useState({});
  const [modalVisible, setmodalVisible] = useState<boolean>(false);
  const [itemToDelete, setitemToDelete] = useState<DATA>();
  const [input, setinput] = useState(false)



  const handleOnChange = (t: string): void => settextInput(t);

  const handleOnClick = async () => {
  
    let idprev = tasks.length + 1;
    
    await setDATA([
      {
        itemID: idprev.toString(),
        title: textInput,
      }]
    )
    
    await dispatch(addItem(DATA));
    await console.log(DATA)
    settextInput("");
    setinput(false)
    console.log(tasks)
  };

  



  const modalOpen = (id:string) => {
    setmodalVisible(true);
    // setitemToDelete(DATA.find(item => item.id === id))
  }

  const handleNewTask = () => {
    setinput(true)
  }



  const renderItem = ({ item }: { item: DATA }) => {
    
    return <Item item={item} modalOpen={modalOpen}/>
  };
  return (
    <View style={styles.container}> 
      <TextInput
            style={styles.textInput}
            placeholder="Escribe el Task"
            placeholderTextColor="black"
            onChangeText={handleOnChange}
            value={textInput}
        />
        <Button title="ADD" onPress={handleOnClick} color="#FAFFF5" />
        
        </View>
       
   
  );
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
    borderColor: "#CCDBBD",
    borderWidth: 2,
    width: 300,
    paddingHorizontal: 10,
    backgroundColor:'#CCDBBD',
    alignSelf: "center",
    height: 50,
    borderRadius:10
  },
  itemContainer: {
    marginTop: 30,
  }
  
});

export default Input;
