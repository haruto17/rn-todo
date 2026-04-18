import IconButton from '@/components/icon-button';
import TaskInputModal from '@/components/task-input-modal';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function ListScreen() {
  const [isTaskInputModalVisible, setTaskInputModalVisible] = useState<boolean>(false)

  const onTaskInputModalClose = () => {
    setTaskInputModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <IconButton iconName="add" onPress={() => {
          setTaskInputModalVisible(true);
        }}/>
      </View>
      <TaskInputModal isVisible={isTaskInputModalVisible} onClose={onTaskInputModalClose}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    marginRight: 24,
    marginBottom: 24,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  }
})
