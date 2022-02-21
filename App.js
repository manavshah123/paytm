/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Paytmui from "./paytmui";
import One from "./one";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
 

  return (
    <NavigationContainer style={{backgroundColor :"#fff"}}>{

      <Stack.Navigator initialRouteName='Paytmui' screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Paytmui" component={Paytmui} />
        <Stack.Screen name="One" component={One}/>

      </Stack.Navigator>

      }  
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
