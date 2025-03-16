import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export function Map() {
  return (
    <View style={style.root}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={style.map}
      >
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
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
