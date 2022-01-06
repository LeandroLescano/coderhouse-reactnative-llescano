import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native';

function HeaderList() {
  return <Text style={styles.taskListTitle}>Task list</Text>;
}

const styles = StyleSheet.create({
  taskListTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default HeaderList;
