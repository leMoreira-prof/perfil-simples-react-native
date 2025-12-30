import React from 'react';
import { View } from 'react-native';

import { styles } from './CardNivelStyles';
import LogoImage from '../../../assets/logo_lm.png';

export default function CardNivel() {
  return (
    <View style={styles.cardContainerNivel}>
      <LogoImage />
    </View>
  );
}