import { Button, Image, StyleSheet, Text, View } from 'react-native';
import * as imagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Colors } from '../constants/colors';
import { OutlinedButton } from '../ui/OutlinedButton';

export function ImagePicker() {
  const [imageUri, setImageUri] = useState('');

  // TODO Add permisions for IOS, camera will not work for now,
  // Saw how to do this in a doc with the // useEffect when mounted
  // and when the platform is an ios

  const takePhoto = async () => {
    const result = await imagePicker.launchCameraAsync({
      aspect: [16, 9],
      quality: 0.5,
      mediaTypes: ['images'],
      allowsEditing: true,
    });

    console.log('result', result);

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <>
      <View style={style.imagePickerContainer}>
        {imageUri ? (
          <Image style={style.previewedImage} source={{ uri: imageUri }} />
        ) : (
          <Text>No image taken yet.</Text>
        )}
      </View>
      <OutlinedButton onPress={takePhoto} name="camera">
        Take a photo
      </OutlinedButton>
    </>
  );
}

const style = StyleSheet.create({
  imagePickerContainer: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary100,
    marginVertical: 8,
  },
  previewedImage: {
    width: '100%',
    height: '100%',
  },
});
