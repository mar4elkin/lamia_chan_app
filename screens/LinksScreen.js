import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image, StyleSheet } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://192.168.88.186:8000/api/v1/manga/')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(

      <View style={styles.MainContainer}>
        <FlatList
          data={ this.state.dataSource }
          ItemSeparatorComponent = {this.FlatListItemSeparator}
          renderItem={({item}) => 
              <View>
                <Image source = {{ uri: item.preview_image_url }} style={styles.imageView} />
                <Text style={styles.textView}>{item.title}</Text>
              </View>
            }
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer :{
  
      justifyContent: 'center',
      flex:1,
      margin: 5,
      marginTop: (Platform.OS === 'ios') ? 5 : 0,
  
  },
  
  imageView: {
  
      width: '50%',
      height: 300 ,
      margin: 7,
      borderRadius : 7,
      marginBottom:15,
      marginTop: 15,
      marginLeft:100,
  
  },
  
  textView: {
    
      textAlign:'center',
      padding:3,
      color: 'white',
      width: '80%',
      height: 49,
      left: '10%',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      marginBottom:15,
  
  }
 
});