import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Home from './screens/Home';
import TaskNavigator from './navigation/TaskNavigator';



export default function App() {
  const [view, setview] = useState(false)

  const handleOnClick = () => {
    setview(true);
  }
  
  return (
    // <View style={styles.container}>
    //   {view? <Input/>:  <Home change={handleOnClick}/>}
    // </View>
    <TaskNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
