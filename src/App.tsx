import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { AppProvider } from './App.provider';
import { BottomTabsNavigator } from './screens/BottomTabs.navigator';
import { Platform, UIManager } from 'react-native';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export const App: FC = () => (
  <AppProvider>
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  </AppProvider>
);
