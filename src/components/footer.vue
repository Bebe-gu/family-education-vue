<!--  -->
<template>
  <div class="mui-text-center content">
    <p>&copy;德才家教版权所有</p>
    <p>请家教热线：076-123456</p>
    <p>点击拨打，时间：80:0-180:0</p>
    <p>教育的世术不在于传授，而在于鼓励和唤醒</p>
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
p {
  margin: 2px;
  padding: 0px;
}
.content {
  padding: 10px;
  p {
    &:nth-child(2) {
      color: #ff9900;
    }
    &:last-child {
      color: #222;
      font-size: 14px;
    }
  }
}
</style>
