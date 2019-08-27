<!--  -->
<template>
  <div class="content">
    <mt-header title="教员信息">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.back(-1)">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <section style="padding:0;" v-for="item in teacherInfo" :key="item.id">
      <div class="jy_tx">
        <img
          :src="item.sex==1?'/static/images/w.jpg':'/static/images/m.jpg'"
          onerror="imageLoadError(this,1)"
        />
        <div>
          <p>
            <span style="float:left;margin-left:0;">
              浏览次数：{{item.view_number}}次
              <span>成功记录：</span>
              <font
                style="height:13px;width:13px;background:#f78400;color:#fff;line-height:13px;text-align:center;float:right;margin-top:12px;  "
              >{{item.success_number}}</font>
            </span>
          </p>
          <p>
            最近登录时间：
            <font color="#000">2019-08-12</font>
          </p>
          <p>
            <span style="margin-left:0;float:left;">认证：</span>
            <span
              style="float:left;height:21px;width:70px;border:#2ccb76 1px solid;color:#2ccb76;margin-top:7px;line-height:21px;text-align:center;margin:left:0;border-radius:5px;margin-left:0;"
            >{{item.is_verify==1?'已认证':'未认证'}}</span>
          </p>
          <p>
            ID：
            <font color="#000">{{item.teacher_number}}</font>
          </p>
        </div>
      </div>
      <div class="wzxx">
        <h3>基本信息</h3>
        <dl>
          <dd class="dddp">
            <p style="margin-left:5%;float:left;">
              <span>姓名：</span>
              {{item.name}}&nbsp;&nbsp;
              <span>{{item.sex==1?'[女]':'[男]'}}</span>
            </p>
            <p style="margin-right:5%;float:right;">
              <span>地区：</span>
              {{item.native_place}}
            </p>

            <p style="margin-left:5%;float:left;">
              <span>高校：</span>
              {{item.university}}
            </p>
            <p style="margin-right:5%;float:right;">
              <span>目前身份：</span>
              {{item.identity}}
            </p>

            <p style="margin-left:5%;float:left;">
              <span>专业：</span>
              {{item.subject}}
            </p>
            <p style="margin-right:5%;float:right;">
              <span>家庭住址：</span>
              {{item.address}}
            </p>

            <p style="margin-left:5%;float:left;">
              <span>高中：</span>
              {{item.high_school}}
            </p>
            <p style="margin-right:5%;float:right;">
              <span>学校位置：</span>
            </p>
          </dd>
        </dl>
        <h3>家教信息</h3>
        <h4>自我描述</h4>
        <dl>
          <dt class="other_dt">
            <p>{{item.teach_style}}</p>
          </dt>
        </dl>
        <h4>可授科目</h4>
        <dl>
          <dt class="other_dt">{{item.approve_subject}}</dt>
          <p style="clear:both;"></p>
        </dl>
        <h4>可授区域</h4>
        <dl>
          <dt class="other_dt">{{item.approve_area}}</dt>
        </dl>
        <h4>所获证书</h4>
        <dl>
          <dt class="other_dt">
            <p>{{item.certificate}}</p>
          </dt>
        </dl>
        <h4>辅导方式</h4>
        <dl>
          <dt class="other_dt">{{item.teach_style}}</dt>
          <p style="clear:both;"></p>
        </dl>
        <h4>家教经验</h4>
        <dl>
          <dt class="other_dt">
            <p>{{item.teach_experience}}</p>
          </dt>
        </dl>
        <h4>薪资要求</h4>
        <dt class="money_dt">
          <p>{{item.price}}</p>
        </dt>

        <a href="javascript:void(0)" onClick="jump2(368770)" class="btn btn-warning btn-block">预约教员</a>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import { Header } from "mint-ui";
import { Cell, CellGroup } from "vant";
import axios from "axios";
import { log } from "util";

Vue.use(Cell).use(CellGroup);
export default {
  components: {},
  data() {
    return {
      teacherInfo: [],
      title: ""
    };
  },
  computed: {},
  watch: {},
  //方法集合
  methods: {},
  created() {
    var id = this.$route.query.id;
    console.log(id);
    axios.get("http://localhost:3000/api/teacherDetail?id=" + id).then(res => {
      this.teacherInfo = res.data;
      console.log(this.teacherInfo);
    });
  },
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
  padding-bottom: 10px;
}
p {
  font-weight: normal;
}
dt {
  font-weight: normal;
}
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
  div {
    padding: 5px 20px;
  }
}

/* 教员内容页 */

/*.jy_tx{ background:url(02.jpg) no-repeat; height:150px; background-size:100% 100%; text-align:center; padding:10px 0;}*/

.jy_tx {
  height: 100%;
  width: 100%;
}

.jy_tx img {
  width: 85px;
  height: 85px;
  border-radius: 55px;
  margin-top: 34px;
  margin-left: 5%;
}

/*.jy_tx p{ font-size:16px; }*/

.jy_tx div {
  float: right;
  margin-top: 5px;
  font-size: 12px;
  color: #777777;
  line-height: 37px;
  width: 68%;
}

.jy_tx div p {
  height: 37px;
  width: 92%;
  border-bottom: 1px #dddddd solid;
}

.jy_tx div p:nth-child(4) {
  border: 0;
}

.jy_tx div p span {
  margin-left: 25px;
}

.wzxx {
  font-size: 14px;
}

.wzxx .dddp p {
  border-bottom: 1px #dddddd solid;
  line-height: 40px;
  width: 45%;
  height: 40px;
  overflow: hidden;
}

.wzxx .dddp p span {
  color: #777777;
}

.wzxx .dddp p:last-child {
  border: 0;
}

.wzxx .dddp p:nth-last-child(2) {
  border: 0;
}

.wzxx h3 {
  background: #f2f2f2;
  height: 30px;
  line-height: 30px;
  padding: 0 20px;
  clear: both;
  font-weight: 700;
}

.wzxx h4 {
  font-size: 15px;
  color: #f78400;
  padding: 15px 20px;
}

.wzxx .other_dt,
.money_dt {
  line-height: 22px;
  border-bottom: 1px #dddddd solid;
  width: 90%;
  margin-left: 5%;
  padding-bottom: 15px;
}

.width1 {
  width: 33%;
  float: left;
  margin-top: 5px;
  text-align: left;
}

.width2 {
  width: 33%;
  float: left;
  margin-top: 5px;
  text-align: center;
}

.width3 {
  width: 33%;
  float: right;
  margin-top: 5px;
  text-align: right;
}
</style>
