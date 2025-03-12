import { FlatList, View, Text, StyleSheet } from 'react-native';
import { IPlace } from '../types/interfaces';
import { PlaceItem } from './PlaceItem';

export function PlacesList({ places }: { places: IPlace[] }) {
  if (places.length === 0) {
    return (
      <View style={style.fallbackTextContainer}>
        <Text style={style.fallbackText}>
          No places added yet - start adding a few
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={places}
      renderItem={(data) => <PlaceItem place={data.item} />}
      keyExtractor={(item) => item.id}
    />
  );
}

const style = StyleSheet.create({
  fallbackText: {
    fontSize: 16,
  },
  fallbackTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
