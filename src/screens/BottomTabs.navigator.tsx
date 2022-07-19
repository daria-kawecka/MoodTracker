import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { Text } from 'react-native';
import { AnalyticsIcon, HistoryIcon, HomeIcon } from '../components/Icons';
import { theme } from '../theme';
import { Analytics } from './Analytics.screen';
import { History } from './History.screen';
import { Home } from './Home.screen';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colorBlue,
        tabBarInactiveTintColor: theme.colorGrey,
        tabBarShowLabel: false,
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
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{ title: "Today's mood" }}
      />
      <BottomTabs.Screen
        name="History"
        component={History}
        options={{ title: 'Past moods' }}
      />
      <BottomTabs.Screen
        name="Analytics"
        component={Analytics}
        options={{ title: 'Fancy graphs' }}
      />
    </BottomTabs.Navigator>
  );
};
