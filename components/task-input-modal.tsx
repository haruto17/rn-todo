import { Modal, StyleSheet, Text, useColorScheme, View } from "react-native";
import CustomTextInput from "./custom-text-input";
import { useState } from "react";
import TextButton from "./text-button";
import { Colors } from "@/constants/theme";
import { goBack } from "expo-router/build/global-state/routing";

type TaskInputModalProps = {
  isVisible: boolean;
  onClose?: () => void;
}

export default function TaskInputModal({isVisible, onClose}: TaskInputModalProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const [title, setTitle] = useState<string>('');

  const onChangeText = (text: string) => {
    setTitle(text);
  }

  const onPress = () => {
    if (title.length === 0) {
      return;
    }

    setTitle('');
    onClose?.();
  }

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible} onRequestClose={onClose}>
       <View style={[styles.modalContainer, {backgroundColor: Colors[colorScheme].background}]}>
          <View style={styles.inputContainer}>
            <CustomTextInput placeholder="title" onChangeText={(text) => {onChangeText(text)}}/>
          </View>
          <View style={styles.buttonContainer}>
            <TextButton text="add" onPress={onPress}/>
          </View>
       </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
  },
  inputContainer: {
    margin: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 16,
    marginBottom: 32,
  }
})
