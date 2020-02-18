<template>
    <view>
      <scroll-view :content-container-style="{contentContainer: {paddingVertical: 20}}">


          <view v-for="(chapterkey,index) in chapter" :key="index">

                <image :source="{uri: 'http://192.168.88.186:8000' + chapterkey.image }" :style="{width: 200, height: 300}" />

                <text> {{ chapterkey.image }} </text>
          </view>


        </scroll-view>
    </view>
</template>

<script>

import axios from 'axios' 

export default {
  props: {
    navigation: {
        type: Object
    }
  },
  name: 'app',
    data(){
    return {
      chapter: [],
      url: {
          link: 'http://192.168.88.186:8000/api/v1/chapter/',
      },
    }
  },
  methods: {
    getHashtags(){

        var chapterLink = this.url.link + this.navigation.getParam("chapterId");

        axios.get(chapterLink).then((response) => {
            this.chapter = response.data.page_set;
        });
        
    },
  },
    beforeMount(){
      this.getHashtags()
 },
}
</script>