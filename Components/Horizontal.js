import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';




export default function HorizontalView ({props}){


  
  return (<FlatList
    horizontal
    data = {props}
    renderItem = {(item)=> {
      return (
        <View style = {styles.container}>
      <Image style={styles.images} source={{uri: item.item.imageUrl}} />
      <Text style = {{
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10
      }}>
      {item.item.name} 
      </Text>
      <Text style={{ color: 'grey',
        marginTop:5
         }}>rating: {item.item.rating} review: {item.item.review}</Text>
      </View>
      );
    }}
    keyExtractor={(item, index) => index.toString()}
  />) ;
}
const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: 260
  },
  images: {
    width: 250,
    height: 180,
    borderRadius: 10,
    resizeMode: 'cover',
  },
})