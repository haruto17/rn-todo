import { Colors } from "@/constants/theme";
import { Pressable, StyleSheet, Text, useColorScheme, View } from "react-native";

type TextButtonProps = {
  text: string;
  onPress?: () => void;
}

export default function TextButton({ text,onPress }: TextButtonProps) {
  const colorScheme = useColorScheme() ?? 'light';

  return (
      <View style={[styles.buttonContainer, {borderColor: Colors[colorScheme].text}]}>
        <Pressable onPress={onPress} style={styles.pressable}>
          <Text style={[styles.text, {color: Colors[colorScheme].text}]}>{text}</Text>
        </Pressable>
      </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 64,
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
  },
  pressable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
  }
})
