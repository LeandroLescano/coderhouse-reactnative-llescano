import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  input: {
    flex: 0.8,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    paddingBottom: 2,
  },
  formContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#5aa1a2',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  addButtonDisabled: {
    backgroundColor: '#CCC',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});
