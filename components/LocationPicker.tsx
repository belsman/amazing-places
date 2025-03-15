import { StyleSheet, View } from 'react-native';
import { OutlinedButton } from '../ui/OutlinedButton';
import { Colors } from '../constants/colors';

export function LocationPicker() {
  const locateUser = () => {};

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
