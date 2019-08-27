<template>
  <div>
    <mt-header title="教员信息">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.back(-1)">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <SelectList></SelectList>
    <TeacherList></TeacherList>
    <Footer></Footer>
      <!-- <OrderBar></OrderBar> -->
  </div>
</template>
<script>
import Vue from "vue";
import Multiselect from "vue-multiselect";
import { Header } from "mint-ui";
import SelectList from "@/components/selectListComponent";
import TeacherList from "@/components/teacherListComponent";
import Footer from "@/components/footer";
// import OrderBar from "@/components/orderBarComponent";

Vue.component(Header.name, Header);

export default {
  components: { SelectList ,TeacherList,Footer},
  data() {
    return {
      selected: null,
      options: ["list", "of", "options"]
    };
  },
  computed: {},
  watch: {},
  //方法集合
  methods: {

  },
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
.mint-header {
  background-color: #2aca4d;
  height: 50px;
}
</style>
