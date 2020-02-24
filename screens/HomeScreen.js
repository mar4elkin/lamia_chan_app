import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image, StyleSheet, Button } from 'react-native';

import {
  NavigationContainer,
  NavigationContext,
} from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return <FetchExample />;
}

class FetchExample extends React.Component {
  static contextType = NavigationContext;

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

    const navigation = this.context;

    return(

      <View style={styles.MainContainer}>
        <FlatList
          data={ this.state.dataSource.results }
          ItemSeparatorComponent = {this.FlatListItemSeparator}
          renderItem={({item}) => 
              <View>
                <Image 
                      source = {{ uri: item.preview_image_url }} 
                      style={styles.imageView} 
                />
                <Text onPress={() => navigation.navigate('Манга', { mangaId: item.id })}
                      style={styles.textView}>{item.title}</Text>
              </View>
            }
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

function MangaScreen({ route, navigation }) {

  const { mangaId } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> { JSON.stringify(mangaId) } </Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator initialRouteName="Каталог">
        <Stack.Screen name="Каталог" component={HomeScreen} />
        <Stack.Screen name="Манга" component={MangaScreen} />
      </Stack.Navigator>
  );
}

export default App;

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