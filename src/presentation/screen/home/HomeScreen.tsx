import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getPokemons } from '../../../actions';
import { PokeballBg } from '../../components/ui/PokeballBg';
import { FlatList } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import { globalTheme } from '../../../config/theme/global-theme';
import { PokemonCard } from '../../components/pokemons/PokemonCard';

export const HomeScreen = () => {
  const { isLoading, data = [] } = useQuery({
    queryKey: ['pokemon'],
    queryFn: () => getPokemons(0),
    staleTime: 1000 * 60 * 60,
  });

  return (
    <View >
      <PokeballBg style={style.imgPosition} />
      <FlatList
        data={data}
        keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
        numColumns={2}
        ListHeaderComponent={() => <Text variant="displayMedium">Pokedex</Text>}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
      />
    </View>
  );
};

const style = StyleSheet.create({
  imgPosition: {
    position: 'absolute',
    top: -100,
    right: -100,
  },
});
