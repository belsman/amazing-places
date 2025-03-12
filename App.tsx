import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AllPlaces } from './screens/AllPlaces';
import { StatusBar } from 'expo-status-bar';
import { AddPlace } from './screens/AddPlace';
import { IconButton } from './ui/IconButton';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="All places"
            component={AllPlaces}
            options={({ navigation }) => ({
              headerRight: ({ tintColor }) => {
                return (
                  <IconButton
                    name="add"
                    size={32}
                    color={tintColor!}
                    onPress={() => navigation.navigate('Add place')}
                  />
                );
              },
            })}
          />
          <Stack.Screen name="Add place" component={AddPlace} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
