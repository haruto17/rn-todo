import IconButton from '@/components/icon-button';
import TaskInputModal from '@/components/task-input-modal';
import TodoItem from '@/components/todo-item';
import { TodosProvider, useTodos } from '@/contexts/todos-context';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
      <View style={styles.listContainer}>
        <TodoList />
      </View>
      <View style={styles.buttonContainer}>
        <IconButton iconName='add' onPress={() => {setTaskInputModalVisible(true);}} />
      </View>
      <TaskInputModal isVisible={isTaskInputModalVisible} onClose={onTaskInputModalClose} />
    </View>
  )
}

function TodoList() {
  const {todos} = useTodos();

  return (
    <SafeAreaView style={styles.todoListSafeArea}>
      <ScrollView
        contentContainerStyle={styles.todoListContent}
        showsVerticalScrollIndicator={false}
      >
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    position: 'absolute',
    right: 24,
    bottom: 24,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  listContainer: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  todoListSafeArea: {
    flex: 1,
  },
  todoListContent: {
    paddingBottom: 96,
  },
})
