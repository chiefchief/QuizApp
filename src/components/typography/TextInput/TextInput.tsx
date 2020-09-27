import React, {forwardRef} from 'react';
import {TextInput as TI, TextInputProps} from 'react-native';
import styles from './styles';

const TextInput: React.ForwardRefRenderFunction<TI, TextInputProps> = ({style, ...TIProps}, ref) => {
  return <TI ref={ref} style={[styles.defaultText, style]} {...TIProps} />;
};

export default forwardRef(TextInput);
