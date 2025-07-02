import { Text, View } from 'react-native';
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
      <Text>Name: {monster.name}</Text>
      <Text>Size: {monster.size}</Text>
      <Text>Type: {monster.type}</Text>
      <Text>Charisma: {monster.charisma}</Text>
      <Text>Hit points: {monster.hit_points}</Text>

      {monster.actions && monster.actions.length > 0 && (
        <>
          <Text style={{ fontWeight: 'bold' }}>Actions:</Text>
          {monster.actions.map((action, index: number) => (
            <View key={index}>
              <Text>{action.name}</Text>
              <Text>{action.desc}</Text>
            </View>
          ))}
        </>
      )}
    </Box>
  );
}
