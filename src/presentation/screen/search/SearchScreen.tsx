import React from 'react';
import { View } from 'react-native';
import { globalTheme } from '../../../config/theme/global-theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ActivityIndicator, TextInput, Text } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';
import { PokemonCard } from '../../components/pokemons/PokemonCard';
import { Pokemon } from '../../../domain/PokemonEntities';
import { useQueries } from '@tanstack/react-query';
import { GetPokemonNameWithId } from '../../../actions';

export const SearchScreen = () => {
  const { top } = useSafeAreaInsets();

  const { isLoading, data: pokemonNmaeList = [] } = useQueries({
    queryKey: ['pokemon', 'all'],
    queryFn: () => GetPokemonNameWithId(),
  });

  return (
    <View style={[globalTheme.globalMargin, { paddingTop: top + 10 }]}>
      <TextInput
        placeholder="Buscar Pokemon"
        mode="flat"
        autoFocus
        autoCorrect={false}
        onChange={value => console.log(value)}
        value={' '}
      />
      <ActivityIndicator style={{ padding: 20 }} />

      <FlatList
        data={[] as Pokemon[]}
        keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
        numColumns={2}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
