<template>
  <!-- <audio controls src="Alafasy/mp3/002001.mp3">
    Your browser does not support the
    <code>audio</code> element.
  </audio> -->
  <Navbar/>
  <router-view />
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
