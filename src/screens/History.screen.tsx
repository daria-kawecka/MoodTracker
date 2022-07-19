import React, { FC } from 'react';
import { View } from 'react-native';
import { useAppContext } from '../App.provider';
import { MoodItemRow } from '../components/MoodItemRow';

export const History: FC = () => {
  const { moodList } = useAppContext();
  return (
    <View>
      {moodList.map(item => (
        <MoodItemRow item={item} key={item.timestamp} />
      ))}
    </View>
  );
};
