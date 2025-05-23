import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { RootStackParams } from '../../navigation/StackNavigation';
import { StackNavigationProp } from '@react-navigation/stack';

export const PokemonScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  return (
    <View>
      <Text>PokemonScreen</Text>
    </View>
  );
};
