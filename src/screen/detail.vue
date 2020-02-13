<template>
  <view class="container">
    <text> manga id = {{ navigation.getParam("mangaId") }} </text>
    <button title="Go to home screen" @press="goToHomeScreen"></button>
  </view>
</template>

<script>
export default {
  // Declare `navigation` as a prop
  props: {
    navigation: {
      type: Object,
    }
  },
  name: 'app',
    data(){
    return {
    }
  },
  methods: {
    goToHomeScreen() {
      this.navigation.navigate("Home");
    },
  }
}
</script>