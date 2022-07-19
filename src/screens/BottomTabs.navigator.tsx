import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { Text } from 'react-native';
import { AnalyticsIcon, HistoryIcon, HomeIcon } from '../components/Icons';
import { Analytics } from './Analytics.screen';
import { History } from './History.screen';
import { Home } from './Home.screen';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            return <HomeIcon color={color} size={size} />;
          }
          if (route.name === 'History') {
            return <HistoryIcon color={color} size={size} />;
          }
          if (route.name === 'Analytics') {
            return <AnalyticsIcon color={color} size={size} />;
          }
          return null;
        },
      })}>
      <BottomTabs.Screen name="Home" component={Home} />
      <BottomTabs.Screen name="History" component={History} />
      <BottomTabs.Screen name="Analytics" component={Analytics} />
    </BottomTabs.Navigator>
  );
};
