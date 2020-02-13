<template>
  <view>
    <!-- <view class="main__head">
      <text class="main__head_title"> LamiaChan </text>
        </view> 
        <button title="Detail" :on-press="() => navigation.navigate('Detail')"></button>
    -->
    <view class='main__view'>
      
        <scroll-view :content-container-style="{contentContainer: {paddingVertical: 20}}">
          
            <view v-for="(testapione,index) in testapi" :key="index">
              <view class="manga" >
                    <image :source="{uri: testapione.preview_image_url}" class="manga__img__pict"
                    :style="{width: 200, height: 300}" />
                    <!-- поифкисть это -->
                    <text :on-press="() => navigation.navigate('Detail', {mangaId: testapione.id})" class="manga__title">
                      {{ testapione.title }}
                    </text>
                  
              </view>
            </view>
            
            <view class='footer'>
            </view>
        
        </scroll-view>
      
    </view>
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
      testapi: [],
      url: {
          testapilink: 'http://192.168.88.186:8000/api/v1/manga/?format=json',
      },
    }
  },
  methods: {
    getHashtags(){
        axios.get(this.url.testapilink).then((response) => {
            this.testapi = response.data;
        });
    },
  },
    beforeMount(){
      this.getHashtags()
 },
}
</script>
<style>

    .footer{
      margin-top:200px;
    }

    .main__head{
      height: 80px;
      width: 100%;
      background-color: #11998e;
    }

    .main__head_title{
      font-size: 27px;
      position:absolute;
      top:38%;
      /*left: 20%;*/
      color: #fff;
    }

    .manga{
        text-align: center;
        margin-bottom: 15px;
        margin-left: 100px;
        margin-top: 25px;
    }

    
    .manga__title{
        text-align: center;
        font-size: 15px;
        color: #fff;
        width: 200px;
        height: 49px;
        padding: 3px; 
        background-color: rgba(0, 0, 0, 0.7);
        position:absolute;
        top:84%;

    }
</style>
<!-- Global styles -->
