import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

import EmptyList from './src/components/EmptyList';
import HeaderList from './src/components/HeaderList';
import InputTask from './src/components/InputTask';
import TaskItem from './src/components/TaskItem';

const App = () => {
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = newTask => {
    let newList = [
      ...taskList,
      {id: Math.random(), task: newTask, completed: false},
    ];
    setTaskList(newList.sort((a, b) => a.completed - b.completed));
  };

  const handleDeleteTask = id => {
    setTaskList(taskList.filter(el => el.id !== id));
  };

  const handleCheckTask = (id, val) => {
    setTaskList(prevTask =>
      prevTask
        .map(el => (el.id === id ? {...el, completed: val} : el))
        .sort((a, b) => a.completed - b.completed),
    );
  };

  return (
    <View style={styles.container}>
      <InputTask addTask={newTask => handleAddTask(newTask)} />
      <View style={styles.taskListContainer}>
        <FlatList
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={HeaderList}
          data={taskList}
          renderItem={({item}) => (
            <TaskItem
              task={item}
              deleteTask={handleDeleteTask}
              completeTask={handleCheckTask}
            />
          )}
          ListEmptyComponent={EmptyList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  taskListContainer: {
    flex: 1,
    paddingHorizontal: 40,
  },
});

export default App;
