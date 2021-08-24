import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/Header';
import Input from './components/Input/Input';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <StatusBar style="auto" />
      <Input/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
