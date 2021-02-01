import React from 'react';
import 'react-native-gesture-handler';
import Home from './src/View/home/home'
import Accounts from './src/View/accounts/accounts'
import PlanetsList from './src/View/planetsList/planetsList'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()


export default function App() {
 
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Desenvolvedores" component={Accounts} />
          <Stack.Screen name="Planetas" component={PlanetsList} />
        </Stack.Navigator>
      </NavigationContainer>

    );
  
}


 