// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  Alert,
} from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ width: '100%' }}>
        <Text style={styles.title}>Title</Text>
        <TextInput style={styles.titleInput} />
      </View>

      <View style={{ width: '100%' }}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://media.istockphoto.com/id/1039590134/photo/the-dark-hedges-in-northern-ireland-at-sunset.webp?s=2048x2048&w=is&k=20&c=DAWPM55riXaEc15jvwfWFvcmojLzO6caek6_7N3eDcU=',
            }}
          />
        </View>
        <Button title="Take image" onPress={() => Alert.alert('Take image')} />
        <View style={styles.mapContainer}>
          <MapView style={styles.map} />
        </View>
        <View style={styles.locationActionContainer}>
          <Button title="Locate user" />

          <Button title="Pick on map" />
        </View>

        <View style={styles.submitContainer}>
          <Button title="Add place" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 32, // TODO There should be a better way...
    color: '#333',
  },
  title: {
    fontSize: 18,
  },

  titleInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#bbb',
    paddingHorizontal: 8,
    fontSize: 16,
    marginBottom: 8,
  },
  imageContainer: {
    width: '100%',
    height: 250,
    borderColor: '#bbb',
    borderWidth: 1,
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 250,
  },
  mapContainer: {
    width: '100%',
    height: 125,
    borderWidth: 1,
    borderColor: '#bbb',
    marginTop: 8,
  },
  locationActionContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  submitContainer: {
    marginTop: 8,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
