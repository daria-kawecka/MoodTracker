import { StyleSheet, Pressable, Text } from 'react-native';
import React, { FC } from 'react';
import { theme } from '../theme';

type ButtonProps = {
  text: string;
};

export const PrimaryButton: FC<ButtonProps> = ({ text }) => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colorPurple,
    width: 150,
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 20,
    padding: 10,
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: theme.colorWhite,
    fontWeight: 'bold',
  },
});
