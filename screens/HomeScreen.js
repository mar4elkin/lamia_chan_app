import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator, Text, View, Image, StyleSheet, ScrollView, SafeAreaView   } from 'react-native';

import {
  NavigationContainer,
  NavigationContext,
} from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return <MangaHomeScreen />;
}

class MangaHomeScreen extends React.Component {
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


function DetailScreen({ route, navigation }) {

  const [hasError, setErrors] = useState(false);
  const [mangaDarray, setmangaDarray] = useState({});
  
  const { mangaId } = route.params;

  const [tagsArrTitle, settagsArrTitle] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://192.168.88.186:8000/api/v1/manga/" + mangaId);
      res
        .json()
        .then(res => setmangaDarray(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  });

  /* 
    tagsList
    <FlatList style={{flexDirection:'row', flexWrap:'wrap'}} data={tagsArrTitle.tags}
      renderItem={({item}) => <Text style={styles.DetailTagsText}>{item}</Text>}
    />
  
  */

  return (
    <SafeAreaView    style={styles.DetailContainer}>
        <ScrollView >
        <Text style={styles.DetailtextView}>{mangaDarray.title}</Text>
        <Image 
              source = {{ uri: mangaDarray.preview_image_url }} 
              style={styles.DetailImageView} 
        />

        <Text style={styles.DetailDescriptionText}> {mangaDarray.description} </Text>

        <FlatList style={styles.mangaChaptersFlat} data={mangaDarray.chapter_set}
          renderItem={({item}) => <View style={styles.DetailChaptersView}>
              <Text style={styles.DetailChaptersText}>{item.title}
              {"                                    "}
              {item.updated.split('T', '1')}</Text>
            </View>}
        />

      </ScrollView >
    </SafeAreaView  >
  );
}



const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator initialRouteName="Каталог">
        <Stack.Screen name="Каталог" component={HomeScreen} />
        <Stack.Screen name="Манга" component={DetailScreen} />
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

  DetailContainer :{
    justifyContent: 'center',

  },

  DetailChaptersText :{
    justifyContent: 'center',
    padding:3,
    marginTop: 5,
    marginLeft: 25,
  
  },

  DetailDescriptionText: {
    textAlign:'left',
    width: '80%',
    marginLeft: 35,
    marginBottom: 20,
  },

  DetailChaptersView: {
    marginLeft: 10,
    borderColor: 'rgba(0, 0, 0, 0.7)',
    borderBottomWidth: 0.5,
    width: '90%',
  },

  mangaChaptersFlat : {
    borderColor: 'rgba(0, 0, 0, 0.7)',
    borderTopWidth: 1,
  },


  DetailtextView: {
      textAlign:'center',
      padding:3,
      color: 'white',
      width: '80%',
      height: 49,
      left: '10%',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      marginBottom:15,
      marginTop:15,
  },

  DetailImageView: {

      width: '75%',
      height: 450 ,
      margin: 7,
      borderRadius : 7,
      marginBottom:15,
      marginTop: 15,
      marginLeft:50,
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