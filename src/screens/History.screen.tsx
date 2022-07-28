import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { useAppContext } from '../App.provider';
import { MoodItemRow } from '../components/MoodItemRow';

export const History: FC = () => {
  const { moodList } = useAppContext();
  return (
    <ScrollView>
      {moodList.slice().map(item => (
        <MoodItemRow item={item} key={item.timestamp} />
      ))}
    </ScrollView>
  );
};
