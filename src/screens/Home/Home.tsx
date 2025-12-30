import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './HomeStyles';
import LogoLm from '../../../assets/logo_lm.png';
import BarraProgress from '../../../assets/barra_progresso.png';
import { CardInfo } from '../../components/CardInfo/CardInfo';

export function Home() {
  return (
    <View style={styles.container}>
      
      <View style={styles.card}>
       
        <View style={styles.BackImg} >
          <Image
            style={styles.cardNivelImg} 
            source={LogoLm} alt="" />
        </View>
   
        <View>
            <Text style={{fontSize:10, fontWeight:'bold', marginBottom:-2, textAlign:'right', marginRight:30}}>
              XP 2000 / 10000
            </Text>
            <Image
            style={styles.barraProgress}
             source={BarraProgress} />

            <Text style={styles.nomePerfil}>Leandro Moreira</Text>
        </View>
      </View>

      <View style={styles.card}>
        <CardInfo />
      </View>


    </View>
  );
}