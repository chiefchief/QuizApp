import React, {useMemo} from 'react';
import {useTranslation, useState, useRef} from '@hooks';
import {View, Text, KeyboardAvoidingView, UsualButton, TextInput, Keyboard, DropDownPicker} from '@components';
import styles from './styles';
import {itemsData, TItem} from './itemsData';
import {Alert, TextInput as TI} from 'react-native';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {getQuiz} from '@reducers/quiz';
import {TAppState} from '@reducers/index';
import {push} from '@services';

const Start: React.FC<TProps> = ({dispatch, _global, quiz}) => {
  // Start screen data.
  const {t} = useTranslation();
  const [amount, setAmount] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const inputRef = useRef<TI>(null);
  let controller: any;

  const displayContinue = useMemo(() => quiz.resultData.length !== quiz.initialData.length, [quiz]);

  const onStartShouldSetResponder = () => {
    Keyboard.dismiss();
    controller.close();
    return true;
  };

  const onChangeItem = (item: TItem) => setDifficulty(item.value);

  const begin = () => {
    if (!difficulty) {
      Alert.alert('Select difficulty', '', [
        {
          text: 'OK',
          onPress: () => controller.open(),
        },
      ]);
    } else if (!amount) {
      Alert.alert('Input amount', '', [
        {
          text: 'OK',
          onPress: () => inputRef.current?.focus(),
        },
      ]);
    } else {
      const params = {amount, difficulty, type: 'boolean'};
      dispatch(getQuiz(params));
    }
  };
  const continueQuiz = () => push('Quiz');

  return (
    <KeyboardAvoidingView style={styles.container} onStartShouldSetResponder={onStartShouldSetResponder}>
      <Text style={styles.title}>{t('Welcome to the Challenge')}</Text>
      <View style={styles.body}>
        <DropDownPicker
          items={itemsData}
          controller={(instance) => (controller = instance)}
          placeholder={t('Difficulty')}
          containerStyle={styles.dropDown}
          style={styles.borderBlack}
          dropDownStyle={styles.borderBlack}
          onChangeItem={onChangeItem}
        />
        <TextInput
          style={styles.textInput}
          ref={inputRef}
          maxLength={2}
          value={amount}
          placeholder={t('Amount')}
          onChangeText={setAmount}
          keyboardType={'number-pad'}
        />
      </View>
      <View style={styles.buttonView}>
        <UsualButton loading={_global.loader} buttonStyle={styles.buttonStyle} title={t('Begin')} onPress={begin} />
        {displayContinue && (
          <UsualButton buttonStyle={styles.buttonStyle} title={t('Continue')} onPress={continueQuiz} />
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = (state: TAppState) => ({
  _global: state._global,
  quiz: state.quiz,
});

export default connect(mapStateToProps)(Start);

type TProps = {
  _global: TAppState['_global'];
  dispatch: Dispatch;
  quiz: TAppState['quiz'];
};
