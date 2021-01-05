import React from 'react'
import { createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import { View, Text } from 'react-native';

import {SignIn, CreateAccount} from './src/Screen';

const Stack = createStackNavigator();


export default ()=> {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name ="SignIn" component={SignIn}/>
                <Stack.Screen name ="CreateAccount" component={CreateAccount}/>
            </Stack.Navigator>
        </NavigationContainer>

    );
}