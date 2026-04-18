import IconButton from '@/components/icon-button';
import { StyleSheet, View } from 'react-native';

export default function ListScreen() {
  return (
    <View style={styles.container}>
      <IconButton onPress={() => {}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 24,
    marginBottom: 24,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  }
})
