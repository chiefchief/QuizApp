import {bottom, colors, top} from '@constants';
import {shadowBlock} from '@helpers';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: top + 24,
  },
  category: {
    marginHorizontal: 32,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  questionBlock: {
    marginHorizontal: 32,
    paddingTop: 16,
    backgroundColor: colors.white_FFFFFF,
    borderRadius: 8,
    ...shadowBlock,
  },
  questionText: {
    marginHorizontal: 32,
    marginVertical: 40,
    textAlign: 'center',
  },
  questionBottom: {
    borderTopWidth: 1,
    paddingHorizontal: 32,
    paddingVertical: 8,
    borderColor: colors.gray_EFEFEF,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderWidth: 1,
    borderColor: colors.blue_1F8EFA,
    height: 40,
    paddingHorizontal: 16,
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: colors.blue_1F8EFA,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  counter: {
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: bottom || 24,
  },
});
