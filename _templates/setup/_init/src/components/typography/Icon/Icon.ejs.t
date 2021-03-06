---
to: src/components/typography/Icon/Icon.tsx
unless_exists: true
---
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';

const icoMoonConfig = require('./selection.json');

const Icon = icoMoonConfig ? createIconSetFromIcoMoon(icoMoonConfig) : null;

export default Icon;
