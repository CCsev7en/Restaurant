import React from 'react';
import { Text, View } from 'react-native';

export default function Detail ({route, navigation}) {
    const item = route.params
    return (<View>
    <Text>{item.item.item.name} </Text>
    </View>);
}