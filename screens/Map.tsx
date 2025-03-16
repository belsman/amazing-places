import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { MapPressEvent, Marker } from 'react-native-maps';
import { ILocation } from '../types/interfaces';

export function Map() {
  const [pickedLocation, setPickedLocation] = useState<ILocation | null>(null);

  const mapPressHandler = (event: MapPressEvent) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setPickedLocation({
      latitude,
      longitude,
    });
  };

  return (
    <View style={style.root}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={mapPressHandler}
        style={style.map}
      >
        {pickedLocation && (
          <Marker
            coordinate={{
              latitude: pickedLocation.latitude,
              longitude: pickedLocation.longitude,
            }}
          />
        )}
      </MapView>
    </View>
  );
}

const style = StyleSheet.create({
  root: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
