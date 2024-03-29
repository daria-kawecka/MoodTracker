import React, { FC } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { useAppContext } from '../App.provider';

const imageUrl =
  'https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1766&q=80';

export const Home: FC = () => {
  const { handleSelectMood } = useAppContext();

  return (
    <ImageBackground style={styles.container} source={{ uri: imageUrl }}>
      <MoodPicker handleSelectMood={handleSelectMood} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'lightgreen',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
