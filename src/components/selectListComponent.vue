<!--  -->
<template>
  <div class>
    <van-dropdown-menu>
      <van-dropdown-item title="科目" ref="item">
        <van-tree-select
          :items="items"
          :active-id.sync="activeId"
          :main-active-index.sync="mainActiveIndex"
        />
        <van-button block type="info" @click="onConfirm">确认</van-button>
      </van-dropdown-item>
      <van-dropdown-item title="区域" v-model="value2" :options="option2"  />
      <van-dropdown-item title="性别" v-model="value3" :options="option3"  />
      <van-dropdown-item title="类型" v-model="value4" :options="option4"  />
    </van-dropdown-menu>
  </div>
</template>

<script>
import Vue from "vue";
import { DropdownMenu, DropdownItem, TreeSelect, Button } from "vant";
import { log } from 'util';

Vue.use(DropdownMenu).use(DropdownItem);
Vue.use(TreeSelect);
Vue.use(Button);
export default {
  components: {},
  data() {
    return {
      items: [
        {
          id: 1,
          text: "小学",
          children: [
            { text: "小学语文", id: 1 },
            { text: "小学数学", id: 2 },
            { text: "小学英语", id: 3 }
          ]
        },
        {
          id: 2,
          text: "初中",
          children: [
            { text: "初中语文", id: 1 },
            { text: "初中数学", id: 2 },
            { text: "初中英语", id: 3 },
            { text: "初中物理", id: 4 },
            { text: "初中化学", id: 5 },
            { text: "初中生物", id: 6 }
          ]
        },
        {
          id: 3,
          text: "高中",
          children: [
            { text: "高中语文", id: 1 },
            { text: "高中数学", id: 2 },
            { text: "高中英语", id: 3 },
            { text: "高中物理", id: 4 },
            { text: "高中化学", id: 5 },
            { text: "高中生物", id: 6 }
          ]
        }
      ],
      activeId: 1,
      mainActiveIndex: 0,
      value1: 0,
      value2: "a",
      value3: 0,
      value4: "a",

      option2: [
        { text: "武陵区", value: "武陵区" },
        { text: "鼎城区", value: "鼎城区" }
      ],
      option3: [{ text: "男", value: 1 }, { text: "女", value: 0 }],
      option4: [
        { text: "在校大学生", value: "在校大学" },
        { text: "专职教师", value: "专职教师" }
      ]
    };
  },
  computed: {},
  watch: {},
  //方法集合
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
    changeColor(){
      console.log(this);

    }
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
.van-button--info {
  background-color: #2aca4d;
  border: 1px solid #2aca4d;
}
.van-tree-select__item {
  font-weight: normal;
}
.van-tree-select__item--active {
  font-weight: 700;
  //color: #333;
}

//@import url(); 引入公共css类
// .btn-select {
//   background-color: #fff;
// }
// .btn-group.open .dropdown-toggle {
//   -webkit-box-shadow: none;
//   box-shadow: none;
// }
// .btn-nav {
//   border-bottom: 1px solid #ccc;
// }

// .list-box {
//   display: flex;
//   border-bottom: 1px solid #eee;
//   .list-menu {
//     list-style: none;
//     margin: 0;
//     padding: 0;
//     li {
//       width: 100px;
//       border-right: 1px solid #eee;
//       border-bottom: 1px solid #eee;
//       padding: 10px 20px;
//       text-align: center;
//       &:last-child {
//         border-bottom: 0;
//       }
//     }
//   }
//   .list-info {
//     flex: 1;
//     padding: 10px;
//     a {
//       display: inline-block;
//       border: 1px solid #eee;
//       padding: 5px;
//       margin: 5px;
//       border-radius: 5px;
//     }
//     a.active {
//       border: 1px solid #2aca4d;
//       color: #2aca4d;
//     }
//   }
// }
</style>
