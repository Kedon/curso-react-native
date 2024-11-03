import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AddWater = ({
    onAddWater
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = useState('');

  const sendDataToHome = () => {
    onAddWater(Number(text));
    setModalVisible(false);
    onChangeText('');
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <Pressable
          style={styles.overlay}
          onPress={() => setModalVisible(!modalVisible)}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Quantidade de água consumida</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              placeholder="Informe a quantidade de água"
              value={text}
              keyboardType="numeric"
            />
            <View style={styles.footer}>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textCancelStyle}>Cancelar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={sendDataToHome}>
                <Text style={styles.textStyle}>Adicionar</Text>
              </Pressable>
            </View>
          </View>
        </Pressable>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Icon name="add" size={30} color="white" />
      </Pressable>
    </View>
  );
};

export default AddWater;

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // overlay semi-transparente
  },
  modalView: {
    width: '90%', // largura da modal
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
    borderRadius: 50,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textCancelStyle: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#ccc',
    borderRadius: 10,
    width: '100%',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});
