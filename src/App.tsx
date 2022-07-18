import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { BottomTabsNavigator } from './screens/BottomTabs.navigator';

export const App: FC = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
};
