import { Pressable, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';

export function OutlinedButton({
  name,
  onPress,
  children,
}: {
  name: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  children: string;
}) {
  return (
    <Pressable
      style={({ pressed }) => [style.button, pressed && style.pressed]}
      onPress={onPress}
    >
      <Ionicons name={name} size={32} color={Colors.primary500} />
      <Text style={style.text}>{children}</Text>
    </Pressable>
  );
}

const style = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.primary500,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  text: {
    color: Colors.primary500,
    fontSize: 16,
    marginLeft: 8,
  },
  pressed: {
    opacity: 0.7,
  },
});
