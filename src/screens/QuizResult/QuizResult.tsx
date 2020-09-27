import React from 'react';
import {useEffect, useMemo, useTranslation} from '@hooks';
import {View, Text, UsualButton, FlatList, Icon} from '@components';
import styles from './styles';
import {popToTop} from '@services';
import {Dispatch} from 'redux';
import {TAppState} from '@reducers/index';
import {connect} from 'react-redux';
import {TAnswerItem} from '@types';
import {resetQuiz} from '@reducers/quiz';

const QuizResult: React.FC<TProps> = ({quiz, dispatch}) => {
  // QuizResult screen data.
  const {t} = useTranslation();
  const correct = useMemo(() => quiz.resultData.filter((item: TAnswerItem) => item.correct).length, [quiz]);
  const total = useMemo(() => quiz.initialData.length, [quiz]);

  useEffect(() => {
    return () => {
      dispatch(resetQuiz());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPress = () => popToTop();

  const renderItem = ({item}: {item: TAnswerItem}) => (
    <View style={styles.item}>
      <Icon name={`${item.correct}`} color={item.correct ? 'green' : 'red'} size={16} />
      <Text style={styles.question}>{item.question}</Text>
    </View>
  );
  const keyExtractor = (item: TAnswerItem) => `${item.id}`;
  const ItemSeparatorComponent = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('You scored')}</Text>
      <Text style={styles.title}>{`${correct}/${total}`}</Text>
      <FlatList
        style={styles.flat}
        data={quiz.resultData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
      <UsualButton title={t('Play Again')} onPress={onPress} buttonStyle={styles.button} />
    </View>
  );
};

const mapStateToProps = (state: TAppState) => ({
  quiz: state.quiz,
});
export default connect(mapStateToProps)(QuizResult);

type TProps = {
  quiz: TAppState['quiz'];
  dispatch: Dispatch;
};
