import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { AppProvider } from './App.provider';
import { BottomTabsNavigator } from './screens/BottomTabs.navigator';

export const App: FC = () => (
  <AppProvider>
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  </AppProvider>
);
