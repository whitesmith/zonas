import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { timezoneRowStyles } from './TimezoneRowStyles';
import moment from 'moment';

const renderHours = offset => {
  const { hourSquareStyle } = timezoneRowStyles;
  const hours = [];
  const hourWidth = Dimensions.get('window').width / 6;
  for (var hour = 0; hour < 24; hour++) {
    hours.push(
      <View style={[hourSquareStyle, { width: hourWidth }]} key={hour}>
        <Text>
          {moment()
            .add(hour + offset, 'h')
            .format('Ha')}
        </Text>
      </View>
    );
  }
  return hours;
};

const TimezoneRow = ({ name, offset, onPress }) => {
  const { hourRowStyle, hourSquareStyle } = timezoneRowStyles;

  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{name}</Text>
      <View style={hourRowStyle}>{renderHours(offset)}</View>
    </TouchableOpacity>
  );
};

export default TimezoneRow;
