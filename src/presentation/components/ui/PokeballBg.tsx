import { StyleProp, Image, ImageStyle } from 'react-native';
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
  style?: StyleProp<ImageStyle>;
}

export const PokeballBg = ({ style }: Props) => {
  const { isDark } = useContext(ThemeContext);
  const pokeball = isDark
    ? require('../../../assets/pokeball-light.png')
    : require('../../../assets/pokeball-dark.png');
  return (
    <Image
      source={pokeball}
      style={[{ width: 300, height: 300, opacity: 0.3 }, style]}
    />
  );
};
