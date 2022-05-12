<template>
  <Navbar/>
  <router-view />

  <!-- footer -->
  <div class="footer text-black text-center p-3 ">
    Web ini dibuat dengan kesabaran dan Ikhtiar
    <br/>
    <a class="text-black" href="https://github.com/Aliefhaikal01">Alief Haikal Alwis</a>
  </div>
</template>
<script>
import { ref } from "vue";
import axios from "axios";
import Navbar from "../src/components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>
<style>
.footer{
  background: aqua;
}
</style>