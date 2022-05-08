
<template>
  <main>

    <div class="jumbotron jumbotron-fluid mt-5">
      <div class="container text-right">
        <br>
        <h1 class="mt-5 display-4 fw-bolder ">Surah-surah</h1>
        <p class="i">baca dimana saja dan kapan saja</p>
      </div>
    </div>



    <div class="content-surah mx-5">
      <div class="row">
        <div class="col-xl-3 col-sm-6 col-12 p-1" v-for="(chapter, index) in filterSurah" :key="index">
            <div class="card-content">
                <div class="media d-flex">
                  <div class="media-body m-auto text-center">
                    <h5 class="card-title">{{ chapter.name_simple }}</h5>
                    <p class="card-text">{{ chapter.translated_name.name }}</p>
                    <router-link :to="{ name: 'iqra', params: { id: chapter.id } }" class="btn btn-outline-dark">Iqra </router-link>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>


  </main>
</template>

<script>
import { ref, watch } from "vue";
import axios from "axios";
export default {
  data() {
    return {
      nomor: "1",
      judul: "",
      arti: "",
      listSurah: ref([]),
      namaSurah: "",
      search: "",
    };
  },
  watch: {
    nomor() {
      this.getSurah();
    },
  },
  mounted() {
    this.getSurah();
    this.getlistSurah();
  },
  methods: {
    getSurah() {
      axios
        .get(`https://api.quran.com/api/v4/chapters/${this.nomor}?language=id`)
        .then((response) => {
          this.judul = response.data.chapter;
          this.arti = this.judul.translated_name;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getlistSurah() {
      axios
        .get(`https://api.quran.com/api/v4/chapters?language=id`)
        .then((response) => {
          this.listSurah = response.data.chapters;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    filterSurah: function () {
      return this.listSurah.filter((listSurah) => {
        return listSurah.name_simple.toLowerCase().split("-").join(" ").match(this.search);
      });
    },
  },
};
</script>
<style scoped>
a{
  font-family: monospace;
  font-size: large;
}
body {
  padding: 0;
  margin: 0;

}
h1 {
  color: goldenrod;
}

</style>