import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

import {styles} from '../styles/InputTask.styles';

function InputTask({addTask}) {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    addTask(task);
    setTask('');
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Name a task"
        value={task}
        onChangeText={text => setTask(text)}
        onSubmitEditing={() => handleAdd()}
      />
      <TouchableOpacity
        style={
          task.trim().length > 0 ? styles.addButton : styles.addButtonDisabled
        }
        activeOpacity={0.5}
        onPress={() => handleAdd()}
        disabled={task.trim().length === 0}>
        <Text style={styles.buttonText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
}

export default InputTask;
