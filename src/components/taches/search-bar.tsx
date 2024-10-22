import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

export default function SearchBarTache() {
  const [searchQuery, setSearchQuery] = useState('');

  const search = (text:any) => {
    console.log("Searching for:", text);
  };

  const handleIconPress = () => {
    console.log("Icon pressed, executing search for:", searchQuery);
    search(searchQuery); 
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        onIconPress={handleIconPress}
        icon={() => <Icon name="search" size={24}  />} 
           />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
});
