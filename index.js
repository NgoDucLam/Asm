/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './ASM/Login';
import Main from './ASM/Main';
import Sign from './ASM/Sign';

AppRegistry.registerComponent(appName, () => Main);
