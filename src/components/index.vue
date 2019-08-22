<!--  -->

<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="../../static/images/banner.jpg" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../static/images/banner.jpg" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../static/images/banner.jpg" />
      </mt-swipe-item>
    </mt-swipe>
    <!-- 分类 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-6">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="/teacherList/yw">
            <img src="../../static/images/yw.jpg" />
            <div class="mui-media-body">语文</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="/teacherList/sx">
            <img src="../../static/images/sx.jpg" />
            <div class="mui-media-body">数学</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="/teacherList/yy">
            <img src="../../static/images/yy.jpg" />
            <div class="mui-media-body">英语</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="/teacherList/wl">
            <img src="../../static/images/wl.jpg" />
            <div class="mui-media-body">物理</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="/teacherList/sw">
            <img src="../../static/images/sw.jpg" />
            <div class="mui-media-body">生物</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="/teacherList/hx">
            <img src="../../static/images/hx.jpg" />
            <div class="mui-media-body">化学</div>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 中间文字 -->
    <div>
      <p class="text-word">教育的意义在于鼓励和唤醒</p>
      <div class="data-center">
        <div class="teachers">
          <p class="number">123456</p>
          <p>入住老师</p>
        </div>
        <div class="students">
          <p class="number">123456</p>
          <p>服务学员</p>
        </div>
      </div>
    </div>
    <!-- 名师优选 -->
    <div class="content-title">
      <div class="msyx">优选名师</div>
      <div class="more">
        <router-link to="/teacherList">全部></router-link></div>
    </div>
    <!-- 列表 -->
    <div>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media">
          <router-link to="/teacherDetail/1" class>
            <img class="mui-media-object mui-pull-left" src="../../static/images/w.jpg" />
            <div class="mui-media-body">
              <div class="mui-ellipsis">
                <span class="name">张三</span>
                <span class="phone">T123456789</span>
              </div>
              <div class="mui-ellipsis">
                <span class="school">文理学院</span>
                <span class="subject">英语</span>
              </div>
              <div class="mui-ellipsis">
                <span class="card-1">
                  <i>身</i>本科大一学生
                </span>
                <span class="card-2">
                  <i>证</i>已认证
                </span>
              </div>
            </div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media">
          <router-link to="/teacherDetail/2" class>
            <img class="mui-media-object mui-pull-left" src="../../static/images/w.jpg" />
            <div class="mui-media-body">
              <div class="mui-ellipsis">
                <span class="name">张三</span>
                <span class="phone">T123456789</span>
              </div>
              <div class="mui-ellipsis">
                <span class="school">文理学院</span>
                <span class="subject">英语</span>
              </div>
              <div class="mui-ellipsis">
                <span class="card-1">
                  <i>身</i>本科大一学生
                </span>
                <span class="card-2">
                  <i>证</i>已认证
                </span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "mint-ui";
import Footer from "@/components/footer";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  components: {
    Footer
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  //方法集合
  methods: {},
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {}
};
</script>

<style lang='scss' scoped>
.mint-swipe {
  width: 100%;
  height: 215px;
  .mint-swipe-item {
    img {
      display: block;
      width: 100%;
    }
  }
}

.mui-content > .mui-table-view:first-child {
  margin-top: 5px;
}
.mui-table-view-cell {
  img {
    width: 30px;
    height: 30px;
  }
  .mui-media-body {
    font-size: 14px !important;
    line-height: 14px !important;
    color: #444 !important;
  }
}
.mui-table-view:before {
  height: 0;
}
.mui-content .mui-table-view:after {
  height: 0;
}
.text-word {
  text-align: center;
  padding: 5px 0 10px 0;
  color: #444;
}
p {
  margin: 0;
  padding: 5px;
}
.data-center {
  margin: 0 20px;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  .teachers {
    text-align: center;
    flex: 1;
    border-right: 1px solid #ccc;
  }

  .students {
    text-align: center;
    flex: 1;
  }
  .number {
    color: #222;
    font-weight: bold;
  }
}
.content-title {
  font-size: 14px;
  padding: 10px 20px;
  display: flex;
  .msyx {
    text-align: center;
    flex: 1;
    margin-left: 40px;
  }
  .more {
    width: 40px;
    text-align: center;
  }
}
.mui-media-object {
  border-radius: 5px;
  min-width: 64px !important;
  min-height: 64px !important;
}
.mui-media-body {
  .mui-ellipsis {
    .school,
    .subject,
    .name {
      font-size: 15px;
      color: #222;
      padding-right: 10px;
    }

    padding: 4px;
    i {
      display: inline-block;
      line-height: 16px;
      text-align: center;
      min-width: 16px !important;
      min-height: 16px !important;
      font-style: normal;
      font-size: 12px;
      margin-right: 2px;

      color: #fff;
      border-radius: 2px;
    }
    .card-1,
    .phone {
      padding-right: 20px;
      color: #888;
      i {
        background-color: #ff9900;
      }
    }
    .card-2 {
      color: #888;
      padding-right: 20px;

      i {
        background-color: #e94326;
      }
    }
  }
}
</style>
