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

const styles = StyleSheet.create({
    container: {
        width: width * 0.94,
        alignSelf: 'center',
        maxWidth: 400,
        borderRadius: 6,
        overflow: 'hidden',
    },
  });
  
