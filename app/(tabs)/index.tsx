import IconButton from '@/components/icon-button';
import TaskInputModal from '@/components/task-input-modal';
import TodoItem from '@/components/todo-item';
import { TodosProvider, useTodos } from '@/contexts/todos-context';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function ListScreen() {
  return (
    <TodosProvider>
      <ListScreenBody />
    </TodosProvider>
  );
}

function ListScreenBody() {
  const [isTaskInputModalVisible, setTaskInputModalVisible] = useState<boolean>(false);

  const onTaskInputModalClose = () => {
    setTaskInputModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <IconButton iconName="add" onPress={() => {setTaskInputModalVisible(true);}} />
      </View>
      <View style={styles.listContainer}>
        <TodoList />
      </View>
      <TaskInputModal isVisible={isTaskInputModalVisible} onClose={onTaskInputModalClose} />
    </View>
  )
}

function TodoList() {
  const {todos} = useTodos();

  return (
    <View>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </View>
  )
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
  },
  listContainer: {
    marginHorizontal: 16,
  }
})
