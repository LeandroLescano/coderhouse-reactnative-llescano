import {Text, TouchableOpacity, View} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {styles} from '../styles/TaskItem.styles';

function TaskItem({task, deleteTask, completeTask}) {
  return (
    <View style={styles.taskContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <CheckBox
          value={task.completed}
          onValueChange={val => completeTask(task.id, val)}
        />
        <Text style={task.completed && styles.taskTextCompleted}>
          {task.task}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteTask && deleteTask(task.id)}>
        <Text style={styles.deleteButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TaskItem;
