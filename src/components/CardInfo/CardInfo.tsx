import React from 'react';
import { Text, SectionList } from 'react-native';

import { styles } from './CardInfoStyles';

export function CardInfo() {
  return (
   <>
    <Text style={styles.titulo}>INFORMAÇÕES</Text>
<SectionList
        sections={[
          {title: 'Graduações', data: ['Ciência da Computação', 'Sistema de Informação']},
          {
            title: 'Linguagens',
            data: [
              'JAVA',
              'PHP',
              'JavaScript',
              'Golang',
             
            ],
          },
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={item => `basicListEntry-${item}`}
      />
   </>
  );
}