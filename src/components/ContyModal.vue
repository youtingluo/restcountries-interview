<template>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" v-if="country.name">{{ country.name.official }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p v-if="country.name">地區：{{ country.region }}</p>
          <p v-if="country.name">國際稱呼：{{ country.name.official }}</p>
          <p v-if="country.name">普遍稱呼：{{ country.name.common }}</p>
          <p v-if="country.name">人口：{{ country.population }}</p>
          <p v-if="country.name">首都：{{ country.cioc }}</p>
          <p v-if="country.name">是否獨立：{{ country.independent ? "是" : "否" }}</p>
          <a v-if="country.maps" target="_blank" :href="country.maps.googleMaps">Google 地圖</a>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            關閉
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";

export default {
  props: ["country"],
  data() {
    return {
      modal: "",
    };
  },
  methods: {
    openModal() {
      this.modal.show();
    },
  },
  mounted() {
    // 實體 Modal
    this.modal = new Modal(this.$refs.modal, {
      backdrop: "static",
    });
  },
};
</script>
