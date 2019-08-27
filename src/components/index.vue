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
    <div class>
      <ul class="clearfix table-view">
        <li class="table-view-cell media col-xs-4 col-sm-4">
          <router-link to="/teacherList/yw">
            <img src="../../static/images/yw.jpg" />
            <div class="media-body">语文</div>
          </router-link>
        </li>
        <li class="table-view-cell media col-xs-4 col-sm-4">
          <router-link to="/teacherList/sx">
            <img src="../../static/images/sx.jpg" />
            <div class="media-body">数学</div>
          </router-link>
        </li>
        <li class="table-view-cell media col-xs-4 col-sm-4">
          <router-link to="/teacherList/yy">
            <img src="../../static/images/yy.jpg" />
            <div class="media-body">英语</div>
          </router-link>
        </li>
        <li class="table-view-cell media col-xs-4 col-sm-4">
          <router-link to="/teacherList/wl">
            <img src="../../static/images/wl.jpg" />
            <div class="media-body">物理</div>
          </router-link>
        </li>
        <li class="table-view-cell media col-xs-4 col-sm-4">
          <router-link to="/teacherList/sw">
            <img src="../../static/images/sw.jpg" />
            <div class="media-body">生物</div>
          </router-link>
        </li>
        <li class="table-view-cell media col-xs-4 col-sm-4">
          <router-link to="/teacherList/hx">
            <img src="../../static/images/hx.jpg" />
            <div class="media-body">化学</div>
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
        <router-link to="/teacherList">
          全部
          <span class="glyphicon glyphicon-menu-right pull-right"></span>
        </router-link>
      </div>
    </div>
    <!-- 列表 -->
    <TeacherList></TeacherList>
    <Footer></Footer>
      <!-- <OrderBar></OrderBar> -->
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "mint-ui";
import Footer from "@/components/footer";
import TeacherList from "@/components/teacherListComponent";
// import OrderBar from "@/components/orderBarComponent";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  components: {
    Footer,
    TeacherList

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
.media:first-child {
  margin-top: 15px;
}
.mint-swipe {
  width: 100%;
  height: 215px;
  .mint-swipe-item {
    width: 100%;
    height: 100%;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}

.table-view {
  padding-left: 0;
}

.table-view-cell {
  text-align: center;
  img {
    width: 50px;
    height: 50px;
  }
  .media-body {
    padding-top: 10px;
  }
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
  margin-top: 10px;
  font-size: 14px;
  padding: 10px 20px;
  display: flex;
  .msyx {
    text-align: center;
    flex: 1;
    margin-left: 40px;
  }
  .more {
    a {
      width: 40px;
      text-align: center;
      span {
        margin-top: 2px;
      }
    }
  }
}
.teacher-info {
  margin-top: 10px;
  .media-content {
    margin: 0 20px 5px 20px;
    padding: 5px 0;
    border-bottom: 1px solid #ccc;
  }
}
.media-object {
  border-radius: 5px;
  width: 64px;
  height: 64px;
}
.media-body {
  .school,
  .subject,
  .name {
    font-size: 15px;
    color: #222;
    padding-right: 10px;
  }

  padding: 0 4px;
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
</style>
