import { Pressable, StyleSheet, Text, View } from "react-native"
import {Checkbox} from 'expo-checkbox'
import { Todo } from "@/types/todo"
import { useTodos } from "@/contexts/todos-context";

type TodoItemProps = {
  todo: Todo;
}

export default function TodoItem({todo}: TodoItemProps) {
  const {toggleTodo} = useTodos();

  return (
    <Pressable onPress={() => toggleTodo(todo.id)}>
      <View style={styles.container}>
        <Text>{todo.title}</Text>
        <Checkbox value={todo.isCompleted} />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
})
