import {bottom, colors, top, width} from '@constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: top + 24,
    flex: 1,
  },
  title: {
    paddingHorizontal: 48,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropDown: {
    width: width - 32,
    borderRadius: 16,
    // borderWidth: 1,
    height: 40,
    marginBottom: 16,
  },
  textInput: {
    width: width - 32,
    paddingHorizontal: 16,
    height: 40,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonStyle: {
    marginBottom: bottom || 24,
  },
  borderBlack: {
    borderColor: colors.black_000000,
  },
  buttonView: {
    width: width - 32,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
