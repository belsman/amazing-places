import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';

export function IconButton({
  color,
  size,
  name,
  onPress,
}: {
  color: string;
  size: number;
  name: 'add' | 'remove';
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [style.button, pressed && style.pressed]}
    >
      <Ionicons color={color} size={size} name={name} />
    </Pressable>
  );
}

const style = StyleSheet.create({
  button: {
    padding: 8,
  },
  pressed: {
    opacity: 0.7,
  },
});
