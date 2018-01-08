import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { searchBarStyles } from './SearchBarStyles';

const SearchBar = ({ value, onChangeText }) => {
  const { containerStyle, inputStyle } = searchBarStyles;

  return (
    <View style={containerStyle}>
      <TextInput onChangeText={onChangeText} value={value} style={inputStyle} />
    </View>
  );
};

export default SearchBar;
