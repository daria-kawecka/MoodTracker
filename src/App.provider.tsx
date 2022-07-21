import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  AppContextType,
  AppProviderProps,
  MoodOptionType,
  MoodOptionWithTimestamp,
} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AppData = {
  moodList: MoodOptionWithTimestamp[];
};

const dataKey = 'my-app-data';

const setAppData = async (appData: AppData): Promise<void> => {
  try {
    await AsyncStorage.setItem(dataKey, JSON.stringify(appData));
  } catch {}
};

const getAppData = async (): Promise<AppData | undefined> => {
  try {
    const result = await AsyncStorage.getItem(dataKey);
    if (result) {
      return JSON.parse(result);
    }
  } catch {}
};

const AppContext = createContext<AppContextType>({
  moodList: [],
  handleSelectMood: () => {},
  handleDeleteMood: () => {},
});

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

  const handleSelectMood = useCallback((selectedMood: MoodOptionType) => {
    setMoodList(current => {
      const newMoodList = [
        ...current,
        { mood: selectedMood, timestamp: Date.now() },
      ];
      setAppData({ moodList: newMoodList });
      return newMoodList;
    });
  }, []);

  const handleDeleteMood = useCallback((mood: MoodOptionWithTimestamp) => {
    setMoodList(current => {
      const newMoodList = current.filter(
        val => val.timestamp !== mood.timestamp,
      );
      setAppData({ moodList: newMoodList });
      return newMoodList;
    });
  }, []);

  useEffect(() => {
    const fetchAppData = async () => {
      const data = await getAppData();
      if (data) {
        setMoodList(data.moodList);
      }
    };

    fetchAppData();
  }, []);

  return (
    <AppContext.Provider
      value={{ moodList, handleSelectMood, handleDeleteMood }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
