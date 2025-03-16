import { StyleSheet, View } from 'react-native';
import {
  requestForegroundPermissionsAsync,
  PermissionStatus,
  getCurrentPositionAsync,
} from 'expo-location';

import { Colors } from '../constants/colors';
import { OutlinedButton } from '../ui/OutlinedButton';

export function LocationPicker() {
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
    console.log('***Location', location);
  };

  const pickOnMap = () => {};

  return (
    <>
      <View style={style.locationReviewContainer}></View>
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
});
