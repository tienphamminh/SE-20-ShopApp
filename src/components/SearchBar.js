import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="gray" />
        <TextInput placeholder="Search" style={styles.input} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchBar: {
    flexDirection: 'row',
    flex: 1,
    borderWidth: 1,
    borderColor: '#0f0f0f',
    borderRadius: 8,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginHorizontal: 12,
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    paddingVertical: 5,
  },
  badge: {
    position: 'absolute',
    backgroundColor: '#E6848C',
    width: 18,
    height: 18,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    right: -4,
    top: -4,
  },
  badgeText: {
    color: '#fff',
  },
});

export default SearchBar;
