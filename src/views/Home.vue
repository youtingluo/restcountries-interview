<template>
  <div class="home">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      text: "文字",
    };
  },
  created() {
    this.$http.get("https://restcountries.com/v3.1/all").then((res) => {
      console.log(res.data);
    });
  },
};
</script>
