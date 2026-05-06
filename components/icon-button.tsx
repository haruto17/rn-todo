import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, useColorScheme, View } from "react-native";
import { red } from "react-native-reanimated/lib/typescript/Colors";

type IconButtonProps = {
  iconName: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
};

export default function IconButton({ iconName, onPress }: IconButtonProps) {
  const colorScheme = useColorScheme();
  const iconColor = colorScheme === 'dark' ? '#FFFFFF' : '#000000';
  const backgroundColor = colorScheme === 'dark' ? '#000000' : '#FFFFFF';

  return (
    <View style={[styles.iconButtonContainer, { borderColor: iconColor , backgroundColor: backgroundColor}]}>
      <Pressable
        style={styles.iconButton}
        onPress={onPress}
      >
        <Ionicons name={iconName} size={24} color={iconColor} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  iconButtonContainer: {
    width: 48,
    height: 48,
    borderWidth: 2,
    borderRadius: 50,
  },
  iconButton: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
});

