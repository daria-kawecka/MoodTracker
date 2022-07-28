import { StyleSheet, Pressable, Text } from 'react-native';
import React, { FC } from 'react';
import { theme } from '../theme';
import Reanimated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { MoodOptionType } from '../types';

const ReanimatedPressable = Reanimated.createAnimatedComponent(Pressable);

type ButtonProps = {
  text: string;
  click: () => void;
  withOpacity: boolean;
  selectedMood?: MoodOptionType | undefined;
};

export const PrimaryButton: FC<ButtonProps> = ({
  text,
  click,
  selectedMood,
  withOpacity,
}) => {
  const buttonStyle = useAnimatedStyle(
    () => ({
      opacity: selectedMood ? withTiming(1) : withTiming(0.5),
      transform: [{ scale: selectedMood ? withTiming(1) : 0.8 }],
    }),
    [selectedMood],
  );

  return (
    <ReanimatedPressable
      style={[styles.container, withOpacity && buttonStyle]}
      onPress={click}>
      <Text style={styles.buttonText}>{text}</Text>
    </ReanimatedPressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colorPurple,
    width: 150,
    justifyContent: 'center',
    borderRadius: 20,
    padding: 10,
    alignSelf: 'center',
    opacity: 1,
  },
  buttonText: {
    textAlign: 'center',
    color: theme.colorWhite,
    fontFamily: theme.fontFamilyBold,
  },
});
