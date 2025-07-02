import { Image, Text, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import dragon from "./assets/drag.jpeg";
import Box from './components/Box';
import Input from './components/Input';

export default function App() {
  return (
    <SafeAreaView>
      <Image
        source={{ uri: dragon }}
        style={styles.banner}
        accessibilityLabel="Dragon"
      />
      <Box style={styles.boxContainer}>
        <Text style={styles.introText}>Monsters Search</Text>
          <Input />
      </Box>
      
    </SafeAreaView>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({

  banner: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20
  },  
  boxContainer: {
    borderColor: '#D1E1E9',
    borderWidth: 10,
    backgroundColor: '#3E3858',
  },
  introText: {
    width: width * 0.94,
    maxWidth: 400,
    alignSelf: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 4,
    fontSize: 20,
    color: 'white'
    
  },
   
  });