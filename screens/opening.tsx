import { Button, StyleSheet, Text, View } from "react-native";

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OpeningLayoutMain from "./components/opening-main";
import main from "./main";
import authorization from "./authorization";
import React from "react";

const Stack = createNativeStackNavigator();

const OpeningLayout = () => {
    return (

        
        <>
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={main}
          options={{title: 'Welcome'}}
        />

        <Stack.Screen name="Profile" component={authorization} />

      </Stack.Navigator>
    </NavigationContainer>

            <Text>Header</Text>
                <OpeningLayoutMain/>
            <Text>Footer</Text>
        </>
    )
}

export default OpeningLayout

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    } 
})