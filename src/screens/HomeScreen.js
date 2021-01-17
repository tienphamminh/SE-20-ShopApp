import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';
import CardDeal from '../components/CardDeal';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Entypo';

const data = [
  'Clothing',
  'Toys',
  'Diapers',
  'Feeding',
  'Stroller',
  'Shoes',
  'Accessories',
];

const listdeal = [
  {
    type: 'Navi coat',
    price: '$9',
  },
  {
    type: 'Whale toy',
    price: '$9',
  },
  {
    type: 'Bear toy',
    price: '$9',
  },
];

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <View style={styles.listcardTop}>
        <Text style={styles.titleCatalogue}>Category</Text>
        <View style={styles.listcard}>
          {data.map(e => {
            return (
              <Card onPress={() => navigation.navigate('Cart')} title={e} />
            );
          })}
        </View>
      </View>
      <View style={styles.listdeal}>
        <View style={styles.titlecontainer}>
          <Text style={styles.title}>Deal of the Day</Text>
          <View style={styles.chevron}>
            <Text style={styles.seemore}>See more</Text>
            <Icon name="chevron-thin-right" size={18} />
          </View>
        </View>
        <View>
          {listdeal.map(e => {
            return <CardDeal {...e} />;
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  listcardTop: {
    backgroundColor: '#fff',
  },
  listcard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  titleCatalogue: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 16,
  },
  seemore: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'gray',
  },
  chevron: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titlecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HomeScreen;