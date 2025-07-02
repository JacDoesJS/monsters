import { Image, Text, StyleSheet, Dimensions, SafeAreaView, View } from 'react-native';
import dragon from "./assets/drag.jpeg";
import Box from './components/Box';
// import Input from './components/Input';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: 'pink' }}>
      <Image
        source={{ uri: dragon }}
        style={styles.banner}
        accessibilityLabel="Dragon"
      />
{/* <View style={{ width: '100%', alignItems: 'center' }}> */}
        <Box>
      {/* <Box style={styles.boxContainer}> */}
        <Text style={styles.introText}>Monster Search</Text>
          {/* <Input /> */}
        </Box>
        {/* </View> */}
      
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
  // boxContainer: {
  //   borderColor: '#D1E1E9',
  //   borderWidth: 10,
  //   backgroundColor: '#3E3858',
  //   borderRadius: 20
  // },
  introText: {
    width: width * 0.94,
    maxWidth: 400,
    alignSelf: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 26,
    fontSize: 24,
    color: 'white'
  },
   
  });