import * as React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image 
          source = {{ uri: 'https://lh3.googleusercontent.com/proxy/BjvqWl8kL8SsBaea08fnL9DnM5-46YyHUftGkkC5mDb5yX-L0nl63iIGg_xx2jsLybzg5wPtRtZCNtHoRIpC6WyLAAv9S1RSm2K52Ykmngxa7g' }} 
          style={styles.imageView} 
        />
    </View>
  );
  
}

const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
  );
}

export default App;


const styles = StyleSheet.create({
  imageView: {
  
      width: '100%',
      height: 600 ,
      borderRadius : 7,
  
  }
});