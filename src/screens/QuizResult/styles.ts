import {bottom, colors, top, width} from '@constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: top + 24,
    alignItems: 'center',
  },
  title: {
    marginHorizontal: 32,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  flat: {
    marginVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'column',
  },
  item: {
    width: width - 32,
    paddingVertical: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  question: {
    flex: 1,
    marginLeft: 16,
  },
  button: {
    marginBottom: bottom || 24,
  },
  separator: {
    height: 1,
    backgroundColor: colors.gray_EFEFEF,
  },
});
