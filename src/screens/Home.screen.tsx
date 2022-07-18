import React, { FC, useCallback, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { MoodOptionType, MoodOptionWithTimestamp } from '../types';
import { format } from 'date-fns';

export const Home: FC = () => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

  const handleSelectMood = useCallback((selectedMood: MoodOptionType) => {
    setMoodList(current => [
      ...current,
      { mood: selectedMood, timestamp: Date.now() },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <MoodPicker handleSelectMood={handleSelectMood} />
      {moodList.map(item => (
        <Text key={item.timestamp}>
          {item.mood.emoji}{' '}
          {format(new Date(item.timestamp), "d MMM, yyyy 'at' hh:mmaaa")}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
