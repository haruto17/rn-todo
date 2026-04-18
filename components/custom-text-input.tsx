import { Colors } from "@/constants/theme";
import { StyleSheet, TextInput, useColorScheme, View } from "react-native";

type CustomTextInputProps = {
  placeholder?: string;
  onChangeText?: (text: string) => void;
}

export default function CustomTextInput({placeholder, onChangeText}: CustomTextInputProps) {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <View>
      <TextInput style={[styles.input, {borderColor: Colors[colorScheme].text, color: Colors[colorScheme].text}]} placeholder={placeholder} onChangeText={onChangeText}/>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  }
});
