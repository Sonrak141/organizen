import React from 'react'
import {Text,View,Button,Modal} from 'react-native'

interface Props {
  modalVisible:boolean
  modalClose:any
  deleteFun:any
}

const ModalView: React.FC<Props> = ({modalVisible, modalClose, deleteFun }) => {
    return (
        <Modal animationType="slide" visible={modalVisible} >
        <View>
          <Text>Desea eliminar item?</Text>
        </View>
        <View>
          <Button title="Confirmar" onPress={deleteFun} color="black"/>
          <Button title="Cerrar" onPress={modalClose} color="red"/>
        </View>
        </Modal>
    )
}

export default ModalView
