import {initialWindowSafeAreaInsets, Dimensions} from 'react-native-safe-area-context';

export const {width, height} = Dimensions.get('window');
export const top = initialWindowSafeAreaInsets?.top || 20;
export const bottom = initialWindowSafeAreaInsets?.bottom || 0;
