import React from 'react';
import {useTranslation} from '@hooks';
import {View, Text} from '@components';
import styles from './styles';

const Start: React.FC<TProps> = () => {
  // Start screen data.
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{t('Welcome to ArtJoker team')}</Text>
    </View>
  );
};

export default Start;

type TProps = {};
