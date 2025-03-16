import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  AllPlaces: undefined;
  AddPlace: undefined;
  Map: undefined;
};

export type MapScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Map'
>;
