<!--  -->
<template>
  <div class>
    <mt-header title="教员信息">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class>
      <div class="media">
        <div class="media-left">
          <a href="#">
            <img class="media-object" src="/static/images/w.jpg" alt />
          </a>
        </div>
        <div class="media-body">
          <p>浏览次数：76次 成功记录：15</p>
          <p>认证：证件已认证</p>
          <p>ID：123456</p>
        </div>
      </div>

      <div class="person-info">
        <p>基本信息</p>
        <div>姓名：教员</div>
        <div>高校：</div>
        <div>专业：</div>
        <div>学校位置：</div>
        <div>家庭住址：</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Header } from "mint-ui";
import { Cell, CellGroup } from "vant";

Vue.use(Cell).use(CellGroup);
export default {
  components: {},
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
//@import url(); 引入公共css类
.mint-header {
  background-color: #2aca4d;
  height: 50px;
}
.media-object {
  width: 64px;
  height: 64px;
  border-radius: 50%;
}
.media {
  font-size: 14px;
  padding: 10px 20px;
  .media-body {
    padding-left: 20px;
    p {
      padding: 1px 0px;
    }
  }
}
.person-info {

  p {
    background-color: #eee;
    padding: 5px 20px;
    font-weight: 700;
  }
  div{
    padding: 5px 20px;
  }
}
</style>
