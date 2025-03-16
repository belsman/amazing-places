import { Image, StyleSheet, View, Text } from 'react-native';
import {
  requestForegroundPermissionsAsync,
  PermissionStatus,
  getCurrentPositionAsync,
} from 'expo-location';

import { Colors } from '../constants/colors';
import { OutlinedButton } from '../ui/OutlinedButton';
import { getPreviewMapLocation } from '../utils/location';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MapScreenProp } from '../types/navigation';
import { ILocation } from '../types/interfaces';

export function LocationPicker() {
  const navigator = useNavigation<MapScreenProp>();
  const [selectedLocation, setSelectedLocation] = useState<ILocation | null>(
    null
  );

  const askForPermission = async () => {
    let { status } = await requestForegroundPermissionsAsync();
    if (status !== PermissionStatus.GRANTED) {
      console.log('Permission to access location was denied');
      return false;
    } else {
      return true;
    }
  };

  const locateUser = async () => {
    const hasPermsToAccessLocation = await askForPermission();

    if (!hasPermsToAccessLocation) return;

    const location = await getCurrentPositionAsync({});

    setSelectedLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  const pickOnMap = () => {
    return navigator.navigate('Map');
  };

  let previewedLocation = (
    <Text style={{ color: 'black' }}>No location picked yet</Text>
  );

  if (selectedLocation) {
    const uri = getPreviewMapLocation(
      selectedLocation.latitude,
      selectedLocation.longitude
    );

    previewedLocation = (
      <Image
        style={style.previewImage}
        source={{
          uri,
        }}
      />
    );
  }

  return (
    <>
      <View style={style.locationReviewContainer}>{previewedLocation}</View>
      <View style={style.actions}>
        <OutlinedButton name="location" onPress={locateUser}>
          Locate User
        </OutlinedButton>

        <OutlinedButton name="map" onPress={pickOnMap}>
          Pick on Map
        </OutlinedButton>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  locationReviewContainer: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    marginTop: 16, // TODO Remove for flexible usage
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 8,
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
});
