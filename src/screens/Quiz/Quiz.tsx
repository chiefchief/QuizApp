import React from 'react';
import {useMemo, useTranslation} from '@hooks';
import {View, Text} from '@components';
import styles from './styles';
import {TAppState} from '@reducers/index';
import {connect} from 'react-redux';
import {Pressable} from 'react-native';
import {animation} from '@helpers';
import {Dispatch} from 'redux';
import {addAnswer} from '@reducers/quiz';

const Quiz: React.FC<TProps> = ({quiz, dispatch}) => {
  const {t} = useTranslation();
  const currentItem = useMemo(() => quiz.initialData[quiz.currentQuestion], [quiz]);

  const trueAnswer = () => dispatch(addAnswer(currentItem.correct_answer.toLocaleLowerCase() === 'true'));
  const falseAnswer = () => dispatch(addAnswer(currentItem.correct_answer.toLocaleLowerCase() === 'false'));

  animation();
  return (
    <View style={styles.container}>
      <Text style={styles.category}>{currentItem?.category || ''}</Text>
      <View style={styles.body}>
        <View style={styles.questionBlock}>
          <Text style={styles.questionText}>{currentItem?.question || ''}</Text>
          <View style={styles.questionBottom}>
            <Pressable style={styles.button} onPress={trueAnswer}>
              <Text style={styles.buttonText}>{t('True')}</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={falseAnswer}>
              <Text style={styles.buttonText}>{t('False')}</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Text style={styles.counter}>
        {t('{{current}} of {{total}}', {current: quiz.currentQuestion + 1, total: quiz.initialData.length})}
      </Text>
    </View>
  );
};

const mapStateToProps = (state: TAppState) => ({
  quiz: state.quiz,
});
export default connect(mapStateToProps)(Quiz);

type TProps = {
  quiz: TAppState['quiz'];
  dispatch: Dispatch;
};
