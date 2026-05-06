import { Pressable, StyleSheet, Text, useColorScheme, View } from "react-native"
import {Checkbox} from 'expo-checkbox'
import { Todo } from "@/types/todo"
import { useTodos } from "@/contexts/todos-context";

type TodoItemProps = {
  todo: Todo;
}

export default function TodoItem({todo}: TodoItemProps) {
  const colorScheme = useColorScheme();
  const textColor = colorScheme === 'dark' ? '#FFFFFF' : '#000000';
  const borderColor = colorScheme === 'dark' ? '#FFFFFF' : '#000000';
  const {toggleTodo} = useTodos();

  return (
    <Pressable onPress={() => toggleTodo(todo.id)}>
      <View style={[styles.container, {borderBottomColor: borderColor}]}>
        <Text style={{color: textColor}}>{todo.title}</Text>
        <Checkbox value={todo.isCompleted} />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  }
})
