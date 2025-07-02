// import { useName } from '@/app/contexts/name-context';
import { useState } from 'react';
import { TextInput, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import Box from './Box';

export default function Input() {

  const  [userName, setUserName] = useState('');

  const onSubmit = () => {
    console.log("Monster name is " + userName)
  }
  
  return (
 <>
      <Box style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name..."
        value={userName}
        onChangeText={setUserName}
      />
    
    <TouchableOpacity style={styles.button} onPress={onSubmit} activeOpacity={0.7}>
      <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
    </Box>
  </>

  );
}

const { width } = Dimensions.get('window');
const scale = width / 375

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
      width: '80%',
      maxWidth: 400,
    alignSelf: 'center',
      paddingHorizontal: 6,
      paddingVertical: 10,
      marginVertical: 16,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: '#fff',
      fontSize: scale * 18,
  
    },
    button: {
        backgroundColor: '#F1AA7B',
        width: '50%',
        alignSelf: 'center',
        borderRadius: 4,
        paddingVertical: 10,
        marginBottom: 26
    },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
      fontWeight: 'bold',
      color: '#3E3858',
      paddingVertical: 4
  }
});
