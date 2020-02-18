<template>
  <app-navigator></app-navigator>
</template>

<script>
import {
  createAppContainer,
  createStackNavigator,
} from "vue-native-router";

import HomeScreen from "./screen/home.vue";
import DetailScreen from "./screen/detail.vue";
import ReadScreen from "./screen/read.vue";

const StackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen,
    Read: ReadScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { AppNavigator },
  
}
</script>