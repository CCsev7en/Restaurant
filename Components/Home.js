
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';



class Home extends React.Component {
  constructor(props) {
      super(props)
    this.state = {search: ''};
  };


  componentDidMount() {
    return fetch('https://my-json-server.typicode.com/CCsev7en/JsonDemo/response')
    .then(response => response.json())
    .then(resposneJson=> {
      this.setState({
        result: resposneJson,
      })
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

  render() {
    const {result } = this.state
    return (
      <View style={styles.container}>
      <FlatList
          data = {this.state.result}
          renderItem = {({item}) => (
            <Text> {item.cateogory}</Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Home