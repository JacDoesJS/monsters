import { Image, Text, StyleSheet, Dimensions, SafeAreaView, View } from 'react-native';
import dragon from "./assets/drag.jpeg";
import Box from './components/Box';
import Input from './components/Input';
import { useState } from 'react';
import { fetchMonster } from './api/fetchMonster';
import MonsterDetails from './components/MonsterDetails';


export default function App() {
  const [monsterName, setMonsterName] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [monsterData, setMonsterData] = useState(null);
  const [error, setError] = useState('');


  const handleSearch = async () => {
    try {
      const result = await fetchMonster(monsterName);
      setMonsterData(result);
      setError('');
    } catch (err: any) {
      setError(err.message);
      setMonsterData(null);
    }
  };

  return (
    <SafeAreaView>
      <Image
        source={{ uri: dragon }}
        style={styles.banner}
        accessibilityLabel="Dragon"
      />
      <Box style={styles.boxContainer}>
        <View style={{borderRadius: 20}}>
        <Text style={styles.introText}>Monster Search</Text>
          <Input
            monsterName={monsterName}
            setMonsterName={setMonsterName}
            onSubmit={() => {
              setHasSubmitted(true)
              handleSearch()
            }
            }
          />
          </View>
      </Box>

      {/* {hasSubmitted && <Text>You entered: {monsterName}</Text>} */}
      {monsterData && <MonsterDetails monster={monsterData}></MonsterDetails>}
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
    borderRadius: 20
  },
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