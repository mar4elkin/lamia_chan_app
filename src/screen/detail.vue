<template>
  <view class="container">

      <text>{{ navigation.getParam("mangaId") }} </text>
      <text>{{ navigation.getParam("mangaTitle") }} </text>
      <image :source="{uri: detail_image }" :style="{width: 200, height: 300}" />
      <text>{{ navigation.getParam("mangaDescription") }} </text>
      <!--<button title="Go to home screen" @press="goToHomeScreen"></button>-->
      <text>{{ navigation.getParam("mangaChapters") }}</text>
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
      detail_image: this.navigation.getParam("mangaPreview"),
    }
  },
  methods: {
    goToHomeScreen() {
      this.navigation.navigate("Home");
    },
  }
}
</script>