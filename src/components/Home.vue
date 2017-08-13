<template>
  <div id="app">
      <div class="g-header-wrap">
        <div class="g-header">
          <i class="iconfont icon1">&#xe640;</i>
          <input type="text" placeholder="全球好奶，低至一折起..."/>
          <i class="iconfont find">&#xe691;</i>
          <div class="g-header-right">
            <i class="iconfont">&#xe670;</i>
            <p>消息</p>
          </div>
        </div>
      </div>

      <div class="g-banner-wrap">
        <div class="g-banner">
          
          <mt-swipe :auto="4000">
            <mt-swipe-item>
              <img src="../static/img/banner1.png" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../static/img/banner1.png" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../static/img/banner1.png" alt="">
            </mt-swipe-item>
          </mt-swipe>
        
        </div>
      </div>

      <div class="g-nav-wrap">
        <div class="g-nav">
          <ul>
            <li>
              <a href="javascript:;">
                <div class="font-wrap">
                  <i class="iconfont">&#xe63b;</i>
                </div>
                <p>家用电器</p>
              </a>  
            </li>
          <li>
              <a href="javascript:;">
                <div class="font-wrap">
                  <i class="iconfont">&#xe63b;</i>
                </div>
                <p>家用电器</p>
              </a>  
            </li>
            <li>
              <a href="javascript:;">
                <div class="font-wrap">
                  <i class="iconfont">&#xe63b;</i>
                </div>
                <p>家用电器</p>
              </a>  
            </li>
            <li>
              <a href="javascript:;">
                <div class="font-wrap">
                  <i class="iconfont">&#xe63b;</i>
                </div>
                <p>家用电器</p>
              </a>  
            </li>
            <li>
              <a href="javascript:;">
                <div class="font-wrap">
                  <i class="iconfont">&#xe63b;</i>
                </div>
                <p>家用电器</p>
              </a>  
            </li>
            <li>
              <a href="javascript:;">
                <div class="font-wrap">
                  <i class="iconfont">&#xe63b;</i>
                </div>
                <p>家用电器</p>
              </a>  
            </li>
            <li>
              <a href="javascript:;">
                <div class="font-wrap">
                  <i class="iconfont">&#xe63b;</i>
                </div>
                <p>家用电器</p>
              </a>  
            </li>
            <li>
              <a href="javascript:;">
                <div class="font-wrap">
                  <i class="iconfont">&#xe63b;</i>
                </div>
                <p>家用电器</p>
              </a>  
            </li>
            
          </ul>
        </div>
      </div>

      <div class="g-section-wrap">
      
          <div class="g-section-top">
            <div class="g-section">
                <div class="g-section-left">
                   
                        <div class="section-icon-wrap"> 
                          <i class="iconfont">&#xe6bf;</i>
                        </div>
                        <p>热门推荐</p> 
                            
                </div>
              
                <div class="g-section-right">
                   <router-link to="/fav">
                      <p>更多推荐 <i class="iconfont">&#xe7b7;</i></p>   
                   </router-link>  
                     
                </div>
            </div>
          </div>

          <div class="g-section-content">
            <ul>
              <li>
                <img src="../static/img/section1.png" alt="" />
                <p>九阳紫砂电饭锅</p>
                <p>￥388</p>
              </li>
              <li>
                <img src="../static/img/section1.png" alt="" />
                <p>九阳紫砂电饭锅</p>
                <p>￥388</p>
              </li>
              <li>
                <img src="../static/img/section1.png" alt="" />
                <p>九阳紫砂电饭锅</p>
                <p>￥388</p>
              </li>
              <li>
                <img src="../static/img/section1.png" alt="" />
                <p>九阳紫砂电饭锅</p>
                <p>￥388</p>
              </li>
            </ul>
          </div>
        
          <div class="g-cover"></div>
      </div>
      
      <div class="g-favourable">
          <div class="g-section-top">
              <div class="g-section">
                  <div class="g-section-left">
                    <div class="section-icon-wrap">
                      <i class="iconfont">&#xe768;</i>
                    </div>
                    <p>聚优惠</p> 
                  </div>
                
                  <div class="g-section-right">
                    <p>更多优惠 <i class="iconfont">&#xe7b7;</i></p>   
                  </div>
                </div>
            </div>
            
            <div class="g-favourable-content-wrap">
              <div class="g-favourable-content">
                  <div class="g-favourable-content-left">
                    <div>
                        <p>创维32寸彩电</p>
                        <p>月销三千，全国联保</p>
                        <p>￥888 <span>￥388</span></p>
                    </div>
                    <div>
                        <img src="../static/img/fav1.png" alt="" />
                    </div>
                    
                    
                  </div>

                  <div class="g-favourable-content-right">
                      <div class="content-top">
                        <div class="g-favourable-content-word">
                            <p>空气净化器家用</p>
                            <p>一年换新，五年保修</p>
                            <p>￥888 <span>￥388</span></p>
                        </div>
                        <div class="g-favourable-content-pic">
                            <img src="../static/img/fav2.png" alt="" />  
                        </div>  
                      </div>
                      <div class="content-top">
                        <div>
                            <p>空气净化器家用</p>
                            <p>一年换新，五年保修</p>
                            <p>￥888 <span>￥388</span></p>
                        </div>
                        <div>
                            <img src="../static/img/fav2.png" alt="" />  
                        </div>  
                      </div>
                   
                  </div>
              </div>
            </div>
      
      
      
      </div>
      
      <div class="g-aside-wrap">
        <div class="g-aside">
          <img src="../static/img/main1.png" alt="">
        </div>
        <div class="g-aside-bottom">
          <p>为你推荐</p>
          <div class="line-left"></div>
          <div class="line-right"></div>
        </div>
        
      </div>
      
      <div class="g-bottom-wrap">
        <div class="g-bottom">
          <ul>
            <li>
                <img src="../static/img/bottom1.png" alt="">
                <p class="content">这是一款很不错的手机,价格比较便宜，性价比相当高</p>
                <p>￥488</p>
            </li>
             <li>
                <img src="../static/img/bottom1.png" alt="">
                <p>这是一款很不错的手机,价格比较便宜，性价比相当高</p>
                <p>￥488</p>
            </li>
             <li>
                <img src="../static/img/bottom1.png" alt="">
                <p>这是一款很不错的手机,价格比较便宜，性价比相当高</p>
                <p>￥488</p>
            </li>
             <li>
                <img src="../static/img/bottom1.png" alt="">
                <p>这是一款很不错的手机,价格比较便宜，性价比相当高</p>
                <p>￥488</p>
            </li>
          </ul>
        </div>
      </div>


      <div class="g-footer-wrap">
        <div class="g-footer">
          <div class="g-footer-content">
            <a href="javascript:;">
                <i class=iconfont>&#xe67b;</i>
                <p>首页</p>
            </a>
          </div>
          <div class="g-footer-content">
            <a href="javascript:;">
                <i class=iconfont>&#xe67b;</i>
                <p>首页</p>
            </a>
          </div>
          <div class="g-footer-content">
            <a href="javascript:;">
                <i class=iconfont>&#xe67b;</i>
                <p>首页</p>
            </a>
          </div>
          <div class="g-footer-content">
            <a href="javascript:;">
                <i class=iconfont>&#xe67b;</i>
                <p>首页</p>
            </a>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Mint from 'mint-ui';
import "../static/img/banner1.png"
import "../static/img/fav1.png"
import "../static/img/fav2.png"
import "../static/img/main1.png"
import "../static/img/bottom1.png"
Vue.use(Mint);

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  @import "../static/font/iconfont.css";
  @import "../static/css/lunbotu.css";
  @import "../static/css/app.style";
</style>



<style>
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}



</style>

<script src="../static/js/lunbotu.js"></script>