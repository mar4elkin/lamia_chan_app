<template>
    <view>
      <scroll-view :content-container-style="{contentContainer: {paddingVertical: 20}}">
        <view class="manga">
          <view class="main__manga_content" :style="{borderBottomColor: '#11998e',borderBottomWidth: 2,marginBottom: 10,}">
            
            <!-- <text>{{ navigation.getParam("mangaId") }} </text> --> 
            
            <text class="manga__title">{{ navigation.getParam("mangaTitle") }} </text>
            
            <view class="img__block">
              <image :source="{uri: detail_image }" :style="{width: 200, height: 300}" class="manga__img__pict"/>
            </view>
        

            <text class="manga___description">{{ navigation.getParam("mangaDescription") }} </text>

            </view>
            
            <!--<button title="Go to home screen" @press="goToHomeScreen"></button>-->
            
            <view class="chapters_container">
              <view class="chapter_elm" v-for="(chapter,index) in chapters" :key="index" :style="{borderBottomColor: '#11998e',borderBottomWidth: 1,marginBottom: 2,}">
                 <text :on-press="() => navigation.navigate('Read', {
                        
                        chapterId: chapter.id,
                        
                        })">
                      {{ chapter.title }}
                  </text>

                
              </view>
            </view>
          
          
          </view>
          
        </scroll-view>
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
      chapters: this.navigation.getParam("mangaChapters"),
    }
  },
  methods: {
    goToHomeScreen() {
      this.navigation.navigate("Home");
    },
  }
}
</script>
<style>
    .chapter_elm{
      margin-top: 10px;
    }
    .chapters_container{

      
    }

    .manga___description{
      text-align: center;
      margin-bottom: 10px;
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
    }

    .manga__img__pict{
      margin-left:100px;
      margin-bottom: 20px;
    }

    
    .manga__title{
        text-align:center;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 20px;
        margin-bottom: 40px;
    }

</style>