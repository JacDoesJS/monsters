import { TextInput, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';

interface InputProps {
    monsterName: string;
    setMonsterName: (name: string) => void;
    onSubmit: () => void; 
}
  
export default function Input({ monsterName, setMonsterName, onSubmit }: InputProps) {

  const handlePress = () => {
      console.log("Monster name is " + monsterName);
      onSubmit()
  }
  
  return (
 <>
      <TextInput
        style={styles.input}
        placeholder="Name..."
        value={monsterName}
        onChangeText={setMonsterName}
      />
    
    <TouchableOpacity style={styles.button} onPress={handlePress} activeOpacity={0.7}>
      <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
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
      marginBottom: 20,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: '#fff',
      fontSize: scale * 14,
  
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