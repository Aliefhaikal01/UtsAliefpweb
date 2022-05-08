<script>
export default {
  name: "Navbar",
  components:{}
}
</script>

<template>

  <ul class="nav justify-content-center text-steelblue">
    <img src="../assets/logo%20islami.jpg" class="rounded-circle" width="30" height="30" >
    <li class="nav-item">
      <a class="nav-link active text-steelblue" aria-current="page" href="#">Quran</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-steelblue" href="#">Random Ayat</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-steelblue" href="#">About</a>
    </li>
  </ul>
</template>


<style scoped>
a{
  font-family: monospace;
  font-size: large;
}
body {
  padding: 0;
  margin: 0;
  background: steelblue;
}
.nav  {
  background: #282828;
}

</style>