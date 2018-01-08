import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { searchRowStyles } from './SearchRowStyles';

const SearchRow = ({ name, onPress }) => {
  const { containerStyle } = searchRowStyles;

  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

export default SearchRow;
