import { Text, View, StyleSheet } from 'react-native';
import Box from './Box';

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
  

export default function MonsterDetails({ monster }: { monster: Monster }) {
  return (
    <Box>
      <Text style={styles.text}>Name: {monster.name}</Text>
      <Text style={styles.text}>Size: {monster.size}</Text>
      <Text style={styles.text}>Type: {monster.type}</Text>
      <Text style={styles.text}>Charisma: {monster.charisma}</Text>
      <Text style={styles.text}>Hit points: {monster.hit_points}</Text>

      {monster.actions && monster.actions.length > 0 && (
        <>
          <Text style={{ fontWeight: 'bold', color: 'white', marginVertical: 16, fontSize: 20 }}>Actions:</Text>
          {monster.actions.map((action, index: number) => (
            <View key={index}>
              <Text style={styles.text}>{action.name}</Text>
              <Text style={styles.text}>{action.desc}</Text>
            </View>
          ))}
        </>
      )}
    </Box>
  );
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 16,
        marginBottom: 4,
    }
})