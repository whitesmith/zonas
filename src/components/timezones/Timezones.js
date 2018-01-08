import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import { timezonesStyles } from './TimezonesStyles';
import {
  loadTimezonesToStore,
  searchTextChanged,
  addTimezone,
  removeTimezone
} from 'actions';
import TimezoneRow from './timezoneRow/TimezoneRow';
import SearchBar from './searchBar/SearchBar';
import SearchRow from './searchRow/SearchRow';

class Timezones extends Component {
  componentWillMount() {
    console.log(this.props.timezoneList, this.props.timezoneList.length);
    if (this.props.timezoneList.length === 0) {
      const rawList = require('../../../timezones/timezones.json');
      this.props.loadTimezonesToStore(rawList);
    }
  }

  _renderTimezoneList = timezoneList => {
    const { container } = timezonesStyles;
    return (
      <ScrollView
        style={container}
        contentContainerStyle={{ width: Dimensions.get('window').width * 4 }}
      >
        {timezoneList.map(timezone => (
          <TimezoneRow
            name={timezone.text}
            offset={timezone.offset}
            key={timezone.value}
            onPress={() => this.props.removeTimezone(timezone)}
          />
        ))}
      </ScrollView>
    );
  };

  _renderSearchList = timezoneSearchList => {
    const { container } = timezonesStyles;
    return (
      <ScrollView style={container}>
        {timezoneSearchList.map(timezone => (
          <SearchRow
            name={timezone.text}
            onPress={() => this.props.addTimezone(timezone)}
            key={timezone.value}
          />
        ))}
      </ScrollView>
    );
  };

  render() {
    const { container } = timezonesStyles;
    const {
      searchTextChanged,
      searchText,
      searchList,
      myTimezoneList
    } = this.props;
    const onSearch = searchText.length > 0;
    return (
      <View style={container}>
        <SearchBar onChangeText={searchTextChanged} value={searchText} />
        {onSearch && this._renderSearchList(searchList)}
        {!onSearch && this._renderTimezoneList(myTimezoneList)}
      </View>
    );
  }
}

const mapStateToProps = ({ timezone }) => {
  const { searchText, searchList, timezoneList, myTimezoneList } = timezone;
  return {
    searchText,
    searchList,
    timezoneList,
    myTimezoneList
  };
};

export default connect(mapStateToProps, {
  loadTimezonesToStore,
  searchTextChanged,
  addTimezone,
  removeTimezone
})(Timezones);
