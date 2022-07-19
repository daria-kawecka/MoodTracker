import { ReactNode } from 'react';

export type MoodOptionType = {
  emoji: string;
  description: string;
};

export type MoodOptionWithTimestamp = {
  mood: MoodOptionType;
  timestamp: number;
};

export type AppProviderProps = {
  children: ReactNode;
};
