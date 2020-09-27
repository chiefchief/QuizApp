import React from 'react';
import {TouchableOpacity, Text} from '@components';
import {StyleProp, ViewStyle, TextStyle, ActivityIndicator} from 'react-native';
import styles from './styles';
import {colors} from '@constants';

const UsualButton: React.FC<TProps> = ({onPress, title, loading, buttonStyle, titleStyle}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      style={[styles.loginButton, buttonStyle, loading && styles.loginButtonDisabled]}
    >
      {loading ? (
        <ActivityIndicator size={'small'} color={colors.white_FFFFFF} />
      ) : (
        <Text style={[styles.loginText, titleStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
UsualButton.defaultProps = {
  onPress: () => console.warn('Fill in onPress method'),
  title: 'Fill in Title',
  loading: false,
  buttonStyle: {},
  titleStyle: {},
};

export default UsualButton;

type TProps = {
  onPress?: () => void;
  title?: string;
  buttonStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  loading?: boolean;
};
