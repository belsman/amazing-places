import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AllPlaces } from './screens/AllPlaces';
import { StatusBar } from 'expo-status-bar';
import { AddPlace } from './screens/AddPlace';
import { IconButton } from './ui/IconButton';
import { Colors } from './constants/colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary500,
            },
            headerTintColor: Colors.gray700,
            contentStyle: {
              backgroundColor: Colors.gray700,
            },
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: 'Your amazing places',
              headerRight: ({ tintColor }) => {
                return (
                  <IconButton
                    name="add"
                    size={32}
                    color={tintColor as string}
                    onPress={() => navigation.navigate('AddPlace')}
                  />
                );
              },
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{
              title: 'Add new place',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
