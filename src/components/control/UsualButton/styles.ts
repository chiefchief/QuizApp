import {StyleSheet} from 'react-native';
import {colors, width} from '@constants';

export default StyleSheet.create({
  loginButton: {
    maxWidth: width - 32,
    minWidth: (width / 5) * 2,
    height: 40,
    borderRadius: 5,
    backgroundColor: colors.blue_1F8EFA,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonDisabled: {
    backgroundColor: colors.blue_1F8EFA_40,
  },
  loginText: {
    color: colors.white_FFFFFF,
    textTransform: 'uppercase',
    fontSize: 16,
  },
});
