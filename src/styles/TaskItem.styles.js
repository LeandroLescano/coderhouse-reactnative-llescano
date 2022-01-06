import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  taskContainer: {
    borderBottomWidth: 0.5,
    // borderRadius: 2,
    borderColor: '#808080',
    marginVertical: 5,
    padding: 8,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteButton: {
    paddingHorizontal: 5,
    borderWidth: 0.5,
    borderRadius: 2,
    borderColor: '#808080',
    backgroundColor: '#68babb',
  },
  deleteButtonText: {
    color: 'white',
  },
  taskTextCompleted: {
    textDecorationLine: 'line-through',
  },
});
