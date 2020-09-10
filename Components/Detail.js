import React from 'react';
import { Text, View } from 'react-native';

export default function Detail ({route, navigation}) {
    
    const item = route.params
    console.log(item)
    return (<View>
    <Text>{item.item.name} </Text>
    </View>);
}