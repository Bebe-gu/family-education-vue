<template>
  <div id="app">
    <transition>
      <router-view />
    </transition>
    <OrderBar></OrderBar>
  </div>
</template>

<script>
import OrderBar from "@/components/orderBarComponent";

export default {
  name: "App",
  components: {
    OrderBar
  }
};
</script>


<style>
body {
  background-color: #fff;
}
#app {
  padding-bottom: 50px;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
  position: absolute;
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}
</style>
