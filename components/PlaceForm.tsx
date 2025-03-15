import { useState } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Colors } from '../constants/colors';
import { ImagePicker } from './ImagePicker';
import { LocationPicker } from './LocationPicker';

export function PlaceForm() {
  const [placeName, setPlaceName] = useState('');

  return (
    <ScrollView style={style.form}>
      <View>
        <Text style={style.label}>Place Form</Text>
        <TextInput
          value={placeName}
          onChangeText={(value) => setPlaceName(value)}
          style={style.input}
        />
      </View>
      <ImagePicker />
      <LocationPicker />
    </ScrollView>
  );
}

const style = StyleSheet.create({
  form: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontWeight: 'bold',
    color: Colors.primary500,
    margin: 4,
  },
  input: {
    backgroundColor: Colors.primary100,
    borderWidth: 2,
    borderBottomColor: Colors.primary700,
    paddingVertical: 8,
    paddingHorizontal: 4,
    marginVertical: 4,
  },
});
