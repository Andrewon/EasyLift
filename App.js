import { NavigationContainer, StackActions } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,Image,TouchableOpacity, Button, Alert, FlatList, TouchableWithoutFeedback } from 'react-native';

import DATA from "TestData";

const Stack = createStackNavigator();

export default function App() /**the 'export' is equivalent to run**/ {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({navigation}) {
  return(
  <SafeAreaView style={styles.container}>

    <Text>Workout app test</Text>
    <Button
      title="Go to Details"
      onPress={ () => navigation.navigate ('Details') }
      />

  </SafeAreaView>
  )

}

function DetailsScreen() {
  return(
  <SafeAreaView style={styles.container}>

    <Text>Details</Text>

  </SafeAreaView>
  )

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
