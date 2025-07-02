import { StyleSheet, Dimensions, View, StyleProp, ViewStyle } from 'react-native';

interface BoxProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

export default function Box({children, style}: BoxProps) {
    return (
    <View style={[styles.container, style]}>{children}</View>
  );
}

const { width } = Dimensions.get('window');
console.log('Screen width:', width);
const styles = StyleSheet.create({
    container: {
        width: width * 0.9,
        alignSelf: 'center',
        alignItems: 'center',
        maxWidth: 400,
        borderRadius: 20,
        overflow: 'hidden',
        borderColor: '#D1E1E9',
        borderWidth: 1,
        backgroundColor: '#3E3858',
        padding: 10
    },
  });
  
