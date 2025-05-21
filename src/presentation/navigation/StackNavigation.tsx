import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screen/home/HomeScreen';
import { PokemonScreen } from '../screen/pokemon/PokemonScreen';
import { SearchScreen } from '../screen/search/SearchScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  PokemonScreen: { pokemonId: number };
  SearchScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
};
