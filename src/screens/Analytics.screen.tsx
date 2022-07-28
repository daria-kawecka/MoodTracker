import { groupBy } from 'lodash';
import React, { FC } from 'react';
import { View } from 'react-native';
import { VictoryPie } from 'victory-native';
import { useAppContext } from '../App.provider';
import { theme } from '../theme';

export const Analytics: FC = () => {
  const { moodList } = useAppContext();

  const data = Object.entries(groupBy(moodList, 'mood.emoji')).map(
    ([key, value]) => ({
      x: key,
      y: value.length,
    }),
  );

  return (
    <View>
      <VictoryPie
        labelRadius={80}
        radius={150}
        innerRadius={50}
        colorScale={[
          theme.colorPurple,
          theme.colorLavender,
          theme.colorBlue,
          theme.colorGrey,
          theme.colorWhite,
        ]}
        data={data}
      />
    </View>
  );
};
