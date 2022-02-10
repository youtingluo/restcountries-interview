<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      text: "文字",
    };
  },
  components: {
    HelloWorld,
  },
};
</script>
