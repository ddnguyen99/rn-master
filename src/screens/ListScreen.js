import React from 'react';
import { FlatList, StyleSheet, Text, View} from 'react-native';

const ListName = () =>{
  const Friends = [
    {name : 'Friend 1'},
    {name : 'Friend 2'},
    {name : 'Friend 3'},
    {name : 'Friend 4'},
    {name : 'Friend 5'},
    {name : 'Friend 6'},
    {name : 'Friend 8'},

  ];

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={friend => friend.name} 
      data = {Friends}
      renderItem = {({item}) => {
        return <Text style = {styles.textStyle}> {item.name} </Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle:{
    marginVertical: 40,
  }
});

export default ListName;