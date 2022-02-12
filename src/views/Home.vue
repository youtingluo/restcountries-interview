<template>
  <div class="home">
    <ContryCard />
  </div>
</template>

<script>
import ContryCard from "../components/ContryCard.vue";

export default {
  name: "Home",
  data() {
    return {
      text: "文字",
    };
  },
  components: {
    ContryCard,
  },
};
</script>
