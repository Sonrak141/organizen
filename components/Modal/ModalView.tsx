import React from 'react'
import {Text,View,Button,Modal, StyleSheet} from 'react-native'

interface Props {
  modalVisible:boolean
  modalClose:any
  deleteFun:any
}

const ModalView: React.FC<Props> = ({modalVisible, modalClose, deleteFun }) => {
    return (
        <Modal animationType="slide" visible={modalVisible} >
        <View style={[styles.modal]}>
          <Text>Desea eliminar item?</Text>
        </View>
        <View style={[styles.modal]}>
          <Button title="Confirmar" onPress={deleteFun} color="black"/>
          <Button title="Cerrar" onPress={modalClose} color="red"/>
        </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
  modal: {
    justifyContent:'center',
    alignItems: 'center',
    flex:1,
  
  }
})

export default ModalView
