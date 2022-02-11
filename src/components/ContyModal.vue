<template>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ country[0].name.official }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>地區：{{ country[0].region }}</p>
          <p>國際稱呼：{{ country[0].name.official }}</p>
          <p>普遍稱呼：{{ country[0].name.common }}</p>
          <p>人口：{{ country[0].population }}</p>
          <p>首都：{{ country[0].cioc }}</p>
          <p>是否獨立：{{ country[0].independent ? "是" : "否" }}</p>
          <a target="_blank" :href="country[0].maps.googleMaps">Google 地圖</a>
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
  data() {
    return {
      modal: "",
    };
  },
  props: ["country"],
  methods: {
    openModal() {
      this.modal.show();
    },
  },
  mounted() {
    // 實體 Modal
    console.log(this.$refs);
    this.modal = new Modal(this.$refs.modal, {
      backdrop: "static",
    });
  },
};
</script>
