import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const featuredItems = [
  {id: '1', title: 'Item 1'},
  {id: '2', title: 'Item 2'},
  {id: '3', title: 'Item 3'},
];

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateToSettings = () => {
    navigation.navigate('Settings');
  };

  const renderItem = ({item}: {item: {id: string; title: string}}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the TV App!</Text>

      <Text style={styles.featuredTitle}>Featured Items</Text>

      <FlatList
        data={featuredItems}
        renderItem={renderItem}
        keyExtractor={(item: {id: string}) => item.id}
        contentContainerStyle={styles.featuredList}
      />

      <TouchableOpacity
        style={styles.settingsButton}
        onPress={handleNavigateToSettings}>
        <Text style={styles.settingsButtonText}>Go to Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 150,
    backgroundColor: '#f5f5f5',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  featuredTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  featuredList: {
    width: '100%',
    paddingHorizontal: 10,
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  settingsButton: {
    backgroundColor: '#81b0ff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 30,
  },
  settingsButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default HomeScreen;
