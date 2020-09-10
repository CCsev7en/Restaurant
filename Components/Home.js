
import React from 'react';
import { StyleSheet, Text, View, FlatList, Platform } from 'react-native';
import { SearchBar } from 'react-native-elements';
import HorizontalView from './Horizontal';
import { bold } from 'ansi-colors';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {search: ''};
    this.arrayholder = [];
  };


  componentDidMount() {
    return fetch('https://my-json-server.typicode.com/CCsev7en/JsonDemo/response')
    .then(response => response.json())
    .then(responseJson=> {
      this.setState({
        result: responseJson,
      },
      function() {
        this.arrayholder = responseJson;
      }
      )
    })
    .catch(error => {
      console.log(error);
    })
      
  };
  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state,callback)=>{
        return;
    };
}

clear = () => {
  this.search.clear();
};
SearchFilterFunction(text) {
    //passing the inserted text in textinput
    if(text === '') {
      return fetch('https://my-json-server.typicode.com/CCsev7en/JsonDemo/response')
    .then(response => response.json())
    .then(responseJson=> {
      this.setState({
        result: responseJson,
      },
      function() {
        this.arrayholder = responseJson;
      }
      )
    })
    .catch(error => {
      console.log(error);
    })
    }
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar

      item.restaurantList = item.restaurantList.filter(function(inneritem) {
        
        const itemData = inneritem.name ? inneritem.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        console.log(itemData)
        return itemData.indexOf(textData) > -1;
      });

      return item.restaurantList.length>0;
    });

    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      result: newData,
      search: text,
    });
  }


ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };

  render() {
    const {result } = this.state
    return (
      <View style={styles.viewStyle}>
      <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={text => this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          placeholder="Type Here..."
          value={this.state.search}
          platform = {Platform.OS}
        />
      <FlatList
          data = {this.state.result}
          renderItem = {({item}) => (
            <View>
            <Text style = {{
              fontWeight: "bold",
              fontSize: 25
            }}> {item.cateogory}</Text>
            <HorizontalView props = {item.restaurantList}/>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        </View>
    );
  }
}


const styles = StyleSheet.create({

  viewStyle: {
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: 'white',
  },
});


export default Home