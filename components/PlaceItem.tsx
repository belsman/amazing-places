import { Image, Pressable, Text, View, StyleSheet } from 'react-native';
import { IPlace } from '../types/interfaces';

export function PlaceItem({ place }: { place: IPlace }) {
  return (
    <Pressable style={style.root}>
      <View style={style.imageContainer}>
        <Image source={{ uri: place.imageUri }} />
      </View>
      <View style={style.infoContainer}>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  );
}

const style = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  infoContainer: {
    flex: 4,
  },
});
