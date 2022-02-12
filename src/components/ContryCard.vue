<template>
  <label for="contryName" class="me-2">搜尋國家</label>
  <input
    id="contryName"
    type="text"
    v-model="countryName"
    placeholder="按下 enter 搜尋"
    @keypress.enter="filterContry"
  />
  <button type="button" class="btn btn-primary mx-3" @click="sortContry">
    正序
  </button>
  <button type="button" class="btn btn-primary" @click="reverseSortContry">
    倒序
  </button>
  <div class="row g-3">
    <div class="col-3" v-for="item in allCountries" :key="item.flags.png">
      <div class="card">
        <img
          class="card-img-top"
          :src="item.flags.png"
          :alt="item.name.official"
          height="200"
        />
        <div class="card-body">
          <a href="#" class="card-link" @click.prevent="getDetail(item)">{{
            item.name.official
          }}</a>
          <ul class="list-unstyled text-start mt-3">
            <li class="mb-2">2位國家代碼(cca2)：{{ item.cca2 }}</li>
            <li class="mb-2">3位國家代碼(cca3)：{{ item.cca3 }}</li>
            <li class="mb-2" v-if="item.translations.zho">
              母語名稱：{{ item.translations.zho.official }}
            </li>
            <li class="mb-2">替代國家名稱(altSpellings)：{{ item.altSpellings[0] }}</li>
            <li>國際電話區號(idd)：{{ item.idd.root }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <ContryModal ref="contryModal" :country="contry" />
</template>

<script>
import ContryModal from "./ContyModal.vue";

export default {
  name: "ContryCard",
  data() {
    return {
      countries: [],
      contry: {},
      pageSize: 25,
      currPage: 1,
      countryName: "",
      sort: true,
    };
  },
  components: {
    ContryModal,
  },
  computed: {
    allCountries() {
      return this.countries;
    },
  },
  methods: {
    getAllcontry() {
      this.$http.get("https://restcountries.com/v3.1/all").then((res) => {
        this.countries = res.data;
      });
    },
    filterContry() {
      this.countryName.toLowerCase();
      if (!this.countryName) {
        this.getAllcontry();
      } else {
        this.$http
          .get(`https://restcountries.com/v3.1/name/${this.countryName}`)
          .then((res) => {
            console.log(res.data);
            this.countries = res.data;
          });
      }
    },
    sortContry() {
      this.countries.sort((a, b) => {
        if (a.name.official[0] < b.name.official[0]) {
          return -1;
        }
        if (a.name.official[0] > b.name.official[0]) {
          return 1;
        }
      });
    },
    reverseSortContry() {
      this.countries.reverse();
    },
    getDetail(item) {
      this.contry = {};
      this.$refs.contryModal.openModal();
      this.$http
        .get(`https://restcountries.com/v3.1/name/${item.name.official}?fullText=true`)
        .then((res) => {
          console.log(res.data);
          this.contry = res.data[0];
        });
    },
  },
  created() {
    this.countryName = "";
    this.getAllcontry();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
