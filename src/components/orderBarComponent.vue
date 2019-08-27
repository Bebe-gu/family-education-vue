<!--  -->
<template>
  <div class="content">
    <div class="index">
      <a href>
        <span class="glyphicon glyphicon-home"></span>
      </a>
    </div>
    <div class="order">
      <a href>快速预约</a>
    </div>
    <div class="profile">
      <a href>个人中心</a>
    </div>
  </div>
</template>

<script>
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
.content {
  display: flex;
  background-color: #f78400;
  height: 50px;
  line-height: 50px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  a {
    color: #fff !important;
    text-decoration: none;
  }
  .index {
    width: 20%;
    background-color: #47aef3;
  }
  .order {
    width: 40%;
  }
  .profile {
    width: 40%;
    background-color: #2aca4d;
  }
}
</style>
