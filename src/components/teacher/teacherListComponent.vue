<!--  -->
<template>
  <div class>
    <router-link to="/teacherDetail/1">
      <div class="media teacher-info">
        <div class="media-content">
          <div class="media-left">
            <a href="#">
              <img class="media-object" src="/static/images/w.jpg" alt />
            </a>
          </div>
          <div class="media-body">
            <div class>
              <span class="name">张三</span>
              <span class="phone">T123456789</span>
            </div>
            <div class>
              <span class="school">文理学院</span>
              <span class="subject">英语</span>
            </div>
            <div class>
              <span class="card-1">
                <i>身</i>本科大一学生
              </span>
              <span class="card-2">
                <i>证</i>已认证
              </span>
            </div>
          </div>
        </div>
      </div>
    </router-link>
    <router-link to="/teacherDetail/1">
      <div class="media teacher-info">
        <div class="media-content">
          <div class="media-left">
            <a href="#">
              <img class="media-object" src="/static/images/m.jpg" alt />
            </a>
          </div>
          <div class="media-body">
            <div>
              <span class="name">张三</span>
              <span class="phone">T123456789</span>
            </div>
            <div>
              <span class="school">文理学院</span>
              <span class="subject">英语</span>
            </div>
            <div>
              <span class="card-1">
                <i>身</i>本科大一学生
              </span>
              <span class="card-2">
                <i>证</i>已认证
              </span>
            </div>
          </div>
        </div>
      </div>
    </router-link>
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
    display: flex;
    margin: 0 20px 5px 20px;
    padding: 5px 0;
    border-bottom: 1px solid #eee;
    .media-left {
    }
    .media-body {
      flex: 1;
      .school,
      .subject,
      .name {
        font-size: 15px;
        color: #222;
        padding-right: 10px;
      }
    }
  }
  .media-object {
    border-radius: 5px;
    width: 64px;
    height: 64px;
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

