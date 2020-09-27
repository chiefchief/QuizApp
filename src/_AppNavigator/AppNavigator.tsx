import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Start,
  Quiz,
  QuizResult,
  // ADD NEW SCREEN
} from '@screens';
import {navigationRef, onStateChange} from '@services';
import {theme} from './options';

const InitialStack = createStackNavigator();
const HomeStack = createStackNavigator();

const HomeNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Start" component={Start} />
      <HomeStack.Screen name="Quiz" component={Quiz} />
      <HomeStack.Screen name="QuizResult" component={QuizResult} options={{gestureEnabled: false}} />
    </HomeStack.Navigator>
  );
};

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer theme={theme} ref={navigationRef} onStateChange={onStateChange}>
      <InitialStack.Navigator screenOptions={{headerShown: false}}>
        <InitialStack.Screen name="HomeNavigator" component={HomeNavigator} />
      </InitialStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
