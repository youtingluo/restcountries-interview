<template>
  <label for="contryName">搜尋國家</label>
  <input
    id="contryName"
    type="text"
    v-model="countryName"
    @input="filterContry"
  />
  <div class="row">
    <div class="card col-3" v-for="item in allCountries" :key="item.flags.png">
      <div class="card-body">
        <img
          class="img-fluid"
          :src="item.flags.png"
          :alt="item.name.official"
        />
        <h5 class="card-title">{{ item.name.official }}</h5>
        <ul class="list-unstyled">
          <li>2位國家代碼(cca2) {{ item.cca2 }}</li>
          <li>3位國家代碼(cca3) {{ item.cca3 }}</li>
          <li v-if="item.translations.zho">
            母語名稱 {{ item.translations.zho.official }}
          </li>
          <li>替代國家名稱(altSpellings) {{ item.altSpellings[0] }}</li>
          <li>國際電話區號(idd) {{ item.idd.root }}</li>
        </ul>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      countries: [],
      pageSize: 25,
      currPage: 1,
      countryName: "",
    };
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
    pagination(data) {
      // 取得資料長度
      console.log(data);
      const dataTotal = this.countries.length;

      // 要顯示在畫面上的資料數量，預設每一頁只顯示五筆資料。
      const perpage = 25;
      const pageTotal = Math.ceil(dataTotal / perpage);
      console.log(`全部資料:${dataTotal} 每一頁顯示:${pageTotal}筆`);
    },
  },
  created() {
    this.getAllcontry();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
