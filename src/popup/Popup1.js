import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
} from 'react-native';

const Popup = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              style={{height: 200, width: 200, resizeMode: 'contain'}}
              source={require('../img/nfc.jpg')}
            />
            <Text style={styles.modalText1}>Now!</Text>
            <Text style={styles.modalText2}>"정상(동능)"</Text>
            <Text style={styles.modalText1}>IN</Text>
            <Text style={styles.modalText2}>성판악 탐방로</Text>
            <Text style={styles.modalText3}>
              ※해당 위치에 NFC를 태그해 주세요
            </Text>

            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>닫기</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>확인</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 50,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#404040',
    borderRadius: 0,
    padding: 32,
    paddingTop: 12,
    paddingBottom: 12,
    elevation: 1,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalText2: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
  },
  modalText3: {
    fontSize: 12,
    color: 'blue',
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Popup;
