import { SafeAreaView, Image, Text, Dimensions, StyleSheet } from 'react-native';
import dragon from "./assets/dragon.jpeg";
import Box from './components/Box';
import Input from './components/Input';
import { useState } from 'react';
import { fetchMonster } from './api/fetchMonsters';
import MonsterDetails from './components/MonsterDetails';

interface Action {
  name: string;
  desc: string;
}
interface Monster {
  name: string;
  size: string;
  type: string;
  charisma: number;
  hit_points: number;
  actions?: Action[];
}

export default function App() {

  const [monsterName, setMonsterName] = useState('');
  const [monsterData, setMonsterData] = useState<Monster | null>(null);
  const [error, setError] = useState('');


  const handleSearch = async () => {
    try {
      const result = await fetchMonster(monsterName); 
      setMonsterData(result); 
      setError('');          
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message); 
      } else {
        setError('An unexpected error occurred');
      }
      setMonsterData(null); 
    }
  };

  return (
    // <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: '#D1E1E9' }}>
      <SafeAreaView style={styles.screenContainer}>
      <Image
        source={{ uri: dragon }}
        style={styles.image}
        accessibilityLabel="Dragon"
      />
        <Box style={{ marginBottom: 20 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginVertical: 20}}>Monster Search</Text>
        <Input
          monsterName={monsterName}
          setMonsterName={setMonsterName}
          onSubmit={() => {
          handleSearch(); 
       }}
/>
        </Box>
        {monsterData && <MonsterDetails monster={monsterData} />}
      {error !== '' && (
        <Box>
          <Text style={styles.errorText}>{error}</Text>
        </Box>
      )}
    </SafeAreaView>
      
  );
}

const { width } = Dimensions.get('window');
const aspectRatio = 286 / 153; 

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#D1E1E9' 

  },
  image: {
    width: width,
    height: width / aspectRatio,
    resizeMode: 'cover',
    marginBottom: 26
  },
  errorText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  }
});
